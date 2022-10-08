import { Container, Grid, Typography } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import TextSectionHeading from "../../components/Subpages/TextSectionHeading";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

function CampusAwards() {
  return (
    <div>
      <Banner text="Campus Awards" />
      <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 20rem" } }}>
        <Grid container spacing={8}>
          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              <DoubleArrowIcon fontSize="large" color="primary" />
              Anti-Hazing Award
            </TextSectionHeading>
            <Typography>
              Awarded in 2017, 2018, and 2019 for our strong stance and
              proactive measures to prevent hazing in any form within our
              chapter.
            </Typography>
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              <DoubleArrowIcon fontSize="large" color="primary" />
              Excellence in Academics
            </TextSectionHeading>
            <Typography>
              Awarded to Fraternity Chapters who are consistently among the top
              5 in GPA.
            </Typography>
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              <DoubleArrowIcon fontSize="large" color="primary" />
              IFC Man of the Year
            </TextSectionHeading>
            <Typography>
              One graduating individual who has stood out amongst all graduating
              members of the Interfraternity Council for their service and
              excellence (Jack Conroy - 2017).
            </Typography>
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              <DoubleArrowIcon fontSize="large" color="primary" />
              Fraternity Man of the Year
            </TextSectionHeading>
            <Typography>
              One graduating individual who has stood out amongst every other
              graduating Greek members (Clayton Newburry, 2018).
            </Typography>
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              <DoubleArrowIcon fontSize="large" color="primary" />
              Chapter President of the Year
            </TextSectionHeading>
            <Typography>
              Awarded to the most outstanding Chapter President among
              Fraternities on our campus. (Joseph Studer in 2019).
            </Typography>
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <TextSectionHeading>
              <DoubleArrowIcon fontSize="large" color="primary" />
              Chapter Living Your Values Award
            </TextSectionHeading>
            <Typography>
              Awarded to the IFC chapter with the strongest dedication to their
              values in their everyday life, see our values tab for more info!
              (Awarded in 2019)
            </Typography>
          </Grid>
          <Grid item mobile={12} sx={{ margin: { tablet: "0rem 20rem" } }}>
            <TextSectionHeading>
              <DoubleArrowIcon fontSize="large" color="primary" />
              Outstanding Academic Plan
            </TextSectionHeading>
            <Typography>
              Awarded to the chapter with the best academic plan amongst all IFC
              Fraternities. (Awarded in 2018)
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CampusAwards;
