import { Container, Grid, Typography } from "@mui/material";
import TextSectionHeading from "../../components/Subpages/TextSectionHeading";
import TextSectionImage from "../../components/Subpages/TextSectionImage";

function BAOfKAHouseHistory() {
  return (
    <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 20rem" } }}>
      <Grid container spacing={8}>
        <Grid item mobile={12} tablet={6}>
          <TextSectionHeading>
            Beta Alpha Chapter House History
          </TextSectionHeading>
          <Typography>
            In 1959, years of organization and fund-raising climaxed in the
            opening of a new KA house custom-made for our use. We owe a
            tremendous debt of gratitude to a group of alumni who made that home
            possible for the generations of brothers who followed them.
            <br />
            <br />
            Today&apos;s alumni, having benefited from the use of the home at 1
            Fraternity Drive, are also responsible for its maintenance and for
            compliance with all university, city, state and federal regulations.
            <br />
            <br />
            In 2014, the KA house had a total renovation which added space and
            converted additional areas for educational purposes.
          </Typography>
        </Grid>
        <TextSectionImage
          src="/images/about/house-history/baka-house.jpg"
          alt="BA of KA House"
        />
      </Grid>
    </Container>
  );
}

export default BAOfKAHouseHistory;
