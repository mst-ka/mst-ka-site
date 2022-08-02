import { Container, Grid } from "@mui/material";
import Newsletter from "../../components/Alumni Newsletter/Newsletter";

const newsletters = [
  {
    volumeName: "Vol. 1",
    link: "https://issuu.com/beta-alpha-alumni-association/docs/baaa_journal_vol_1",
    imageSrc: "/images/newsletters/f20_cover.jpeg",
    altText: "Fall 2020 Newsletter",
    volumeSubText: "Fall 2020 Volume of the Beta Alpha Alumni Association Journal"
  },
  {
    volumeName: "Vol. 2",
    link: "https://issuu.com/beta-alpha-alumni-association/docs/sp21_vol2",
    imageSrc: "/images/newsletters/s21_cover.jpeg",
    altText: "Spring 2021 Newsletter",
    volumeSubText: "Spring 2021 Volume of the Beta Alpha Alumni Association Journal"
  },
  {
    volumeName: "Vol. 3",
    link: "https://issuu.com/beta-alpha-alumni-association/docs/fs21_vol3",
    imageSrc: "/images/newsletters/f21_cover.jpeg",
    altText: "Fall 2021 Newsletter",
    volumeSubText: "Fall 2021 Volume of the Beta Alpha Alumni Association Journal"
  },
  {
    volumeName: "Vol. 4",
    link: "https://issuu.com/beta-alpha-alumni-association/docs/ss22_vol4",
    imageSrc: "/images/newsletters/s22_cover.jpeg",
    altText: "Spring 2022 Newsletter",
    volumeSubText: "Spring 2022 Volume of the Beta Alpha Alumni Association Journal"
  },
];

function Alumni() {
  return (
    <Container sx={{ padding: "2rem" }}>
      <Grid container spacing={12}>
        {newsletters.map((newsletter, index) => (
          <Grid key={index} item mobile={12} tablet={4} laptop={3}>
            <Newsletter
              volumeName={newsletter.volumeName}
              link={newsletter.link}
              imageSrc={newsletter.imageSrc}
              altText={newsletter.altText}
              volumeSubText={newsletter.volumeSubText}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Alumni;
