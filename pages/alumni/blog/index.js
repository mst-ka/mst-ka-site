import { fetchAPI } from "../../../utils/wordpress";
import Banner from "../../../components/Layout/Banner/Banner";
import {
  Box,
  Breadcrumbs,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Grid,
  CardActionArea,
  Divider,
  Link,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function Blog({ posts, error }) {
  return (
    <>
      <Banner text="Alumni Blog" />
      <Container
        maxWidth="desktop"
        sx={{
          py: { mobile: 2, tablet: 4 },
          px: { mobile: 2, tablet: 3, laptop: 4 },
        }}
      >
        {error && (
          <Typography color="error" align="center" sx={{ my: 4 }}>
            Error fetching posts: {error}
          </Typography>
        )}
        <Breadcrumbs
          separator={<ArrowRightIcon />}
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link underline="hover" color="inherit" href="/alumni">
            Alumni
          </Link>
          <Typography color="primary">Blog</Typography>
        </Breadcrumbs>
        <Typography align="justify" sx={{ padding: "1rem" }}>
          The latest news and official updates from the Chapter and the Beta
          Alpha Alumni Association. Stay informed on upcoming events, regional
          gatherings, and the ongoing progress of our brotherhood.
        </Typography>
        <Divider sx={{ margin: "2rem 0rem" }} />
        {posts && posts.edges && posts.edges.length > 0 ? (
          <Grid container spacing={2}>
            {posts.edges.map(({ node }) => (
              <Grid item mobile={12} key={node.slug}>
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardActionArea
                    component={Link}
                    href={`/alumni/blog/${node.slug}`}
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    {node.featuredImage?.node?.sourceUrl && (
                      <CardMedia
                        component="img"
                        height="200"
                        image={node.featuredImage.node.sourceUrl}
                        alt={node.featuredImage.node.altText || node.title}
                        sx={{ objectFit: "cover", filter: "blur(3px)" }}
                      />
                    )}
                    <CardContent sx={{ width: "100%" }}>
                      <Typography variant="h5" gutterBottom color="primary">
                        {node.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        color="text.secondary"
                        gutterBottom
                      >
                        {new Date(node.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </Typography>
                      <Box
                        sx={{
                          mt: 2,
                          "& p": { m: 0, color: "text.primary" },
                        }}
                        dangerouslySetInnerHTML={{ __html: node.excerpt }}
                      />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          !error && (
            <Typography
              align="center"
              variant="h6"
              color="text.secondary"
              sx={{ my: 8 }}
            >
              No posts found.
            </Typography>
          )
        )}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  let posts = null;
  let error = null;

  try {
    const data = await fetchAPI(
      `
      query AllPosts {
        posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              title
              content
              slug
              date
              excerpt
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
            }
          }
        }
      }
      `,
    );
    posts = data?.posts;
  } catch (err) {
    console.error("Error fetching posts:", err);
    error = err.message;
  }

  return {
    props: {
      posts: posts || null,
      error,
    },
  };
}
