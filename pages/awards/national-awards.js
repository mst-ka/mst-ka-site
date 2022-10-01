import { Container, Grid, Typography } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import TextSectionHeading from "../../components/Subpages/TextSectionHeading";
import TextSectionImage from "../../components/Subpages/TextSectionImage";

function NationalAwards() {
  return (
    <div>
      <Banner text="National Awards" />
      <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 20rem" } }}>
        <Grid container spacing={8}>
          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              George C. Marshall Award for Chapter Excellence
            </TextSectionHeading>
            <Typography>
              The George C. Marshall Award is given to the top 0-3 KA chapters
              nationally each year. Of the 45+ Marshalls awarded, our chapter
              holds 11 (as of 2019). This gives us the distinct honor of being
              the most awarded KA chapter in the nation, a legacy we are proud
              to continue!
            </Typography>
          </Grid>
          <TextSectionImage
            src="/images/awards/national-awards/baka-awards.jpg"
            alt="National Awards"
          />
          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              Samuel Zenas Ammen Award for Chapter Excellence
            </TextSectionHeading>
            <Typography>
              Similarly to the Marshall Award, the Samuel Zenas Ammen Award is
              awarded to the top 10% of KA chapters in the nation annually.
              <br />
              <br />
              As of 2019 our chapter is proud to have received this award every
              year it has been awarded, barring only two years. To win the Ammen
              award you must also win the majority of awards in the following
              categories: Chapter finances, New Member Education, Academic
              Excellence, Community Service, Philanthropy, Excellence in
              Communication, and others. To win a Marshall award you must win
              all of the awards in those categories.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default NationalAwards;
