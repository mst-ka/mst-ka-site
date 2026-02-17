import {
  Container,
  Divider,
  Grid,
  Link,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Box,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import StarIcon from "@mui/icons-material/Star";
import WeekendIcon from "@mui/icons-material/Weekend";
import Banner from "../../components/Layout/Banner/Banner";
import MailingListSignup from "../../components/Subpages/Alumni/MailingListSignUp";

function Alumni() {
  return (
    <div>
      <Banner text="Alumni" />
      <Container
        maxWidth="desktop"
        sx={{
          py: { mobile: 2, tablet: 4 },
          px: { mobile: 2, tablet: 3, laptop: 4 },
        }}
      >
        <Typography align="justify" sx={{ padding: "1rem" }}>
          Welcome to the digital home of the Beta Alpha Alumni Association
          (BAAA). Here, you can find the latest news and updates, access our
          newsletter archive, and stay connected with the Beta Alpha community.
          We invite you to explore the site, including our blog for stories from
          our brothers and the latest Chapter developments. Whether you&apos;re
          looking to reconnect, share your own updates, or stay informed, this
          is your space to engage with the BAAA.
          <br />
          <br />
          Have questions or news to share? Reach out to us anytime at{" "}
          <Link href="mailto:betaalphaalumni1903@gmail.com">
            betaalphaalumni1903@gmail.com
          </Link>
          .
        </Typography>
        <Divider sx={{ margin: "1rem 0rem" }} />
        <MailingListSignup />
        <Divider sx={{ margin: "1rem 0rem" }} />

        {/* Card area with links to the blog, newsletter archive, Alumni Spotlight, & Furniture Fundraiser */}
        <Grid container spacing={4} sx={{ paddingTop: "1rem" }}>
          <Grid item mobile={12} tablet={6}>
            <Card
              raised
              sx={{
                height: "100%",
                backgroundColor: "primary.main",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
            >
              <CardActionArea
                href="/alumni/blog"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white.main",
                  }}
                >
                  <ArticleIcon sx={{ fontSize: 60 }} />
                </Box>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    backgroundColor: "white.main",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    gutterBottom
                    fontWeight="bold"
                  >
                    Alumni Blog
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stay up to date with the latest news and stories from our
                    alumni community through our new blog format!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item mobile={12} tablet={6}>
            <Card
              raised
              sx={{
                height: "100%",
                backgroundColor: "primary.main",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
            >
              <CardActionArea
                href="/alumni/spotlight"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white.main",
                  }}
                >
                  <StarIcon sx={{ fontSize: 60 }} />
                </Box>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    backgroundColor: "white.main",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    gutterBottom
                    fontWeight="bold"
                  >
                    Alumni Spotlight
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Know a brother who deserves recognition? Submit their name
                    and accomplishments to be featured in our Alumni blog!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item mobile={12} tablet={6}>
            <Card
              raised
              sx={{
                height: "100%",
                backgroundColor: "primary.main",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
            >
              <CardActionArea
                href="/alumni/newsletter-archive"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white.main",
                  }}
                >
                  <CollectionsBookmarkIcon sx={{ fontSize: 60 }} />
                </Box>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    backgroundColor: "white.main",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    gutterBottom
                    fontWeight="bold"
                  >
                    Newsletter Archive
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Explore our archive of newsletters, where you can find past
                    issues of the BAAA Journal filled with chapter news and
                    history.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item mobile={12} tablet={6}>
            <Card
              raised
              sx={{
                height: "100%",
                backgroundColor: "primary.main",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
            >
              <CardActionArea
                href="/furniture-fundraiser"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white.main",
                  }}
                >
                  <WeekendIcon sx={{ fontSize: 60 }} />
                </Box>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    backgroundColor: "white.main",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    gutterBottom
                    fontWeight="bold"
                  >
                    Furniture Fundraiser
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Check one of our past initiatives that led to the successful
                    furniture fundraiser that updated the veranda with durable,
                    comfortable furniture for actives and alumni to enjoy for
                    years to come.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Alumni;
