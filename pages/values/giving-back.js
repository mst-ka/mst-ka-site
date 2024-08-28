import { Container, Grid, Typography } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import TextSectionImage from "../../components/Subpages/TextSectionImage";

function GivingBack() {
  return (
    <div>
      <Banner text="Giving Back" />
      <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 20rem" } }}>
        <Grid container spacing={8}>
          <Grid item mobile={12} tablet={6}>
            <Typography align="justify">
              The brothers of Kappa Alpha Order are dedicated to serving our
              school, our community, and our nation. Members of Beta Alpha
              Chapter offer their time and resources across the Midwest, lending
              a helping hand to those in need. Beta Alpha Chapter is an
              important contributor to the Muscular Dystrophy Association (MDA)
              - a cause supported by KA&apos;s nationwide. Our Chapter raises
              approximately $6,000 every year for MDA, raised through projects.
              <br />
              <br />
              We focus our efforts on two main philanthropic fundraisers a year:
              the 5KA Color Run for MDA in the fall, and “Wings &apos;n Swings”,
              our food-based philanthropy, in the spring. Of course, we have
              smaller events throughout these semesters where we focus more on
              directly helping our community!
              <br />
              <br />
              Some of the things we do for KA include volunteering at churches
              or as youth mentors, participating in “Adopt-a-Highway”, tutoring
              at the local high school, donating blood, donating food to local
              women&apos;s shelters, and participating in our annual Christmas
              party for underprivileged children. Due to all this community
              service, along with a few major projects we put on, such as
              hosting a blood drive on campus, our members average over 75
              service hours per man a year!
            </Typography>
          </Grid>
          <TextSectionImage
            src="/images/values/giving-back/service.jpg"
            alt="Service"
          />
        </Grid>
      </Container>
    </div>
  );
}

export default GivingBack;
