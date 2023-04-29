import { useState, useEffect } from "react";
import { Box, CardMedia, Grid, Typography, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function ImgCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgs, setImgs] = useState([
    {
      src: "images/home/banner-slide-1.jpg",
      button_text: "About Us",
      button_link: "/about",
    },
    {
      src: "images/home/banner-slide-2.jpg",
      button_text: "Academics Matter",
      button_link: "/about/academics",
    },
    {
      src: "images/home/banner-slide-3.jpg",
      button_text: "Our Brotherhood",
      button_link: "/values/bond-of-brotherhood",
    },
  ]);

  return (
    <Carousel
      duration={500}
      interval={6000}
      animation={"fade"}
      onChange={(index) => setActiveIndex(index)}
    >
      {imgs.map((img, index) => (
        <CreateImage
          key={index}
          index={index}
          activeIndex={activeIndex}
          image={img}
        />
      ))}
    </Carousel>
  );
}

function CreateImage(props) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  useEffect(() => {
    if (!imageIsLoaded) {
      setImageIsLoaded(imageIsLoaded || (props.activeIndex === props.index));
    }
  }, [props.activeIndex]);

  return (
    <>
      <Box>
        <CardMedia
          image={imageIsLoaded ? props.image.src : ''}
          component='div'
          sx={{
            position: "relative",
            boxShadow: "0rem .5rem 1rem",
            filter: "brightness(40%)",
            width: "100%",
            height: "35rem",
          }}
        />

        <Typography
          color="white.main"
          variant="h3"
          sx={{
            position: "absolute",
            left: "0",
            top: { mobile: "20%", tablet: "30%" },
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
            top: { mobile: "42%", tablet: "45%" },
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
            sx={{ float: { tablet: "right" }, minWidth: '15rem', minHeight: '3rem' }}
          >
            {props.image.button_text}
          </Button>
        </Grid>
        <Grid item mobile={12} tablet={6}>
          <Button
            color="primary"
            variant="contained"
            size="large"
            href="/apply"
            endIcon={<ArrowRightIcon />}
            sx={{ float: { tablet: "left" }, minWidth: '15rem', minHeight: '3rem'}}
          >
            Membership
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ImgCarousel;
