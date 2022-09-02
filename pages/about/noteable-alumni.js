import { Container, List, ListItem, Typography } from "@mui/material";
import TextSectionHeading from "../../components/Subpages/TextSectionHeading";

const businessAlumni = [
  "Clyde B. Anderson, CEO of Books-A-Million",
  "Clayton D. Baird, Chairman, Mrs. Baird’s Bakeries",
  "John H. Bryan, Jr, Chairman and CEO, Callaway Golf",
  "David M. Chamberlin, CEO, Shaklee Corporation",
  "Harry Cullen, Director, Cullen Bank Center",
  "Robert Crandall, Chairman and CEO, American Airlines",
  "Earnest W. Deavenport, President and CEO, Eastman Chemical Co.",
  "John D. DeButts, Chairman, AT&T",
  "William E. Dreyer, Senior Executive VP, Southwestern Bell",
  "U. Edwin Garrison, Chairman, Thiokol",
  "David A. Stonecipher, CEO, Jefferson-Pilot Corporation",
  "Ted L. Weise, CEO, FedEx",
];

function NotableAlumni() {
  return (
    <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 20rem" } }}>
      <TextSectionHeading>
        Notable Alumni of Kappa Alpha Order
      </TextSectionHeading>
      <Typography gutterBottom variant="h5">BUSINESS</Typography>
      <List
        dense
        sx={{
          listStyleType: "disc",
          paddingLeft: "2rem",
          "& .MuiListItem-root": {
            display: "list-item",
          },
        }}
      >
        {businessAlumni.map((alumni, index) => (
          <ListItem key={index} sx={{ display: "list-item" }}>
            {alumni}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default NotableAlumni;
