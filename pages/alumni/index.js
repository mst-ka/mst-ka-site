import { Container, Grid, Button, Link, Typography } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import Newsletter from "../../components/Subpages/Alumni/Newsletter";

const newsletters = [
  {
    volumeName: "Vol. 5",
    link: "https://issuu.com/beta-alpha-alumni-association/docs/fs22_vol5",
    imageSrc: "/images/alumni/f22_cover.jpeg",
    altText: "Fall 2022 Newsletter",
    volumeSubText:
      "Fall 2022 Volume of the Beta Alpha Alumni Association Journal",
  },
  {
    volumeName: "Vol. 4",
    link: "https://issuu.com/beta-alpha-alumni-association/docs/ss22_vol4",
    imageSrc: "/images/alumni/s22_cover.jpeg",
    altText: "Spring 2022 Newsletter",
    volumeSubText:
      "Spring 2022 Volume of the Beta Alpha Alumni Association Journal",
  },
  {
    volumeName: "Vol. 3",
    link: "https://issuu.com/beta-alpha-alumni-association/docs/fs21_vol3",
    imageSrc: "/images/alumni/f21_cover.jpeg",
    altText: "Fall 2021 Newsletter",
    volumeSubText:
      "Fall 2021 Volume of the Beta Alpha Alumni Association Journal",
  },
  {
    volumeName: "Vol. 2",
    link: "https://issuu.com/beta-alpha-alumni-association/docs/sp21_vol2",
    imageSrc: "/images/alumni/s21_cover.jpeg",
    altText: "Spring 2021 Newsletter",
    volumeSubText:
      "Spring 2021 Volume of the Beta Alpha Alumni Association Journal",
  },
  {
    volumeName: "Vol. 1",
    link: "https://issuu.com/beta-alpha-alumni-association/docs/baaa_journal_vol_1",
    imageSrc: "/images/alumni/f20_cover.jpeg",
    altText: "Fall 2020 Newsletter",
    volumeSubText:
      "Fall 2020 Volume of the Beta Alpha Alumni Association Journal",
  },
];

function Alumni() {
  return (
    <div>
      <Banner text="Alumni" />

      <Container
        sx={{
          padding: {
            mobile: "2rem",
            tablet: "2rem 12rem",
            laptop: "2rem 20rem",
          },
        }}
      >
        <Typography>
          Here you will find our alumni newsletter organized by the Beta Alpha
          Alumni Association (BAAA). We release our newsletter bi-annually,
          highlighting: news, history, ways for alumni to get involved, and our
          brothers&apos; life events &amp; accomplishments. If you want to make
          sure you never miss a newsletter, please fill out our{" "}
          <Link href="https://forms.gle/JGcLGjDLBuoPFC4WA">
            Alumni Reporting Form!
          </Link> 
          
        </Typography>

        <Grid container spacing={6} sx={{marginTop: "0rem"}}>
          {newsletters.map((newsletter, index) => (
            <Grid key={index} item mobile={12} tablet={6}>
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
    </div>
  );
}

export default Alumni;
