import {
  Container,
  Divider,
  Grid,
  Link,
  Typography,
  Breadcrumbs,
} from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import Newsletter from "../../components/Subpages/Alumni/Newsletter";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

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

function NewsletterArchive() {
  return (
    <div>
      <Banner text="Newsletter Archive" />
      <Container
        maxWidth="desktop"
        sx={{
          py: { mobile: 2, tablet: 4 },
          px: { mobile: 2, tablet: 3, laptop: 4 },
        }}
      >
        <Breadcrumbs
          separator={<ArrowRightIcon />}
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link underline="hover" color="inherit" href="/alumni">
            Alumni
          </Link>
          <Typography color="primary">Newsletter Archive</Typography>
        </Breadcrumbs>
        <Typography align="justify" sx={{ padding: "1rem" }}>
          Explore our archive of newsletters, where you can find past issues of
          the BAAA Journal. Each edition is filled with chapter news, historical
          retrospectives, and celebrations of our brothers&apos; personal and
          professional milestones. After the Fall 2025 issue, the BAAA Journal
          will transition to a <Link href="/alumni/blog">blog format</Link> ,
          allowing for more frequent updates and dynamic content. We encourage
          you to explore the archive, but check out our new blog for the latest
          news and stories from our alumni community!
        </Typography>
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

export default NewsletterArchive;
