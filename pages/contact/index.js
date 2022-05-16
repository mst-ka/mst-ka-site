import {
  appBarClasses,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useFormik } from "formik";

import { push, ref } from "firebase/database";
import database from "../../firebase-init.js";

function Contact() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log("Submitting Application");

      //push to Firebase Realtime Database
      push(ref(database, "applications/"), {
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        email: values.email,
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Divider textAlign="left">Contact Info</Divider>
      <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 16rem" } }}>
        <Grid container spacing={2} sx={{}}>
          <Grid item mobile={12} tablet={6}>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              variant="outlined"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              variant="outlined"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              variant="outlined"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Container>
      <Divider textAlign="left">About You</Divider>
      <Button
        variant="outlined"
        size="large"
        type="submit"
        endIcon={<DoubleArrowIcon />}
      >
        Submit Application
      </Button>
    </form>
  );
}

export default Contact;
