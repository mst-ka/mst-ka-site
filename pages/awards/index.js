import { Container, Grid, Typography } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import TextSectionImage from "../../components/Subpages/TextSectionImage";

function Awards() {
  return (
    <div>
      <Banner text="Our Awards" />
      <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 20rem" } }}>
        <Grid container spacing={8}>
          <Grid item mobile={12} tablet={6}>
            <Typography>
              Each February, KA chapters nationwide are recognized for their
              accomplishments throughout the year at regionally hosted Province
              Councils.
              <br />
              <br />
              Chapters are recognized for excellence in finances, recruitment
              and chapter growth, communications, Project Outreach, Operation
              Crimson Gift, and overall chapter excellence. Every year the top
              10 percent of KA Chapters are recognized with the Samuel Zenas
              Ammen Award for chapter excellence. This award takes all areas of
              chapter operations into consideration and recognizes those
              chapters achieving a high level of excellence. The highest honor
              that can be bestowed upon a chapter is the George C. Marshall
              Award of chapter excellence. This award is presented annually to
              the top one to three chapters in the Order in recognition for
              their superior operations and performance.
              <br />
              <br />
              Beta Alpha of Kappa Alpha is proud of its heritage in striving to
              bethe best it can be and has always been at the top of the list in
              receiving recognition for its efforts in sustaining the values of
              the Order and the awards of merit and achievement that accompany
              them.
              <br />
              <br />
              In addition, the brothers of Beta Alpha are leaders on the campus
              at Missouri University of Science and Technology. They always seek
              to achieve the highest levels of scholarship and other values
              provided by the university. The awards earned can be viewed in
              locations above.
            </Typography>
          </Grid>
          <TextSectionImage
            src="/images/awards/index/baka-awards.jpg"
            alt="Awards"
          />
        </Grid>
      </Container>
    </div>
  );
}

export default Awards;
