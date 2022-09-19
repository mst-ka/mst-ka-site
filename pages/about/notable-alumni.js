import { Container, List, ListItem, Typography } from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";
import NotableAlumniList from "../../components/Subpages/About/NotableAlumni/NotbleAlumniList";

const notableAlumni = {
  business: [
    "Clyde B. Anderson, CEO of Books-A-Million",
    "Clayton D. Baird, Chairman, Mrs. Baird’s Bakeries",
    "John H. Bryan, Jr, Chairman and CEO, Callaway Golf",
    "David M. Chamberlin, CEO, Shaklee Corporation",
    "Harry Cullen, Director, Cullen Bank Center",
    "Robert Crandall, Chairman and CEO, American Airlines",
    "Earnest W. Deavenport, President and CEO, Eastman Chemical Co.",
    "John D. DeButts, Chairman, AT&T",
    "William E. Dreyer, Senior Executive VP, Southwestern Bell",
    "U. Edwin Garrison, Chairman, Thiokol",
    "David A. Stonecipher, CEO, Jefferson-Pilot Corporation",
    "Ted L. Weise, CEO, FedEx",
  ],
  education: [
    "Dr. William R. Baldt",
    "Goldey Beacom",
    "Dr. Robert Bottoms, DePaul",
    "Dr. E. Douglas Hodo, Houston Baptist",
    "Dr. John E. Johns, Furman",
    "John Knapp, Superintendent VMI",
    "Dr. Frank A. Rose, University of Alabama",
    "Dr. Bruce A. Samson, Tampa",
    "Dr. Billy O. Wireman, Queens College",
    "Dr. Forest Kent Wyatt, Delta State",
  ],
  entertainment: [
    "ACTING - Bill Engvall, Rob Huebel, George Grizzard, Richard Moll, Randolph Scott, Anthony Perkins",
    "MUSIC - Zac Brown, Pat Boone, George Hamilton IV, Page McConnell",
    "NEWS - Charlie Rose",
  ],
  government: [
    "Rep. Carl Albert (OK)",
    "Sen. Roy Blunt (MO)",
    "Sen. Caleb Boggs (DE)",
    "Rep. Rick Boucher (VA)",
    "Rep. Larry Combest (TX)",
    "Rep. Bart Gordon (TN)",
    "Rep. Sonny Montgomery (MS)",
    "Sen. Claude Pepper (FL)",
    "Rep. Floyd D. Spence (SC)",
    "Hugh Clegg, Asst Director FBI",
    "Clark M. Clifford, Chief Council to Pres Truman, Eisenhower, Kennedy; Secretary of Defense",
    "J. Edgar Hoover, Director FBI",
    "Dean Rusk, Secretary of State",
    "Gov. J. Caleb Boggs, Delaware",
    "Gov. William Clements, Texas",
    "Gov. Bill Owens, Colorado",
    "Gov. Austin Peay, Tennessee",
  ],
  military: [
    "Admiral Richard E. Byrd, Jr. Antarctic Explorer; Medal of Honor",
    "Captain David McCampbell, Top U.S. Ace; Medal of Honor",
    "General George C. Marshall, General of the Army, Secy of State; Secy Defense; Nobel Peace Prize",
    "General Jack N. Merritt, Leader of NATO",
    "General George S. Patton, General of the U.S. Army",
    "General J.H. Binford Peay II, Vice Chief of Staff, Army; Superintendent, VMI",
    "General Lemuel C. Shepherd, Jr. Commandant, U.S. Marine Corps",
    "Richard Truly, Vice Admiral, U.S. Navy; Astronaut; Director of NASA",
  ],
  sports: [
    "PGA - Brandt Snedeker, Tommy Aaron, Ben Crenshaw, Al Geiberger, Don January, Jay Sigel, Dave Stockton",
    "RACING - James C. France, Danny Sullivan",
    "NFL - Sonny Jergensen, Joe Kapp, Ernie Nevers, Sam Wyche",
    "MLB - Tim McCarver",
    "OLYMPICS - Melvin Stewart",
  ],
  religion: [
    "Rt. Reverend James L. Duncan (1955-57); Bishop, Episcopal Diocese of Florida",
    "Dr. Richard T. Feller (1970-73); Canon Clerk of the Works, Washington Cathedral",
    "W. McLeod Frampton, Jr. (1957-61); Retired Presbyterian Minister",
    "Henry J. Mikell (1926-34); Episcopal Bishop, Atlanta; Chancellor, University of the South",
  ],
};

function NotableAlumni() {
  return (
    <div>
      <Banner text="Notable Alumni" />
      <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 20rem" } }}>
        <Typography gutterBottom variant="h5">
          Business
        </Typography>
        <NotableAlumniList alumni={notableAlumni.business} />

        <Typography gutterBottom variant="h5">
          Education - College &amp; University Presidents
        </Typography>
        <NotableAlumniList alumni={notableAlumni.education} />

        <Typography gutterBottom variant="h5">
          Entertainment
        </Typography>
        <NotableAlumniList alumni={notableAlumni.entertainment} />

        <Typography gutterBottom variant="h5">
          Government
        </Typography>
        <NotableAlumniList alumni={notableAlumni.government} />

        <Typography gutterBottom variant="h5">
          Military
        </Typography>
        <NotableAlumniList alumni={notableAlumni.military} />

        <Typography gutterBottom variant="h5">
          Sports
        </Typography>
        <NotableAlumniList alumni={notableAlumni.sports} />

        <Typography gutterBottom variant="h5">
          Religion
        </Typography>
        <NotableAlumniList alumni={notableAlumni.religion} />
      </Container>
    </div>
  );
}

export default NotableAlumni;
