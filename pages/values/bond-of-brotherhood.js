import { Container, Grid, Typography } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import TextSectionImage from "../../components/Subpages/TextSectionImage";

function BondOfBrotherhood() {
  return (
    <div>
      <Banner text="The Bond Of Brotherhood" />
      <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 20rem" } }}>
        <Grid container spacing={8}>
          <Grid item mobile={12} tablet={6}>
            <Typography align="justify">
              The bond of brotherhood established within the walls of Kappa
              Alpha Order is a bond that will last a lifetime. “KA for Life” is
              what we call it. You will hear that from active and alumni
              brothers alike, and you will see it in the way they treat each
              other - decades after initiation. We share our lives for only a
              comparatively brief time on campus, but we build friendships that
              last forever. Because of this bond, Brothers are always willing to
              sacrifice for one another and the advancement of the Order. Once a
              man becomes a member of Kappa Alpha Order, he is always a part of
              that brotherhood. When alumni return, no matter how long they have
              been away, they are immediately recognized as part of our
              brotherhood.
              <br />
              <br />
              Quoting Thomas Carlyle, the Kappa Alpha Order believes that “the
              mystic bond of brotherhood makes all men one.”
            </Typography>
          </Grid>
          <TextSectionImage
            src="/images/values/bond-of-brotherhood/brotherhood.jpg"
            alt="Brotherhood"
          />
        </Grid>
      </Container>
    </div>
  );
}

export default BondOfBrotherhood;
