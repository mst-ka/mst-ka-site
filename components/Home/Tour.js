import { Button, Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Iframe from "react-iframe";

function Tour() {
  return (
    <>
      <Typography variant="h2" sx={{ margin: "2rem 0rem" }}>
        Take a Tour
      </Typography>
      <Grid container spacing={4}>
        <Grid item mobile={12} tablet={8}>
          <Iframe
            url="https://my.matterport.com/show/?m=cjA8963SkH1"
            width="100%"
            height="100%"
            frameBorder={0}
            styles={{ height: "600px", borderRadius: ".25rem" }}
          />
        </Grid>
        <Grid item mobile={12} tablet={4} sx={{}}>
          <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
            Kappa Alpha Order
          </Typography>
          <Typography
            variant="body1"
            align="justify"
            sx={{ fontStyle: "italic" }}
          >
            You come to college with your values intact; you&apos;ve learned
            from family and friends what&apos;s right and wrong. While in
            college, Kappa Alpha Order helps you keep your compass straight,
            develop your values-set and experiences, and points you in a great
            direction for your future. Then, with our history and your
            experience, your journey in life seems a little clearer.
            <br />
            <br />
          </Typography>
          <Typography align="justify">
            <CheckIcon
              fontSize="medium"
              color="primary"
              sx={{ paddingTop: ".3rem" }}
            />
            {/* Had to use span and the explicit color code to add style inline to singular word,
              if you try to use two Typography elements it will add a line break */}
            <span style={{ color: "#be2f37" }}>Academics: </span>Our focus on
            academics consistently ranks us among the top fraternity GPAs on
            campus.
            <br />
            <br />
          </Typography>
          <Typography align="justify">
            <CheckIcon
              fontSize="medium"
              color="primary"
              sx={{ paddingTop: ".3rem" }}
            />
            <span style={{ color: "#be2f37" }}>Brotherhood: </span>Whether
            it&apos;s relaxing in the den after a rough day in class or studying
            together in a suite, the support network our members build is always
            there.
            <br />
            <br />
          </Typography>
          <Typography align="justify">
            <CheckIcon
              fontSize="medium"
              color="primary"
              sx={{ paddingTop: ".3rem" }}
            />
            <span style={{ color: "#be2f37" }}>Involvement: </span>Members of
            our chapter are involved in over 50 different campus organizations
            and design teams.
            <br />
            <br />
          </Typography>
          <Typography align="justify">
            <CheckIcon
              fontSize="medium"
              color="primary"
              sx={{ paddingTop: ".3rem" }}
            />
            <span style={{ color: "#be2f37" }}>Networking: </span>Our alumni are
            employed across the nation at companies like Boeing, Google,
            Microsoft, Intel, and Honeywell.
            <br />
            <br />
          </Typography>
          <Button
            variant="outlined"
            size="large"
            href="/about"
            endIcon={<ArrowRightIcon />}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Tour;
