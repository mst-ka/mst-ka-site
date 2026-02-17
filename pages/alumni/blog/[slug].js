import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { Container, Typography, Box, Breadcrumbs, Link } from "@mui/material";
import { fetchAPI } from "../../../utils/wordpress";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Post({ post, error }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Container
        maxWidth="desktop"
        sx={{
          py: { mobile: 2, tablet: 4 },
          px: { mobile: 2, tablet: 3, laptop: 4 },
        }}
      >
        <Breadcrumbs separator={<ArrowRightIcon />} aria-label="breadcrumb" sx={{ mb: 3 }}>
          <Link underline="hover" color="inherit" href="/alumni">
            Alumni
          </Link>
          <Link underline="hover" color="inherit" href="/alumni/blog">
            Blog
          </Link>
          <Typography color="primary">{post?.title}</Typography>
        </Breadcrumbs>

        {error && (
          <Typography color="error" align="center" sx={{ my: 4 }}>
            Error fetching post: {error}
          </Typography>
        )}

        {post && (
          <Box component="article">
            <Typography variant="h3" component="h1" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
              {"Posted on "}
              {new Date(post.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              {post.author?.node?.name && ` by ${post.author.node.name}`}
            </Typography>

            <Box
              sx={{
                "& p": { mb: 2, lineHeight: 1.7 },
                "& img": { maxWidth: "100%", height: "auto" },
                "& h2": { mt: 4, mb: 2 },
                "& h3": { mt: 3, mb: 2 },
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Box>
        )}
      </Container>
    </>
  );
}

export async function getStaticProps({ params }) {
  let post = null;
  let error = null;

  try {
    const data = await fetchAPI(
      `
      query PostBySlug($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          title
          content
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    `,
      {
        variables: {
          id: params.slug,
          idType: "SLUG",
        },
      }
    );
    post = data?.post;
  } catch (err) {
    console.error("Error fetching post:", err);
    error = err.message;
  }

  return {
    props: {
      post: post || null,
      error,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetchAPI(`
    query AllPostsSlugs {
      posts(first: 100) {
        nodes {
          slug
        }
      }
    }
  `);

  return {
    paths: data?.posts?.nodes?.map((post) => `/alumni/blog/${post.slug}`) || [],
    fallback: false,
  };
}
