import { Card, Box, Paper, CardMedia, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function ImgCarousel() {
  var imgs = [
    {
      heading: "Kappa Alpha Order",
      sub_heading: "Beta Alpha Chapter",
      alt_text: "Banner Slide 2",
      src: "images/home/banner-slide-1.jpg",
      button_text: "About Us",
      button_link: "/about",
    },
    {
      heading: "Kappa Alpha Order",
      sub_heading: "Beta Alpha Chapter",
      alt_text: "Banner Slide 2",
      src: "images/home/banner-slide-2.jpg",
      button_text: "Our Brotherhood",
      button_link: "/awards/scholarships",
    },
    {
      heading: "Kappa Alpha Order",
      sub_heading: "Beta Alpha Chapter",
      alt_text: "Banner Slide 3",
      src: "images/home/banner-slide-3.jpg",
      button_text: "Academics Matter",
      button_link: "/values/bond-of-brotherhood",
    },
  ];

  return (
    <Carousel
      indicators={false}
      duration={3000}
      interval={6000}
      animation={"fade"}
    >
      {imgs.map((img, index) => (
        <_CreateImage key={index} image={img} />
      ))}
    </Carousel>
  );
}

function _CreateImage(props) {
  return (
    <Box>
      <CardMedia
        image={props.image.src}
        sx={{
          boxShadow: "0rem 1rem 2rem",
          filter: "brightness(50%)",
          width: "100%",
          height: "25rem",
        }}
      />
      
      <Typography color="white.main" variant="h3" sx={{position:"absolute", left: "0", top:"30%", textAlign: "center", width: "100%"}}>This is a test2</Typography>
    </Box>
  );
}

export default ImgCarousel;
