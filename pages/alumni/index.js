import { Container, Divider, Grid, Link, Typography } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import Newsletter from "../../components/Subpages/Alumni/Newsletter";
import MailingListSignup from "../../components/Subpages/Alumni/MailingListSignUp";

const newsletters = [
  {
    volumeName: "Vol. 8",
    link: "https://issuu.com/beta-alpha-alumni-association/docs/beta_alpha_journal_spring_24_vol_8",
    imageSrc: "/images/alumni/s24_cover.jpeg",
    altText: "Spring 2024 Newsletter",
    volumeSubText:
      "Spring 2024 Volume of the Beta Alpha Alumni Association Journal",
  },
  {
    volumeName: "Vol. 7",
    link: "https://issuu.com/beta-alpha-alumni-association/docs/fs23_vol7",
    imageSrc: "/images/alumni/f23_cover.jpeg",
    altText: "Fall 2023 Newsletter",
    volumeSubText:
      "Fall 2023 Volume of the Beta Alpha Alumni Association Journal",
  },
  {
    volumeName: "Vol. 6",
    link: "https://issuu.com/beta-alpha-alumni-association/docs/ss23_vol6",
    imageSrc: "/images/alumni/s23_cover.jpeg",
    altText: "Spring 2023 Newsletter",
    volumeSubText:
      "Spring 2023 Volume of the Beta Alpha Alumni Association Journal",
  },
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
    link: "/newsletters/fs21_vol3.pdf",
    imageSrc: "/images/alumni/f21_cover.jpeg",
    altText: "Fall 2021 Newsletter",
    volumeSubText:
      "Fall 2021 Volume of the Beta Alpha Alumni Association Journal",
  },
  {
    volumeName: "Vol. 2",
    link: "/newsletters/ss21_vol2.pdf",
    imageSrc: "/images/alumni/s21_cover.jpeg",
    altText: "Spring 2021 Newsletter",
    volumeSubText:
      "Spring 2021 Volume of the Beta Alpha Alumni Association Journal",
  },
  {
    volumeName: "Vol. 1",
    link: "/newsletters/fs20_vol1.pdf",
    imageSrc: "/images/alumni/f20_cover.jpeg",
    altText: "Fall 2020 Newsletter",
    volumeSubText:
      "Fall 2020 Volume of the Beta Alpha Alumni Association Journal",
  },
];

function Alumni() {
  return (
    <div>
      <Banner text="The BAAA Journal" />
      <Container
        sx={{
          padding: {
            mobile: "2rem",
            tablet: "2rem 12rem",
            laptop: "2rem 20rem",
          },
        }}
      >
        <Typography align="justify" sx={{ padding: "1rem" }}>
          Welcome to our alumni page where you will find our alumni newsletter,
          The BAAA Journal, organized by the Beta Alpha Alumni Association
          (BAAA). We release our newsletter bi-annually, highlighting: news,
          history, ways for alumni to get involved, and our brothers&apos; life
          events &amp; accomplishments. If you would like to recommend a brother
          to be featured in a future issue of The BAAA Journal, please fill out{" "}
          <Link href="/alumni/spotlight">this form</Link>. If you have questions
          or suggestions for future stories to be highlighted please reach out
          to one of the BAAA Contacts on the last page of any issue of The BAAA
          Journal below!
        </Typography>
        <Divider sx={{ margin: "1rem 0rem" }} />
        <MailingListSignup />
        <Divider sx={{ margin: "1rem 0rem" }} />
        <Grid container spacing={6} sx={{ paddingTop: "1rem" }}>
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
