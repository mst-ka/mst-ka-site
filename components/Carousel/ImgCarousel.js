import { Box, CardMedia, Grid, Typography, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function ImgCarousel() {
  var imgs = [
    {
      src: "images/home/banner-slide-1.jpg",
      button_text: "About Us",
      button_link: "/about",
    },
    {
      src: "images/home/banner-slide-2.jpg",
      button_text: "Academics Matter",
      button_link: "/awards/scholarships",
    },
    {
      src: "images/home/banner-slide-3.jpg",
      button_text: "Our Brotherhood",
      button_link: "/values/bond-of-brotherhood",
    },
  ];

  return (
    <Carousel
      duration={2000}
      interval={6000}
      animation={"fade"}
    >
      {imgs.map((img, index) => (
        <CreateImage key={index} image={img} />
      ))}
    </Carousel>
  );
}

function CreateImage(props) {
  return (
    <>
      <Box>
        <CardMedia
          image={props.image.src}
          sx={{
            position: "relative",
            boxShadow: "0rem .5rem 1rem",
            filter: "brightness(40%)",
            width: "100%",
            height: "25rem",
          }}
        />

        <Typography
          color="white.main"
          variant="h3"
          sx={{
            position: "absolute",
            left: "0",
            top: { mobile: "10%", tablet: "30%" },
            textAlign: "center",
            width: "100%",
            fontWeight: "500",
            textShadow: ".1rem .1rem 1rem #000000",
          }}
        >
          Kappa Alpha Order
        </Typography>
        <Typography
          color="white.main"
          variant="h4"
          sx={{
            position: "absolute",
            left: "0",
            top: { mobile: "40%", tablet: "45%" },
            textAlign: "center",
            width: "100%",
            fontWeight: "500",
            textShadow: ".1rem .1rem 1rem #000000",
          }}
        >
          Beta Alpha Chapter
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          position: "absolute",
          left: "0",
          top: "60%",
          textAlign: "center",
        }}
      >
        <Grid item mobile={12} tablet={6}>
          <Button
            color="primary"
            variant="contained"
            size="large"
            href={props.image.button_link}
            endIcon={<ArrowRightIcon />}
            sx={{ float: { tablet: "right" } }}
          >
            {props.image.button_text}
          </Button>
        </Grid>
        <Grid item mobile={12} tablet={6}>
          <Button
            color="primary"
            variant="contained"
            size="large"
            endIcon={<ArrowRightIcon />}
            sx={{ float: { tablet: "left" } }}
          >
            Membership
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ImgCarousel;
