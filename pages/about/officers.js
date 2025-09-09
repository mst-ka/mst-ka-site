import { Container, Grid } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import OfficerCard from "../../components/Subpages/About/Officers/OfficerCard";
import { officerInfo } from "../../utils/officer-info";

const officers = Object.values(officerInfo);

function BAOfKAOfficers() {
  return (
    <div>
      <Banner text="Chapter Officers" simple />
      <Container
        maxWidth="desktop"
        sx={{
          py: { mobile: 2, tablet: 4 },
          px: { mobile: 2, tablet: 3, laptop: 4 },
        }}
      >
        <Grid container spacing={4} sx={{ pt: { mobile: 2, tablet: 4 } }}>
          {officers.map((officer) => (
            <OfficerCard
              key={officer.name}
              name={officer.name}
              position={officer.position}
              email={officer.email}
              img={officer.img}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default BAOfKAOfficers;
