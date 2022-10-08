import { Container, Grid } from "@mui/material";
import ImgCarousel from "../components/Carousel/ImgCarousel";
import Tour from "../components/Home/Tour";
import ValuesInfoCard from "../components/Home/ValuesInfo";

const values = [
  {
    title: "Gentility",
    image: "/images/home/gentility.png",
    content:
      "The men of Kappa Alpha Order are known as the gentlemen of the fraternity world. A KA, through his gentility, should always be distinguished by his modern chivalric characteristics.",
  },
  {
    title: "Service",
    image: "/images/home/service.png",
    content:
      "At the heart of the code of chivalry and the fabric of KA is service to those in need. KAs serve hrough community service, volunteerism and commitment to philanthropy.",
  },
  {
    title: "Excellence",
    image: "/images/home/excellence.png",
    content:
      "“Onward” is ever our stance despite the danger and difficulty that life often brings. KAs understand that anything in life worth attaining will take hard work, dedication, and determination.",
  },
];

export default function Home() {
  return (
    <>
      <ImgCarousel />
      <Container sx={{ padding: { mobile: "1rem", laptop: "2rem 12rem" } }}>
        <Grid container spacing={6}>
          {values.map((value, index) => (
            <ValuesInfoCard key={index} title={value.title} image={value.image}>
              {value.content}
            </ValuesInfoCard>
          ))}
        </Grid>
        <Tour/>
      </Container>
    </>
  );
}
