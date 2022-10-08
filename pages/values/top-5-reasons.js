import { Container, Grid, Typography } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import TextSectionHeading from "../../components/Subpages/TextSectionHeading";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

function TopFiveReasons() {
  return (
    <div>
      <Banner text="Top 5 Reasons to go KA" />
      <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 20rem" } }}>
        <Grid container spacing={8}>
          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              <DoubleArrowIcon fontSize="large" color="primary" />
              Brotherhood
            </TextSectionHeading>
            <Typography>
              Thanks to our size, we are both a big house, and a small house.
              Being a big house means no matter what class you are in, or what
              problems you are dealing with, there is someone in KA who is able
              to help you. Being a small house takes that a step further, it
              means that we are close knit, and there isn&apos;t a person in the
              house who doesn&apos;t care about you and want to see you succeed.
              We&apos;re a family, not just an organization.
            </Typography>
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              <DoubleArrowIcon fontSize="large" color="primary" />
              Academics
            </TextSectionHeading>
            <Typography>
              We pride ourselves in our academic success. As an organization, we
              have implemented a thorough academic competition which not only
              helps us to keep track of how we&apos;re all doing, but also provides
              an extra incentive to do well!
            </Typography>
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              <DoubleArrowIcon fontSize="large" color="primary" />
              Character Development
            </TextSectionHeading>
            <Typography>
              Fostering a strong work ethic and leadership abilities, joining KA
              has a profound impact on making a good person into a great person.
            </Typography>
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              <DoubleArrowIcon fontSize="large" color="primary" />
              Social Atmosphere
            </TextSectionHeading>
            <Typography>
              School is hard, and having a social life in a small town can be
              tough. Being a part of KA allows you to take part in socials with
              fraternities, sororities, and other organizations.
            </Typography>
          </Grid>
          <Grid item mobile={12} sx={{margin: {desktop:"0rem 12rem" } }}>
            <TextSectionHeading>
              <DoubleArrowIcon fontSize="large" color="primary" />
              Leadership and Networking Opportunities
            </TextSectionHeading>
            <Typography>
              Joining KA opens a whole new world of opportunities, through our
              10+ committees, our 13 officers, and our High-Performance Teams,
              we have over 30 leadership positions available at any given time,
              and they are made up of an array of freshmen all the way through
              seniors. Additionally, our alumni base is wide and committed. Our
              alumni work at companies like Boeing, Google, Microsoft, Exxon,
              Cerner, Kohler, Ruger, and more! Through our homecoming
              celebration many of these men return to our chapter, providing
              outstanding networking opportunities for young professionals.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default TopFiveReasons;
