import { Container, Grid, Typography } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import TextSectionHeading from "../../components/Subpages/TextSectionHeading";
import TextSectionImage from "../../components/Subpages/TextSectionImage";

function About() {
  return (
    <div>
      <Banner text="About Us" />
      <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 20rem" } }}>
        <Grid container spacing={8}>
          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>Kappa Alpha Order History</TextSectionHeading>
            <Typography>
              Kappa Alpha Order was founded by four men, bound their friendship
              in a “mutual pledge of faith and loyalty,” at Washington College
              in Virginia, in December of 1865.
              <br />
              <br />
              Our founders created an organization rooted in the highest ideals
              of the time: honor, chivalry, and gentility.
              <br />
              <br />
              KA translates these timeless philosophies into the mainstream of
              American universities. These gentlemanly traits are the hallmark
              of men who have chosen our unique lifestyle.
            </Typography>
          </Grid>
          <TextSectionImage
            src="/images/about/index/baka-house.jpg"
            alt="BA of KA House"
          />
          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>The Philosophy of the Order</TextSectionHeading>
            <Typography>
              The acquisition of knowledge and the development of character are
              the great goals of life, and the primary focus for gentlemen of
              Kappa Alpha Order.
              <br />
              <br />
              Through fellowship and brotherhood, KA teaches young men to be
              leaders; to be brave and self-reliant, to continually strive to
              better themselves. It is for this reason that we are known as the
              &apos;Gentlemen of the Fraternity World&apos;.
            </Typography>
          </Grid>
          <TextSectionImage
            src="/images/about/index/baka-greek-life.jpg"
            alt="Greek Life"
          />

          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              The Impacts of Fraternity Participation
            </TextSectionHeading>
            <Typography>
              You can greatly enhance the rewards of college life through a
              fraternity experience. Transitioning to college life, students
              often search for a group -- somewhere they feel comfortable
              working with others to achieve common goals.
              <br />
              <br />
              Being a fraternity man also means focusing on leadership,
              scholarship, community service, and friendship. Fraternity members
              gain a more well-rounded college experience, and the ability to
              maximize their potential.
              <br />
              <br />
              The benefits of fraternal membership do not stop when you
              graduate. KA chapters are supported by Alumni who can ease the
              transition to post-graduate life. Our alums build networks during
              their professional careers -- contacts you will want to know.
              <br />
              <br />
              Fraternity membership does not guarantee a job following
              graduation, it does provide great resources that you would not
              have otherwise had.
            </Typography>
          </Grid>
          <TextSectionImage
            src="/images/about/index/baka-litter-pickup.jpg"
            alt="Litter Pickup"
          />

          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              A Moral Compass for the Modern Gentleman
            </TextSectionHeading>
            <Typography>
              You come to college with your values intact; you&apos;ve learned
              from family and friends what&apos;s right and wrong.
              <br />
              <br />
              While in college, KA helps you keep your compass straight,
              developing your values and experiences, and pointing you in a
              great direction for your future. Based on our history and your
              experience, your journey in life becomes clearer.
            </Typography>
          </Grid>

          <TextSectionImage
            src="/images/about/index/baka-house-renovation-drawing.png"
            alt="House Renovation Drawing"
          />

          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              History of Beta Alpha Chapter
            </TextSectionHeading>
            <Typography>
              The Beta Alpha Chapter of Kappa Alpha Order was founded on April
              27, 1903, making it the second oldest fraternity on campus
              <br />
              <br />
              The university was then known as the Missouri School of Mines and
              Metallurgy. Now in its second century on campus of Missouri
              University of Science and Technology, KA has called several places
              home, mostly converted homes and boarding houses, as has been the
              case for many fraternities.
              <br />
              <br />
              In 1959, years of organization and fund-raising climaxed in the
              opening of a new KA house custom-made for our use. We owe a
              tremendous debt of gratitude to a group of alumni who made that
              home possible for the generations of brothers who followed them.
              <br />
              <br />
              Today&apos;s alumni, having benefited from the use of the home at
              1 Fraternity Drive, are also responsible for its maintenance and
              for compliance with all university, city, state and federal
              regulations.
              <br />
              <br />
              In 2014, the KA house received a total renovation which added
              space and converted additional areas for educational purposes.
              <br />
              <br />
              We are still “Miners” - although many alums have known the
              university by as many as four different names. And we are still
              KA&apos;s - continuing the traditions, and providing for a great
              future for our brothers at Missouri S&amp;T.
            </Typography>
          </Grid>
          <TextSectionImage
            src="/images/about/index/house-at-night.jpg"
            alt="House At Night"
          />
        </Grid>
      </Container>
    </div>
  );
}

export default About;
