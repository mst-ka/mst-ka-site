import { Container, Grid, Typography } from "@mui/material";
import TextSectionImage from "../../components/Subpages/TextSectionImage";
import Banner from "../../components/Layout/Banner/Banner";

function BAOfKAGreekLife() {
  return (
    <div>
      <Banner text="Greek Life at KA" />
      <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 20rem" } }}>
        <Grid container spacing={8}>
          <Grid item mobile={12} tablet={6}>
            <Typography align="justify">
              In Kappa Alpha Order we strive for excellence in all aspects on
              campus, including socialization with others. We understand that
              college puts a lot of stress on you and that is why we look to
              socials with other organizations to help relieve stress and
              promote relations with others.
              <br />
              <br />
              Our chapter hosts socials with many of the sororities and
              fraternities. Some of our socials are the yearly AmeriKAn Glow
              Paint Party, themed Halloween social, Christmas Party, and many
              other small brotherhood socials to develop lifelong brotherhood!
            </Typography>
          </Grid>
          <TextSectionImage
            src="/images/about/greek-life/greek-week.jpg"
            alt="Greek Life"
          />
        </Grid>
      </Container>
    </div>
  );
}

export default BAOfKAGreekLife;
