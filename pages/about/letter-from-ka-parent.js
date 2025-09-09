import { Container, Grid, Typography } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import TextSectionImage from "../../components/Subpages/TextSectionImage";

function LetterFromKAParent() {
  return (
    <div>
      <Banner text="Letter From a KA Parent" />
      <Container
        maxWidth="desktop"
        sx={{
          py: { mobile: 2, tablet: 4 },
          px: { mobile: 2, tablet: 3, laptop: 4 },
        }}
      >
        <Grid container spacing={8} sx={{ pt: { mobile: 2, tablet: 4 } }}>
          <Grid item mobile={12} tablet={6}>
            <Typography align="justify">
              Greek Life offers an excellent opportunity for college students to
              enhance their classroom learning by developing their leadership
              and social skills so essential for success in life. We were very
              proud to have our son join Kappa Alpha Order at Missouri S&amp;T.
              <br />
              <br />
              First and foremost, KA stresses scholastic achievement. Year after
              year KA has been of the highest performing fraternities at
              Missouri S&amp;T. They offer a support system that will serve your
              son well. From the study hours to the mentoring and guidance from
              upperclassmen, KAs do not leave success to chance. In KA, your son
              will find the kind of friends that will encourage him to study and
              reach high standards.
              <br />
              <br />
              Kappa Alpha Order also offers an opportunity for the men to
              develop social skills and to network. While GPA is important,
              developing the socials skills to work with others and having a
              network of alumni to further his career cannot be overestimated.
              In KA, your son will establish friendships that will last a
              lifetime.
              <br />
              <br />- David &amp; Jill Cox, Kansas City, MO
            </Typography>
          </Grid>
          <TextSectionImage
            src="/images/about/letter-from-ka-parent/back-of-house.jpg"
            alt="Letter From KA Parent"
          />
        </Grid>
      </Container>
    </div>
  );
}

export default LetterFromKAParent;
