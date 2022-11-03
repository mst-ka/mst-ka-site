import { Container, Grid, Link, Typography } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import TextSectionImage from "../../components/Subpages/TextSectionImage";

function Academics() {
  return (
    <div>
      <Banner text="Academics" />
      <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 20rem" } }}>
        <Grid container spacing={8}>
          <Grid item mobile={12} tablet={6}>
            <Typography>
              Kappa Alpha Order recognizes that academic success is a key to
              long term success for both new and active members. Being a top
              achiever on campus, Kappa Alpha Order has derived habits and a
              strong academic program that helps members succeed inside and
              outside the classroom. Formulating strong study habits and
              establishing clear expectations has helped Kappa Alpha Order
              continue to see members exceed expectations and open many doors
              for their future. From resume building to on campus involvement,
              our strong academics have proven to be a foundation for members to
              succeed in other ways.
              <br />
              <br />
              The academic program that Kappa Alpha Order has to offer is one
              that requires members to be focused, dedicated, and persevering.
              At a school notorious for difficult STEM courses and a rigorous
              course load, we understand that success is something that might
              not come instantaneously. Kappa Alpha Order offers a strong
              support system and brothers dedicated to seeing their peers
              succeed. Through mandated study hours, group review sessions, a
              rewarding academic competition, and much more, Kappa Alpha Order
              understands that success is fostered through hard work,
              discipline, and a drive to be the very best.
              <br />
              <br />
              With that hard work we have received the top GPA on campus for the
              last 5 semesters in a row as of Spring 2022. If you&apos;d like
              see how our grades compare among other organizations on campus,
              please{" "}
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://involvement.mst.edu/media/studentsupport/involvement/documents/KA.pdf#220802105839"
              >
                click here
              </Link>
              {"."}
            </Typography>
          </Grid>
          <TextSectionImage
            src="/images/about/academics/chancellor.jpg"
            alt="Chancellor"
          />
        </Grid>
      </Container>
    </div>
  );
}

export default Academics;
