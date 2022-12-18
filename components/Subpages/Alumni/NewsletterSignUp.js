import { useState } from "react";
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
  email: yup.string().email("Please enter a valid email").required("Required"),
});

function NewsletterSignUp() {
  const [showSignUp, setShowSignUp] = useState(true);
  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      push(ref(database, "newsletterEmailSignUp/"), {
        email: values.email,
      }).then(() => {
        //Upon success
        setOpenSnackbar(true);
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Slide
        direction="right"
        in={showSignUp}
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
              <IconButton onClick={handleCloseSignUp}>
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
              onClick={handleCloseSignUp}
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
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
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

export default NewsletterSignUp;
