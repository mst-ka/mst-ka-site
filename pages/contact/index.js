import { useState } from "react";
import {
  Alert,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useFormik } from "formik";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { push, ref } from "firebase/database";
import database from "../../firebase-init.js";
import Banner from "../../components/Layout/Banner/Banner.js";

const validationSchema = yup.object({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  phone: yup
    .string()
    .length(10, "Please enter full 10-digit phone number")
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .positive("Age must be positive")
    .required("Required"),
  highSchool: yup.string().required("Required"),
  classRank: yup.string().required("Required"),
  gpa: yup.number().typeError("GPA must be a number").required("Required"),
  actSAT: yup
    .number()
    .typeError("ACT/SAT Score must be a number")
    .required("Required"),
  religion: yup.string().required("Required"),
  intendedMajor: yup.string().required("Required"),
  highSchoolActivities: yup.string().required("Required"),
  honorsAwards: yup.string().required("Required"),
  goals: yup.string().required("Required"),
  contactWith: yup.string().required("Required"),
  whyConsidering: yup.string().required("Required"),
  likeAboutChapter: yup.string().required("Required"),
  gentleman: yup.string().required("Required"),
});

//Click event handler for the Submit button to focus on fields that have errors associated with it
const scrollToErrors = (errors) => {
  const errorKeys = Object.keys(errors);
  if (errorKeys.length > 0) {
    setTimeout(() => {
      document.getElementsByName(errorKeys[0])[0].focus();
    }, 10);
  }
};

//If we would like to display alternate helper text for our user prior to there being
//errors associated with their input. See the Class Rank field for an example.
const displayAlternateHelper = (text, touched, errors) => {
  if (touched && Boolean(errors)) {
    return errors;
  }
  return text;
};

function Contact() {
  const [recaptcha, setRecaptcha] = useState(true);

  //Handler for enabling the submit button for the form once the ReCAPTCHA is successful
  const handleRecaptcha = () => {
    setRecaptcha(!recaptcha);
  };

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      age: "",
      highSchool: "",
      classRank: "",
      gpa: "",
      actSAT: "",
      religion: "",
      intendedMajor: "",
      highSchoolActivities: "",
      honorsAwards: "",
      goals: "",
      contactWith: "",
      whyConsidering: "",
      likeAboutChapter: "",
      gentleman: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (window.confirm("Are you sure you would like to submit your application?")) {
        //push to Firebase Realtime Database
        push(ref(database, "applications/"), {
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phone,
          email: values.email,
          address: values.address,
          city: values.city,
          state: values.state,
          zip: values.zip,
          age: values.age,
          highSchool: values.highSchool,
          classRank: values.classRank,
          gpa: values.gpa,
          actSAT: values.actSAT,
          religion: values.religion,
          intendedMajor: values.intendedMajor,
          highSchoolActivities: values.highSchoolActivities,
          honorsAwards: values.honorsAwards,
          goals: values.goals,
          contactWith: values.contactWith,
          whyConsidering: values.whyConsidering,
          likeAboutChapter: values.likeAboutChapter,
          gentleman: values.gentleman,
        });
        resetForm();
        setOpenSnackbar(true);
      }
    },
  });

  return (
    <div>
      <Banner text="Membership Application" />
      <form onSubmit={formik.handleSubmit}>
        <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 20rem" } }}>
          <br />
          <Typography align="center">
            The Beta Alpha Chapter of Kappa Alpha Order are determined to
            recruit men who will become contributing members to our brotherhood.
            This application is meant to help us get to know you, and decide
            whether you have what it takes to become a member of Kappa Alpha. We
            ask that you fill this out honestly because properly picking members
            is just as important for you as it is for us. Rush events are hosted
            in the St. Louis and Kansas City areas every summer for anyone able
            to attend. All costs of the events are covered by KA and rides to
            and from the events can be arranged upon request. For more
            information, or to sign up for an event please contact either one of
            our <Link href="/about/officers">Recruitment Chairs</Link>.
          </Typography>
          <br />
        </Container>

        <Divider textAlign="left">Contact Info</Divider>
        <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 16rem" } }}>
          <Grid container spacing={2}>
            <Grid item mobile={12} tablet={6}>
              <TextField
                fullWidth
                required
                id="firstName"
                label="First Name"
                variant="outlined"
                {...formik.getFieldProps("firstName")}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item mobile={12} tablet={6}>
              <TextField
                fullWidth
                required
                id="lastName"
                label="Last Name"
                variant="outlined"
                {...formik.getFieldProps("lastName")}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item mobile={12} tablet={6}>
              <TextField
                fullWidth
                required
                id="phone"
                label="Phone (XXXXXXXXXX)"
                variant="outlined"
                {...formik.getFieldProps("phone")}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
            <Grid item mobile={12} tablet={6}>
              <TextField
                fullWidth
                required
                id="email"
                label="Email"
                variant="outlined"
                {...formik.getFieldProps("email")}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item mobile={12} tablet={6}>
              <TextField
                fullWidth
                id="address"
                label="Address"
                variant="outlined"
                {...formik.getFieldProps("address")}
              />
            </Grid>
            <Grid item mobile={12} tablet={6}>
              <TextField
                fullWidth
                id="city"
                label="City"
                variant="outlined"
                {...formik.getFieldProps("city")}
              />
            </Grid>
            <Grid item mobile={12} tablet={6}>
              <TextField
                fullWidth
                id="state"
                label="State"
                variant="outlined"
                {...formik.getFieldProps("state")}
              />
            </Grid>
            <Grid item mobile={12} tablet={6}>
              <TextField
                fullWidth
                id="zip"
                label="Zip Code"
                variant="outlined"
                {...formik.getFieldProps("zip")}
              />
            </Grid>
          </Grid>
        </Container>
        <Divider textAlign="left">About You</Divider>
        <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 16rem" } }}>
          <Grid container spacing={2}>
            <Grid item mobile={12} tablet={6}>
              <TextField
                fullWidth
                required
                id="age"
                label="Age"
                variant="outlined"
                {...formik.getFieldProps("age")}
                error={formik.touched.age && Boolean(formik.errors.age)}
                helperText={formik.touched.age && formik.errors.age}
              />
            </Grid>
            <Grid item mobile={12} tablet={6}>
              <TextField
                fullWidth
                required
                id="highSchool"
                label="High School"
                variant="outlined"
                {...formik.getFieldProps("highSchool")}
                error={
                  formik.touched.highSchool && Boolean(formik.errors.highSchool)
                }
                helperText={
                  formik.touched.highSchool && formik.errors.highSchool
                }
              />
            </Grid>
            <Grid item mobile={12} tablet={6}>
              <TextField
                fullWidth
                required
                id="classRank"
                label="Class Rank"
                variant="outlined"
                {...formik.getFieldProps("classRank")}
                error={
                  formik.touched.classRank && Boolean(formik.errors.classRank)
                }
                helperText={displayAlternateHelper(
                  "N/A if not applicable",
                  formik.touched.classRank,
                  formik.errors.classRank
                )}
              />
            </Grid>
            <Grid item mobile={12} tablet={6}>
              <TextField
                fullWidth
                required
                id="gpa"
                label="GPA"
                variant="outlined"
                {...formik.getFieldProps("gpa")}
                error={formik.touched.gpa && Boolean(formik.errors.gpa)}
                helperText={formik.touched.gpa && formik.errors.gpa}
              />
            </Grid>
            <Grid item mobile={12} tablet={6}>
              <TextField
                fullWidth
                required
                id="actSAT"
                label="ACT/SAT Score"
                variant="outlined"
                {...formik.getFieldProps("actSAT")}
                error={formik.touched.actSAT && Boolean(formik.errors.actSAT)}
                helperText={formik.touched.actSAT && formik.errors.actSAT}
              />
            </Grid>
            <Grid item mobile={12} tablet={6}>
              <TextField
                fullWidth
                required
                id="religion"
                label="Religion"
                variant="outlined"
                {...formik.getFieldProps("religion")}
                error={
                  formik.touched.religion && Boolean(formik.errors.religion)
                }
                helperText={formik.touched.religion && formik.errors.religion}
              />
            </Grid>
            <Grid item mobile={12} tablet={6}>
              <TextField
                fullWidth
                required
                id="intendedMajor"
                label="Intended Major"
                variant="outlined"
                {...formik.getFieldProps("intendedMajor")}
                error={
                  formik.touched.intendedMajor &&
                  Boolean(formik.errors.intendedMajor)
                }
                helperText={
                  formik.touched.intendedMajor && formik.errors.intendedMajor
                }
              />
            </Grid>
          </Grid>
          {/* 'About you' long answer questions */}
          <Container disableGutters sx={{ paddingTop: "1rem" }}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  multiline
                  minRows={5}
                  id="highSchoolActivities"
                  label="High School Activities"
                  variant="outlined"
                  {...formik.getFieldProps("highSchoolActivities")}
                  error={
                    formik.touched.highSchoolActivities &&
                    Boolean(formik.errors.highSchoolActivities)
                  }
                  helperText={
                    formik.touched.highSchoolActivities &&
                    formik.errors.highSchoolActivities
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  multiline
                  minRows={5}
                  id="honorsAwards"
                  label="Honors and Awards"
                  variant="outlined"
                  {...formik.getFieldProps("honorsAwards")}
                  error={
                    formik.touched.honorsAwards &&
                    Boolean(formik.errors.honorsAwards)
                  }
                  helperText={
                    formik.touched.honorsAwards && formik.errors.honorsAwards
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  multiline
                  minRows={5}
                  id="goals"
                  label="What are your goals for your first year of college?"
                  variant="outlined"
                  {...formik.getFieldProps("goals")}
                  error={formik.touched.goals && Boolean(formik.errors.goals)}
                  helperText={formik.touched.goals && formik.errors.goals}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  multiline
                  minRows={5}
                  id="contactWith"
                  label="Who have you been in contact with at KA?"
                  variant="outlined"
                  {...formik.getFieldProps("contactWith")}
                  error={
                    formik.touched.contactWith &&
                    Boolean(formik.errors.contactWith)
                  }
                  helperText={
                    formik.touched.contactWith && formik.errors.contactWith
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  multiline
                  minRows={5}
                  id="whyConsidering"
                  label="Why are you considering KA?"
                  variant="outlined"
                  {...formik.getFieldProps("whyConsidering")}
                  error={
                    formik.touched.whyConsidering &&
                    Boolean(formik.errors.whyConsidering)
                  }
                  helperText={
                    formik.touched.whyConsidering &&
                    formik.errors.whyConsidering
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  multiline
                  minRows={5}
                  id="likeAboutChapter"
                  label="What do you like about our chapter? "
                  variant="outlined"
                  {...formik.getFieldProps("likeAboutChapter")}
                  error={
                    formik.touched.likeAboutChapter &&
                    Boolean(formik.errors.likeAboutChapter)
                  }
                  helperText={
                    formik.touched.likeAboutChapter &&
                    formik.errors.likeAboutChapter
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  multiline
                  minRows={5}
                  id="gentleman"
                  label="How would you define a gentleman?"
                  variant="outlined"
                  {...formik.getFieldProps("gentleman")}
                  error={
                    formik.touched.gentleman && Boolean(formik.errors.gentleman)
                  }
                  helperText={
                    formik.touched.gentleman && formik.errors.gentleman
                  }
                />
              </Grid>
              <Grid item>
                {/* TODO: Replace site key with actual site key when deploying to prod*/}
                <ReCAPTCHA
                  sitekey="6LcFEA4gAAAAAJD9f0WnuHs8eQVwYkgcyoHdA8Kw"
                  onChange={handleRecaptcha}
                />
                <Button
                  variant="outlined"
                  size="large"
                  type="submit"
                  sx={{ marginTop: "1rem" }}
                  endIcon={<DoubleArrowIcon />}
                  onClick={() => {
                    scrollToErrors(formik.errors);
                  }}
                  disabled={recaptcha && !formik.isSubmitting}
                >
                  Submit Application
                </Button>
              </Grid>
            </Grid>
            <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              open={openSnackbar}
              autoHideDuration={5000}
              onClose={handleCloseSnackbar}
            >
              <Alert variant="filled" severity="success">
                Application Successfully Submitted!
              </Alert>
            </Snackbar>
          </Container>
        </Container>
      </form>
    </div>
  );
}

export default Contact;
