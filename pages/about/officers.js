import { Container, Grid } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import OfficerInfo from "../../components/Subpages/About/Officers/OfficerInfo";

const officers = [
  {
    name: "Andersen Lohr",
    position: "President",
    email: "alv24@umsystem.edu",
    pledgeClass: "2020",
    img: "/images/about/officers/1.jpg",
  },
  {
    name: "Brayden Desmond",
    position: "Vice President",
    email: "bmdg85@umsystem.edu",
    pledgeClass: "2020",
    img: "/images/about/officers/2.jpg",
  },
  {
    name: "Caden Huffines",
    position: "Recording Secretary",
    email: "cahgcd@umsystem.edu",
    pledgeClass: "2021",
    img: "/images/about/officers/3.jpg",
  },
  {
    name: "Trey Brown",
    position: "Corresponding Secretary",
    email: "twbyny@umsystem.edu",
    pledgeClass: "2021",
    img: "/images/about/officers/4.jpg",
  },
  {
    name: "Sam Wright",
    position: "Historian",
    email: "sjwf3b@umsystem.edu",
    pledgeClass: "2022",
    img: "/images/about/officers/5.jpg",
  },
  {
    name: "Freddy Lanning",
    position: "Purser (Treasurer)",
    email: "fjl8bw@umsystem.edu",
    pledgeClass: "2021",
    img: "/images/about/officers/6.jpg",
  },
  {
    name: "Matthew Sherman",
    position: "Parliamentarian",
    email: "mrsdmw@umsystem.edu",
    pledgeClass: "2021",
    img: "/images/about/officers/7.jpg",
  },
  {
    name: "Matthew Stika",
    position: "Sergeant-at-Arms",
    email: "mwsc8p@umsystem.edu",
    pledgeClass: "2021",
    img: "/images/about/officers/8.jpg",
  },
  {
    name: "John Goins",
    position: "Marshal",
    email: "jrgdhx@umsystem.edu",
    pledgeClass: "2021",
    img: "/images/about/officers/9.jpg",
  },
  {
    name: "Paul Pham",
    position: "Recruitment Chairman",
    email: "pdpp88@umsystem.edu",
    pledgeClass: "2022",
    img: "/images/about/officers/rc1.jpg",
  },
  {
    name: "Chris Altamirano",
    position: "Recruitment Chairman",
    email: "ceak3z@umsystem.edu",
    pledgeClass: "2022",
    img: "/images/about/officers/rc2.jpg",
  },
  {
    name: "Isaac Metz",
    position: "House Manager",
    email: "ibm73g@umsystem.edu",
    pledgeClass: "2022",
    img: "/images/about/officers/hm1.jpg",
  },
  {
    name: "Alex Huebner",
    position: "House Manager",
    email: "achgzg@umsystem.edu",
    pledgeClass: "2022",
    img: "/images/about/officers/hm2.jpg",
  },
  {
    name: "Marco Miskovic",
    position: "Steward",
    email: "msmgg5@umsystem.edu",
    pledgeClass: "2022",
    img: "/images/about/officers/steward.jpg",
  },
];

function BAOfKAOfficers() {
  return (<div>
    <Banner text="Chapter Officers"/>
    <Container sx={{ padding: { mobile: "2rem", tablet: "2rem 16rem" } }}>
      <Grid container spacing={12}>
        {officers.map((officer, index) => (
          <OfficerInfo
            key={index}
            name={officer.name}
            position={officer.position}
            email={officer.email}
            pledgeClass={officer.pledgeClass}
            img={officer.img}
          />
        ))}
      </Grid>
    </Container>
  </div>
    
  );
}

export default BAOfKAOfficers;
