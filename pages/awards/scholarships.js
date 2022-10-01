import { Container, Grid, Typography, List, ListItem } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";

function Scholarships() {
  return (
    <div>
      <Banner text="Scholarships" />
      <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 20rem" } }}>
        <Grid container spacing={8}>
          <Grid item mobile={12}>
            <Typography>
              Alumni have consistently funded ~$50,000 annually in scholarships
              annually to members of the chapter based on academic achievement
              and need. The fundamental reason for you to enter the Missouri
              University of Science and Technology is to obtain a degree and
              prepare yourself for a successful career. Kappa Alpha is dedicated
              to an environment of scholarship that helps every brother maximize
              his potential in his academic pursuits and achieve his goals. It
              is the goal of MS&amp;T to guide and assist you in attaining that
              goal.
              <br />
              <br />
              Kappa Alpha is dedicated to an environment of scholarship that
              helps every brother maximize his potential in his academic
              pursuits. GPA Matters. The KA average GPA is consistently higher
              than the average of all M&amp;ST students. The spirit of KA&apos;s
              scholarship program recognizes high scholastic achievement as the
              key to our overall chapter excellence. Here are some of the ways
              we make that happen:
              <br />
              <br />
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
                <ListItem sx={{ display: "list-item" }}>
                  Four mandatory study hours every school night for freshmen
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Any member struggling with grades is placed on mandatory study
                  hours
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Every member attends class regardless of his current GPA
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  The house has a wifi network linked to the S&amp;T system The
                  network provides access to laser printers and copier
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  We maintain extensive academic files to assist each brother
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  The KA house has extensive dedicated study spaces
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  This scholarship program is strongly supported by all members
                  of the house and is a prime reason Kappa Alpha consistently
                  maintains a GPA above the All Men&apos;s Average GPA and among the
                  top of Greek organizations.
                </ListItem>
              </List>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Scholarships;
