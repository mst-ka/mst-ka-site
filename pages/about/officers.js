import { Container, Grid } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import OfficerInfo from "../../components/Subpages/About/Officers/OfficerInfo";

const officers = [
  {
    name: "Charles Wieberg",
    position: "President",
    email: "cpw5tv@umsystem.edu",
    yearJoined: "2019",
    img: "/images/about/officers/1.jpg",
  },
  {
    name: "Mason Fleming",
    position: "Vice President",
    email: "mafqvc@umsystem.edu",
    yearJoined: "2019",
    img: "/images/about/officers/2.jpg",
  },
  {
    name: "Alex Lohr",
    position: "Recording Secretary",
    email: "aelgnb@umsystem.edu",
    yearJoined: "2019",
    img: "/images/about/officers/3.jpg",
  },
  {
    name: "Andersen Lohr",
    position: "Corresponding Secretary",
    email: "alv24@umsystem.edu",
    yearJoined: "2020",
    img: "/images/about/officers/4.jpg",
  },
  {
    name: "Luke Richardson",
    position: "Historian",
    email: "ldrygq@umsystem.edu",
    yearJoined: "2020",
    img: "/images/about/officers/5.jpg",
  },
  {
    name: "Brayden Desmond",
    position: "Purser (Treasurer)",
    email: "bmdg85@umsystem.edu",
    yearJoined: "2020",
    img: "/images/about/officers/6.jpg",
  },
  {
    name: "Jackson Roloff",
    position: "Parliamentarian",
    email: "jtrdxb@umsystem.edu",
    yearJoined: "2020",
    img: "/images/about/officers/7.jpg",
  },
  {
    name: "Jackson Hounsom",
    position: "Sergeant-at-Arms",
    email: "jch27c@umsystem.edu",
    yearJoined: "2020",
    img: "/images/about/officers/8.jpg",
  },
  {
    name: "Sam George",
    position: "Marshal",
    email: "smgw45@umsystem.edu",
    yearJoined: "2020",
    img: "/images/about/officers/9.jpg",
  },
  {
    name: "Matthew Stika",
    position: "Recruitment Chairman",
    email: "mwsc8p@umsystem.edu",
    yearJoined: "2021",
    img: "/images/about/officers/rc1.jpg",
  },
  {
    name: "Trey Brown",
    position: "Recruitment Chairman",
    email: "twbyny@umsystem.edu",
    yearJoined: "2021",
    img: "/images/about/officers/rc2.jpg",
  },
  {
    name: "John Niebrugge",
    position: "House Manager",
    email: "jpn7rk@umsystem.edu",
    yearJoined: "2021",
    img: "/images/about/officers/hm1.jpg",
  },
  {
    name: "Landon Royster",
    position: "House Manager",
    email: "ldrygd@umsystem.edu",
    yearJoined: "2021",
    img: "/images/about/officers/hm2.jpg",
  },
  {
    name: "Fredrick Lanning",
    position: "Steward",
    email: "fjl8bw@umsystem.edu",
    yearJoined: "2021",
    img: "/images/about/officers/steward.jpg",
  },
];

function BAOfKAOfficers() {
  return (<div>
    <Banner text="Chapter Officers"/>
    <Container sx={{ padding: { mobile: "2rem", tablet: "2rem 20rem" } }}>
      <Grid container spacing={12}>
        {officers.map((officer, index) => (
          <OfficerInfo
            key={index}
            name={officer.name}
            position={officer.position}
            email={officer.email}
            yearJoined={officer.yearJoined}
            img={officer.img}
          />
        ))}
      </Grid>
    </Container>
  </div>
    
  );
}

export default BAOfKAOfficers;
