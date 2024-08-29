import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";
import { push, ref } from "firebase/database";
import database from "../../firebase-init";
import Banner from "../../components/Layout/Banner/Banner";
import { scrollToErrors } from "../../utils/form-helpers.js";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const alumniSpotlightValidationSchema = yup.object({
  yourFullName: yup.string().required("Required"),
  yourPhoneNumber: yup
    .string()
    .min(10, "Please enter full 10-digit phone number")
    .max(15, "Phone number may not be greater than 15 digits")
    .required("Required"),
  yourEmail: yup
    .string()
    .email("Please enter a valid email")
    .required("Required"),
  recFullName: yup.string().required("Required"),
  recPhoneNumber: yup
    .string()
    .min(10, "Please enter full 10-digit phone number")
    .max(15, "Phone number may not be greater than 15 digits")
    .required("Required"),
  recEmail: yup
    .string()
    .email("Please enter a valid email")
    .required("Required"),
  whyRecommended: yup.string().required("Required"),
});

function AlumniSpotlight() {
  const [recaptchaPassed, setRecaptchaPassed] = useState(false);
  //Handler for enabling the submit button for the form once the ReCAPTCHA is successful
  const handleRecaptcha = () => {
    setRecaptchaPassed(true);
  };

  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const handleCloseSuccessSnackbar = () => {
    setOpenSuccessSnackbar(false);
  };

  const formik = useFormik({
    initialValues: {
      yourFullName: "",
      yourPhoneNumber: "",
      yourEmail: "",
      recFullName: "",
      recPhoneNumber: "",
      recEmail: "",
      whyRecommended: "",
    },
    validationSchema: alumniSpotlightValidationSchema,
    onSubmit: (values, actions) => {
      push(ref(database, "alumniSpotlight/"), {
        yourFullName: values.yourFullName,
        yourPhoneNumber: values.yourPhoneNumber,
        yourEmail: values.yourEmail,
        recFullName: values.recFullName,
        recPhoneNumber: values.recPhoneNumber,
        recEmail: values.recEmail,
        whyRecommended: values.whyRecommended,
      }).then(() => {
        //Upon success
        setOpenSuccessSnackbar(true);
        actions.resetForm();
      });
    },
  });

  return (
    <div>
      <Banner text="Alumni Spotlight Recommendation" />
      <form onSubmit={formik.handleSubmit}>
        <Container
          sx={{
            padding: {
              mobile: "2rem",
              tablet: "2rem 12rem",
              laptop: "2rem auto",
            },
          }}
        >
          <Typography align="justify">
            We are thrilled to feature the achievements and stories of fellow
            alumni in our upcoming <Link href="/alumni">BAAA Journals</Link>.
            This is your opportunity to recommend a fellow brother whose
            accomplishments and experiences would inspire and connect our
            chapter. Your recommendations help us highlight the best of our
            brotherhood, and we appreciate your input in shaping our spotlight
            features.
          </Typography>
          <br />
          <Typography align="justify">
            We are seeking to highlight brothers whose stories reflect the
            values and ideals of The Kappa Alpha Order. Please share why you
            believe we should connect with this brother. For example, what
            notable achievements, qualities, or experiences make him stand out?
            Additionally, what topics should we be sure to cover in our
            conversation with him? Whether it&apos;s his professional journey,
            contributions to the community, mentorship, experiences, or how he
            embodies the principles of Kappa Alpha, your insights will guide our
            discussion and help us feature a well-rounded profile.
          </Typography>
          <Box sx={{ padding: "1rem 0rem" }}>
            <Typography variant="h5">Your Information</Typography>
            <Typography>
              Providing your contact information allows us to follow up with you
              if we need help connecting with your recommendation.
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item mobile={12} tablet={4}>
              <TextField
                id="yourFullName"
                fullWidth
                label="Full Name"
                required
                {...formik.getFieldProps("yourFullName")}
                error={
                  formik.touched.yourFullName &&
                  Boolean(formik.errors.yourFullName)
                }
                helperText={
                  formik.touched.yourFullName && formik.errors.yourFullName
                }
              />
            </Grid>
            <Grid item mobile={12} tablet={4}>
              <TextField
                id="yourPhoneNumber"
                fullWidth
                label="Phone Number (XXXXXXXXXX)"
                required
                {...formik.getFieldProps("yourPhoneNumber")}
                error={
                  formik.touched.yourPhoneNumber &&
                  Boolean(formik.errors.yourPhoneNumber)
                }
                helperText={
                  formik.touched.yourPhoneNumber &&
                  formik.errors.yourPhoneNumber
                }
              />
            </Grid>
            <Grid item mobile={12} tablet={4}>
              <TextField
                id="yourEmail"
                fullWidth
                label="Email"
                required
                {...formik.getFieldProps("yourEmail")}
                error={
                  formik.touched.yourEmail && Boolean(formik.errors.yourEmail)
                }
                helperText={formik.touched.yourEmail && formik.errors.yourEmail}
              />
            </Grid>
          </Grid>
          <Box sx={{ padding: "1rem 0rem" }}>
            <Typography variant="h5">Recommended Brother</Typography>
            <Typography>
              Providing the contact information of the brother you are
              recommending allows us to reach out directly to gather further
              details for the Alumni Spotlight.
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item mobile={12} tablet={4}>
              <TextField
                id="recFullName"
                fullWidth
                label="Full Name"
                required
                {...formik.getFieldProps("recFullName")}
                error={
                  formik.touched.recFullName &&
                  Boolean(formik.errors.recFullName)
                }
                helperText={
                  formik.touched.recFullName && formik.errors.recFullName
                }
              />
            </Grid>
            <Grid item mobile={12} tablet={4}>
              <TextField
                id="recPhoneNumber"
                fullWidth
                label="Phone Number (XXXXXXXXXX)"
                required
                {...formik.getFieldProps("recPhoneNumber")}
                error={
                  formik.touched.recPhoneNumber &&
                  Boolean(formik.errors.recPhoneNumber)
                }
                helperText={
                  formik.touched.recPhoneNumber && formik.errors.recPhoneNumber
                }
              />
            </Grid>
            <Grid item mobile={12} tablet={4}>
              <TextField
                id="recEmail"
                fullWidth
                label="Email"
                required
                {...formik.getFieldProps("recEmail")}
                error={
                  formik.touched.recEmail && Boolean(formik.errors.recEmail)
                }
                helperText={formik.touched.recEmail && formik.errors.recEmail}
              />
            </Grid>
          </Grid>
          <TextField
            id="whyRecommended"
            fullWidth
            multiline
            minRows={10}
            label="Why should this brother be featured as an Alumni Spotlight?"
            required
            {...formik.getFieldProps("whyRecommended")}
            error={
              formik.touched.whyRecommended &&
              Boolean(formik.errors.whyRecommended)
            }
            helperText={
              formik.touched.whyRecommended && formik.errors.whyRecommended
            }
            sx={{ margin: "2rem 0rem" }}
          ></TextField>
          <GoogleReCaptcha onVerify={handleRecaptcha} />
          <Button
            type="submit"
            variant="outlined"
            size="large"
            endIcon={<DoubleArrowIcon />}
            onClick={() => {
              scrollToErrors(formik.errors);
            }}
            sx={{ margin: "1rem 0rem" }}
            disabled={
              !recaptchaPassed || formik.isSubmitting || !formik.isValid
            }
          >
            Submit
          </Button>
          <Typography color="#b9b9b9" variant="subtitle2">
            This site is protected by reCAPTCHA and the Google{" "}
            <Link href="https://policies.google.com/privacy">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="https://policies.google.com/terms">
              Terms of Service
            </Link>{" "}
            apply.
          </Typography>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={openSuccessSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSuccessSnackbar}
            sx={{ bottom: { mobile: "4rem" } }}
          >
            <Alert variant="filled" severity="success">
              Thank you for your Alumni Spotlight recommendation!
            </Alert>
          </Snackbar>
        </Container>
      </form>
    </div>
  );
}
export default AlumniSpotlight;
