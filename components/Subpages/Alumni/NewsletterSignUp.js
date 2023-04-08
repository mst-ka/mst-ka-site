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
import { push, ref } from "firebase/database";
import database from "../../../firebase-init.js";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CloseIcon from "@mui/icons-material/Close";

const validationSchema = yup.object({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  pledgeClass: yup
    .number()
    .typeError("Please enter your pledge class year")
    .positive("Pledge class must be a positive year")
    .required("Required"),
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
  // value in local storage if we are just hiding the form (Clicking
  // the 'X'). We only want to prevent the form from showing up upon
  // revisits if the user has already submitted their email.
  const [tempHideSignup, setTempHideSignup] = useState(true);
  const handleTempHideSignup = () => {
    setTempHideSignup(false);
  };

  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const handleCloseSuccessSnackbar = () => {
    setOpenSuccessSnackbar(false);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      pledgeClass: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      push(ref(database, "newsletterEmailSignUp/"), {
        firstName: values.firstName,
        lastName: values.lastName,
        pledgeClass: values.pledgeClass,
        email: values.email,
      }).then(() => {
        //Upon success
        setOpenSuccessSnackbar(true);
        handleCloseSignup();
      });

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
              id="firstName"
              fullWidth
              variant="standard"
              label="First Name"
              {...formik.getFieldProps("firstName")}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
              sx={{ marginTop: ".5rem" }}
            />
            <TextField
              fullWidth
              id="lastName"
              variant="standard"
              label="Last Name"
              {...formik.getFieldProps("lastName")}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              sx={{ marginTop: ".5rem" }}
            />
            <TextField
              fullWidth
              id="pledgeClass"
              variant="standard"
              label="Pledge Class (ex: 1997)"
              {...formik.getFieldProps("pledgeClass")}
              error={
                formik.touched.pledgeClass && Boolean(formik.errors.pledgeClass)
              }
              helperText={
                formik.touched.pledgeClass && formik.errors.pledgeClass
              }
              sx={{ marginTop: ".5rem" }}
            />
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
    </form>
  );
}

export default NewsletterSignup;
