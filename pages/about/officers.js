import { Container, Grid } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import OfficerCard from "../../components/Subpages/About/Officers/OfficerCard";
import { officerInfo } from "../../utils/officer-info";

const officers = Object.values(officerInfo);

function BAOfKAOfficers() {
  return (
    <div>
      <Banner text="Chapter Officers" />
      <Container sx={{ padding: { mobile: "2rem", tablet: "2rem 16rem" } }}>
        <Grid container spacing={12}>
          {officers.map((officer, index) => (
            <OfficerCard
              key={index}
              name={officer.name}
              position={officer.position}
              email={officer.email}
              pledgeClass={officer.pledgeClass}
              img={officer.img}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default BAOfKAOfficers;
