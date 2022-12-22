import { useState, useEffect } from "react";
import {
  Alert,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Slide,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { onValue, push, ref } from "firebase/database";
import database from "../../../firebase-init.js";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CloseIcon from "@mui/icons-material/Close";

const validationSchema = yup.object({
  email: yup.string().email("Please enter a valid email").required("Required"),
});

function NewsletterSignup() {
  const [showSignup, setShowSignup] = useState(true);
  // Check the value of SHOW_SIGNUP in local storage
  // to determine if we need to show the Sign-up form
  useEffect(() => {
    const show = window.localStorage.getItem("SHOW_SIGNUP");
    if (show != null) {
      setShowSignup(JSON.parse(show));
    }
  }, []);

  // Set whether to show the signup, determined if the user has
  // previously submitted their email or not.
  useEffect(() => {
    window.localStorage.setItem("SHOW_SIGNUP", JSON.stringify(showSignup));
  }, [showSignup]);

  const handleCloseSignup = () => {
    setShowSignup(false);
  };

  // We do not want to modify the 'showSignup' state and save that
  // value in local storage if we are just hiding the form (Clicking '
  // the 'X'). We only want to prevent the form from showing up upon
  //revisits if the user has already submitted their email. 
  const [tempHideSignup, setTempHideSignup] = useState(true)
  const handleTempHideSignup = () => {
    setTempHideSignup(false);
  }


  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const handleCloseSuccessSnackbar = () => {
    setOpenSuccessSnackbar(false);
  };

  const [openWarnSnackbar, setOpenWarnSnackbar] = useState(false);
  const handleCloseWarnSnackbar = () => {
    setOpenWarnSnackbar(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const newsletterEmailRef = ref(database, "newsletterEmailSignUp/");
      // Query existing email entries in the database
      onValue(
        newsletterEmailRef,
        (snapshot) => {
          const data = snapshot.val();
          /*
           * Convert newsletterEmailSignUp object (which contains objects
           * of objects differentiated by their unique keys) to an array of
           * objects of the form:
           *
           *    [ { email: "user1@email.com" }, { email: "user2@email.com" }, ...]
           *
           * This is done to allow us to loop through to see if the submitted
           * value by the user already exists in the database. If it doesn't we
           * add it, if it does we do NOT add it and notify the user.
           */
          let emailEntryExists = false;
          if(data != undefined || data != null){
            for (let uniqueKey of Object.values(data)) {
              if (uniqueKey.email === values.email) {
                emailEntryExists = true;
                setOpenWarnSnackbar(true);
                break;
              }
            }
          }
          
          if (!emailEntryExists) {
            push(ref(database, "newsletterEmailSignUp/"), {
              email: values.email,
            }).then(() => {
              //Upon success
              setOpenSuccessSnackbar(true);
              handleCloseSignup();
            });
          }
        },
        {
          // We want to only run onValue()'s callback once to retrieve
          // the emails that already exist in the database and compare
          // the email being submitted. If this option was not set then
          // the onValue() callback would fire again when a new user
          // email is pushed.
          onlyOnce: true,
        }
      );
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Slide
        direction="right"
        in={showSignup && tempHideSignup}
        timeout={600}
        mountOnEnter
        unmountOnExit
      >
        <Card
          raised
          sx={{
            left: "1rem",
            bottom: "1rem",
            right: "1rem",
            position: "fixed",
            maxWidth: "24rem",
            borderStyle: "solid",
            borderColor: "primary.main",
            zIndex: 999,
          }}
        >
          <CardHeader
            action={
              <IconButton onClick={handleTempHideSignup}>
                <CloseIcon fontSize="large" sx={{ color: "primary.main" }} />
              </IconButton>
            }
            title="BAAA Newsletter Sign-up"
          />
          <Divider variant="middle" sx={{ color: "primary.main" }} />
          <CardContent>
            <Typography>
              Sign up to make sure you never miss out on a new issue of The BAAA
              Journal!
            </Typography>
            <TextField
              fullWidth
              id="email"
              variant="standard"
              label="Email"
              {...formik.getFieldProps("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ marginTop: ".5rem" }}
            />
            <Button
              variant="contained"
              type="submit"
              endIcon={<ArrowRightIcon />}
              disabled={formik.isSubmitting || !formik.isValid}
              sx={{ float: "right", margin: "1rem 0rem" }}
            >
              Sign Up
            </Button>
          </CardContent>
        </Card>
      </Slide>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={openSuccessSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSuccessSnackbar}
        // Push snackbar above the 'Apply For Membership' Button
        sx={{ bottom: { mobile: "4.5rem" } }}
      >
        <Alert variant="filled" severity="success">
          Thank you, your email has been added to our distribution list!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={openWarnSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseWarnSnackbar}
        // Push snackbar above the 'Apply For Membership' Button
        sx={{ bottom: { mobile: "4.5rem" } }}
      >
        <Alert variant="filled" severity="warning">
          You have already added your email to our distribution list!
        </Alert>
      </Snackbar>
    </form>
  );
}

export default NewsletterSignup;
