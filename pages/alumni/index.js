import { Container, Divider, Grid, Link, Typography } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import Newsletter from "../../components/Subpages/Alumni/Newsletter";
import MailingListSignup from "../../components/Subpages/Alumni/MailingListSignUp";

const newsletters = [
  {
    volumeName: "Vol. 10",
    link: "/newsletters/fs25_vol10.pdf",
    imageSrc: "/images/alumni/f25_cover.jpeg",
    altText: "Fall 2025 Newsletter",
    volumeSubText:
      "Fall 2025 Volume of the Beta Alpha Alumni Association Journal",
  },
  {
    volumeName: "Vol. 9",
    link: "https://issuu.com/beta-alpha-alumni-association/docs/beta_alpha_journal_fall_24_vol_9",
    imageSrc: "/images/alumni/f24_cover.jpeg",
    altText: "Fall 2024 Newsletter",
    volumeSubText:
      "Fall 2024 Volume of the Beta Alpha Alumni Association Journal",
  },
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
    link: "/newsletters/ss22_vol4.pdf",
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
        maxWidth="desktop"
        sx={{
          py: { mobile: 2, tablet: 4 },
          px: { mobile: 2, tablet: 3, laptop: 4 },
        }}
      >
        <Typography align="justify" sx={{ padding: "1rem" }}>
          The Beta Alpha Alumni Association (BAAA) would like to welcome you to
          the central hub for our Beta Alpha alumni. Here you will find the
          latest issue of our alumni newsletter, The BAAA Journal, published by
          the BAAA. Each edition is filled with chapter news, historical
          retrospectives, opportunities for alumni engagement, and celebrations
          of our brothers&apos; personal and professional milestones. Do you
          know a brother with a story worth sharing? We invite you to recommend
          them for an alumni spotlight by filling out{" "}
          <Link href="/alumni/spotlight">this form</Link>. For any questions or
          content suggestions, please connect with the BAAA contacts listed in
          any of the journals below.
        </Typography>
        <Divider sx={{ margin: "1rem 0rem" }} />
        <MailingListSignup />
        <Divider sx={{ margin: "1rem 0rem" }} />
        <Grid container spacing={6} sx={{ paddingTop: "1rem" }}>
          {newsletters.map((newsletter) => (
            <Grid key={newsletter.volumeName} item mobile={12} tablet={6}>
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
