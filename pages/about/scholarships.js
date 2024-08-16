import { Container, Grid, Link, Typography } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import TextSectionImage from "../../components/Subpages/TextSectionImage";

function Scholarships() {
  return (
    <div>
      <Banner text="Scholarships" />
      <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 20rem" } }}>
        <Grid container spacing={8}>
          <Grid item mobile={12} tablet={6}>
            <Typography align="justify">
              The Beta Alpha Education Foundation was established in April 2012
              as a 501(c)(3) public charity for the purpose of providing
              scholarships and granting money for educational related housing
              infrastructure at the Missouri University of Science and
              Technology. Now the Foundation primarily solicits funds from the
              alumni of the Beta Alpha Chapter of Kappa Alpha Order on the
              Missouri S&T campus to assist our undergraduate members in their
              tuition and housing costs. The alumni of the Beta Alpha chapter
              have donated between $50,000 - $60,000 annually with the most
              recent donation total topping $61,000 at our homecoming banquet in
              2022.
              <br />
              <br />
              In addition to giving scholarships to undergraduate members of
              Kappa Alpha, the Foundation gives scholarships that are open to
              the campus at large. The Harold K. Chernoff Memorial Magnolia and
              Rose Scholarships are awarded to highly qualified female
              recipients each year at Homecoming.
              <br />
              <br />
              If you&apos;d like to learn more, please visit the{" "}
              <Link href="https://baedu.org/">
                Beta Alpha Educational Foundation website
              </Link>
              {"."}
            </Typography>
          </Grid>
          <TextSectionImage
            src="/images/awards/scholarships/scholarships.jpg"
            alt="Scholarship Recipients"
          />
        </Grid>
      </Container>
    </div>
  );
}

export default Scholarships;
