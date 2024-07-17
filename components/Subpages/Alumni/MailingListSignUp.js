import { useState } from "react";
import {
  Alert,
  Button,
  Grid,
  Link,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { push, ref } from "firebase/database";
import database from "../../../firebase-init.js";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const maxPledgeClassYear  = new Date().getFullYear();
const minPledgeClassYear  = 1903;

const validationSchema = yup.object({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  pledgeClass: yup
    .number()
    .min(minPledgeClassYear, "Pledge Class must be after the chapter was established")
    .max(maxPledgeClassYear, "Pledge Class cannot be in the future")
    .typeError("Please enter your pledge class year")
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
});

function MailingListSignup() {
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
      });

      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography textAlign="center" variant="h4">
        Beta Alpha Alumni Mailing List
      </Typography>
      <Typography
        textAlign="center"
        sx={{
          margin: {
            laptop: "0.5rem 4rem",
          },
        }}
      >
        Sign up to stay up to date on the Beta Alpha Alumni Association and
        never miss out on a new issue of The BAAA Journal!
      </Typography>
      <Grid container spacing={2}>
        <Grid item mobile={12} tablet={6}>
          <TextField
            id="firstName"
            fullWidth
            label="First Name"
            {...formik.getFieldProps("firstName")}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            sx={{ marginTop: ".5rem" }}
          />
        </Grid>
        <Grid item mobile={12} tablet={6}>
          <TextField
            fullWidth
            id="lastName"
            label="Last Name"
            {...formik.getFieldProps("lastName")}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            sx={{ marginTop: ".5rem" }}
          />
        </Grid>
        <Grid item mobile={12} tablet={6}>
          <TextField
            fullWidth
            id="pledgeClass"
            label="Pledge Class (ex: 1997)"
            {...formik.getFieldProps("pledgeClass")}
            error={
              formik.touched.pledgeClass && Boolean(formik.errors.pledgeClass)
            }
            helperText={formik.touched.pledgeClass && formik.errors.pledgeClass}
            sx={{ marginTop: ".5rem" }}
          />
        </Grid>
        <Grid item mobile={12} tablet={6}>
          <TextField
            fullWidth
            id="email"
            label="Email"
            {...formik.getFieldProps("email")}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{ marginTop: ".5rem" }}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        type="submit"
        endIcon={<ArrowRightIcon />}
        disabled={formik.isSubmitting || !formik.isValid}
        sx={{ margin: "1rem 0rem" }}
      >
        Sign Up
      </Button>
      <Typography color="#b9b9b9" variant="subtitle2">
        This site is protected by reCAPTCHA and the Google{" "}
        <Link href="https://policies.google.com/privacy">Privacy Policy</Link>{" "}
        and{" "}
        <Link href="https://policies.google.com/terms">Terms of Service</Link>{" "}
        apply.
      </Typography>
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

export default MailingListSignup;
