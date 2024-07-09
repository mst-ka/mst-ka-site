import { Box, Container, Divider, Grid, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import QuickLinkButton from "./QuickLinkButton";
import theme from "../../../utils/theme";
import {
  presidentPhoneNumber,
  alumnusAdvisorPhoneNumber,
} from "../../../utils/contact-info";
import { officerInfo } from "../../../utils/officer-info";

const quickLinks = [
  { title: "Values", link: "/values" },
  { title: "Awards", link: "/awards" },
  { title: "About", link: "/about" },
  { title: "Alumni", link: "/alumni" },
  { title: "Apply", link: "/apply" },
];

function Footer() {
  return (
    <Box sx={{}}>
      <Container
        sx={{
          bgcolor: "#34363E",
          padding: { mobile: "1rem 2rem", laptop: "1rem 10rem" },
        }}
      >
        <Grid container spacing={2}>
          <Grid item mobile={12} tablet={3} sx={{ marginY: "auto" }}>
            <Box
              component="img"
              src="/KA_logo.png"
              alt="KALogo"
              sx={{ width: "4.5rem", float: "left", marginRight: ".5rem" }}
            />
            <Typography
              variant="overline"
              color="white.main"
              sx={{ fontSize: "1.2rem", fontWeight: 500, lineHeight: "80%" }}
            >
              Kappa
              <br />
              Alpha
              <br />
              Order
            </Typography>
            <Typography color="primary.main">Missouri S&amp;T</Typography>
            <Box>
              <Link href="https://www.instagram.com/mst_ka/">
                <InstagramIcon
                  sx={{ color: "secondary.main", margin: ".5rem" }}
                />
              </Link>
              <Link href="https://www.facebook.com/BAofKA">
                <FacebookIcon
                  sx={{ color: "secondary.main", margin: ".5rem" }}
                />
              </Link>
              <Link href="https://twitter.com/MST_KA">
                <XIcon
                  sx={{ color: "secondary.main", margin: ".5rem" }}
                />
              </Link>
              <Link href="https://www.linkedin.com/company/beta-alpha-chapter-of-kappa-alpha-order/">
                <LinkedInIcon
                  sx={{ color: "secondary.main", margin: ".5rem" }}
                />
              </Link>
            </Box>
          </Grid>
          <Grid item mobile={12} tablet={3}>
            <Typography variant="h6" color="white.main">
              Contact Us - Chapter
            </Typography>
            <Divider
              color={theme.palette.primary.main}
              sx={{
                borderBottomWidth: 3,
                marginY: ".5rem",
                maxWidth: "4rem",
              }}
            />
            <Typography color="white.main" sx={{ fontSize: ".9rem" }}>
              Beta Alpha of Kappa Alpha
              <br />
              1 Fraternity Drive Rolla, Missouri 65401
              <br />
              <Typography sx={{ textDecoration: "underline" }}>
                President
              </Typography>
              {officerInfo.president.name}: {presidentPhoneNumber}
              <Typography sx={{ textDecoration: "underline" }}>
                Alumnus Advisor
              </Typography>
              Jim Hennessey: {alumnusAdvisorPhoneNumber}
            </Typography>
          </Grid>
          <Grid item mobile={12} tablet={3}>
            <Typography variant="h6" color="white.main">
              Contact Us - National
            </Typography>
            <Divider
              color={theme.palette.primary.main}
              sx={{
                borderBottomWidth: 3,
                marginY: ".5rem",
                maxWidth: "4rem",
              }}
            />
            <Typography color="white.main" sx={{ fontSize: ".9rem" }}>
              Kappa Alpha Order at Mulberry Hill
              <br />
              115 Liberty Hall Road Lexington, Virginia 24450
              <br />
              Phone: (540) 463-1865
              <br />
              Fax: (540) 463-2140
              <br />
            </Typography>
          </Grid>
          <Grid item mobile={12} tablet={3}>
            <Typography variant="h6" color="white.main">
              Quick Links
            </Typography>
            <Divider
              color={theme.palette.primary.main}
              sx={{
                borderBottomWidth: 3,
                marginY: ".5rem",
                maxWidth: "4rem",
              }}
            />
            {quickLinks.map((quickLink, index) => (
              <QuickLinkButton
                key={index}
                title={quickLink.title}
                link={quickLink.link}
              />
            ))}
          </Grid>
        </Grid>
        <Typography
          color="white.main"
          sx={{
            textAlign: "center",
            padding: { mobile: "1rem 2rem 5rem", laptop: "1rem 12rem" },
          }}
        >
          Developed by Beta Alpha of Kappa Alpha and{" "}
          <Link underline="hover" href="https://github.com/mst-ka">
            hosted on Github
            <GitHubIcon
              sx={{
                verticalAlign: "middle",
                marginLeft: ".25rem",
                color: "primary.main",
              }}
            />
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
