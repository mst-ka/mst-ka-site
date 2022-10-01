import { Container, Grid, Typography } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import TextSectionHeading from "../../components/Subpages/TextSectionHeading";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

function Values() {
  return (
    <div>
      <Banner text="Our Values" />
      <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 20rem" } }}>
        <Grid container spacing={8}>
          <Grid item mobile={12} tablet={6} >
            <TextSectionHeading>
              <DoubleArrowIcon fontSize="large" color="primary" />
              Reverence
            </TextSectionHeading>
            <Typography>
              Our founders sought to emulate the ideal Christian gentleman and
              in so doing recognized the importance of having a deep reverence
              for God. Our motto, “Dieu et Les Dames” means “God and the ladies”
              and reflects our commitment to the ideals of modern chivalry as a
              contemporary order of knights.
            </Typography>
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              <DoubleArrowIcon fontSize="large" color="primary" />
              Gentility
            </TextSectionHeading>
            <Typography>
              The men of Kappa Alpha Order are known as the gentlemen of the
              fraternity world. A KA, through his gentility, should always be
              distinguished by his modern chivalric characteristics.
            </Typography>
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              <DoubleArrowIcon fontSize="large" color="primary" />
              Service
            </TextSectionHeading>
            <Typography>
              At the heart of the code of chivalry and the fabric of KA is
              service to those in need. Through community service, volunteerism
              and commitment to philanthropy, KAs aim to serve those around them
              as students and citizens.
            </Typography>
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              <DoubleArrowIcon fontSize="large" color="primary" />
              Leadership
            </TextSectionHeading>
            <Typography>
              We teach our members to be leaders among men, on campus, in their
              communities, and throughout life. Through bravery and
              self-reliance, KAs strive to lead their lives with honor, and when
              given the opportunity, to lead others with humility, integrity,
              and justice.
            </Typography>
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              <DoubleArrowIcon fontSize="large" color="primary" />
              Knowledge
            </TextSectionHeading>
            <Typography>
              The philosophy of our Order is that the acquisition of knowledge
              and the development of character are the great goals of life. Our
              focus on the cultivation of knowledge manifests itself through
              academic achievement on campus, growth and success in our careers,
              and the positive impact we have in the communities where we
              reside.
            </Typography>
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              <DoubleArrowIcon fontSize="large" color="primary" />
              Perseverance
            </TextSectionHeading>
            <Typography>
              “Onward” is ever our stance despite the danger and difficulty that
              life often brings. KAs understand that anything in life worth
              attaining will take hard work, dedication, and determination,
              whether in the classroom, the community, or throughout the
              endeavors of life.
            </Typography>
          </Grid>
          <Grid item mobile={12} sx={{margin: {tablet:"0rem 20rem" } }}>
            <TextSectionHeading>
              <DoubleArrowIcon fontSize="large" color="primary" />
              Excellence
            </TextSectionHeading>
            <Typography>
              Excellence is our aim and “Upward” is the direction that we
              continually strive. No matter the situation or circumstance, KAs
              work to attain excellence and to overcome the temptation to settle
              for mediocrity. We exemplify this commitment through leadership
              and service to others, with a vision to make the world a brighter
              place in which to work and live.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Values;
