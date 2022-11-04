import { Container, Grid, Table, TableHead, TableCell, Typography, TableRow, TableBody } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import TextSectionHeading from "../../components/Subpages/TextSectionHeading";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const awards = [
  {awardName: "Anti-Hazing Award", description: "Awarded for our strong stance and proactive measures to prevent hazing in any form within our chapter.", yearsAwarded: "2017, 2018, 2019, 2020, 2021"},
  {awardName: "Excellence In Academics", description: "Awarded to Fraternity Chapters who are consistently among the top 5 in GPA.", yearsAwarded: "2018, 2019, 2020, 2021"},
  {awardName: "Chapter Living Its Values", description: "Awarded to the IFC chapter with the strongest dedication to their values in their everyday life, see our values page for more info!", yearsAwarded: "2019, 2020"},
  {awardName: "Community Service Outreach", description: "Awarded to chapters who have exhibited excellence in helping their community through the service of its members.", yearsAwarded: "2021"},
  {awardName: "IFC Man of the Year", description: "One graduating individual who has stood out amongst all graduating members of the Interfraternity Council for their service and excellence", yearsAwarded: "2017 - Jack Conroy"},
  {awardName: "Fraternity Man of the Year", description: "One graduating individual who has stood out amongst every other graduating Greek members", yearsAwarded: "2018 - Clayton Newburry"},
  {awardName: "Chapter President of the Year", description: "Awarded to the most outstanding Chapter President among Fraternities on our campus.", yearsAwarded: "2019 - Joseph Studer"},
];

function CampusAwards() {
  return (
    <div>
      <Banner text="Campus Awards" />
      <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 20rem" } }}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>Award</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Years Awarded</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {awards.map((award) => (
              <TableRow key={award.awardName}>
                <TableCell> {award.awardName}</TableCell>
                <TableCell> {award.description}</TableCell>
                <TableCell> {award.yearsAwarded}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
        
       
      </Container>
    </div>
  );
}

export default CampusAwards;
