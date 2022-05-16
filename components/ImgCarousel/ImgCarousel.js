import React from 'react'

import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { styled } from "@mui/material/styles";
import Image from 'next/image'

function ImgCarousel() {
  var imgs = [
    {
      heading: "Kappa Alpha Order",
      sub_heading: "Beta Alpha Chapter",
      alt_text: "TODO(Issue#124) Alt",
      src: "/index/home-carousel-1.jpeg",
      button_text:"About Us",
      button_link:"TODO(Issue#124) Add About Us Link"
    },
    {
      heading: "Kappa Alpha Order",
      sub_heading: "Beta Alpha Chapter",
      alt_text: "TODO(jstuder) Alt",
      src: "/index/home-carousel-2.jpeg",
      button_text:"Our Brotherhood",
      button_link:"TODO(Issue#124) Add About Us Link"
    },
    {
      heading: "Kappa Alpha Order",
      sub_heading: "Beta Alpha Chapter",
      alt_text: "TODO(jstuder) Alt",
      src: "/index/home-carousel-3.jpeg",
      button_text:"Academics Matter",
      button_link:"TODO(Issue#124 Add brotherhood link"
    }]

  return (
    <Carousel>
    {
      imgs.map( (img, i) => <_CreateImage key={i} image={img} /> )
    }
    </Carousel>
  )
}

function _CreateImage(props)
{
  const ImageHeader = styled("h1")(() => ({
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
  }));
  const ImageSecondary = styled("h2")(() => ({
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
  }));
  const ButtonDiv = styled("div")(() => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }));
  return (
    <Paper>
      <div style={{position: "relative", width: "100%", height: "600px"}}>
        {/* TODO(Issue#124} Darken these background images */}
        <Image src={props.image.src} 
               alt={props.image.alt_text}
               objectFit='cover'
               layout='fill'/>
        <ImageHeader>{props.image.heading}</ImageHeader>
        <ImageSecondary>{props.image.sub_heading}</ImageSecondary>
        <p>{props.image.description}</p>
        <ButtonDiv>
          <a href={props.image.button_link}>
            <Button variant="contained">
              {props.image.button_text}<ArrowRightIcon />
            </Button>
          </a>
          {/* TODO(Issue#124) Fix Spacing between carousel buttons */}
          <a href="/ApplyOnline.html">
            <Button variant="contained"> 
            <b>Apply Online</b><ArrowRightIcon />
            </Button>
          </a>
        </ButtonDiv>
      </div>
    </Paper>
  )
}

export default ImgCarousel;
