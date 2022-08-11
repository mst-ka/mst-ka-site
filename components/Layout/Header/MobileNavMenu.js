import { Drawer, List, IconButton, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import BalanceIcon from "@mui/icons-material/Balance";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import PeopleIcon from "@mui/icons-material/People";
import ContactPageIcon from "@mui/icons-material/ContactPage";

import theme from "../../../utils/theme";

import MobileNavButton from "./MobileNavButton";
import CollapsibleMobileNavButton from "./CollapsibleMobileNavButton";

const DrawerHeader = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  padding: ".85rem",
  // necessary for content to be below app bar
  justifyContent: "flex-end",
  zIndex: -1,
}));

const valuesSubPages = [
  { title: "Our Values", link: "/values" },
  { title: "The Bond Of Brotherhood", link: "/values/bond-of-brotherhood" },
  { title: "Giving Back", link: "/values/giving-back" },
  { title: "We Are Gentleman", link: "/values/we-are-gentleman" },
  { title: "Top 5 Reasons to go KA", link: "/values/top-5-reasons" },
  { title: "You Are A KA", link: "/values/you-are-a-ka" },
];

const awardsSubPages = [
  { title: "Our Awards", link: "/awards" },
  { title: "Campus Awards", link: "/awards/campus-awards" },
  { title: "National Awards", link: "/awards/national-awards" },
  { title: "Scholarships", link: "/awards/scholarships" },
];

const aboutSubPages = [
  { title: "About Us", link: "/about" },
  { title: "BA Of KA Greek Life", link: "/about/ba-of-ka-greek-life" },
  { title: "BA Of KA House History", link: "/about/ba-of-ka-house-history" },
  { title: "BA Of KA Officers", link: "/about/ba-of-ka-officers" },
  {
    title: "KA National Risk Management Policy",
    link: "https://www.kappaalphaorder.org/wp-content/uploads/2011/04/2018-Risk-Management-Policy.pdf",
  },
  { title: "Letter From KA Parent", link: "/about/letter-from-ka-parent" },
  { title: "Parents FAQ", link: "/about/parents-faq" },
];

function MobileNavMenu(props) {
  return (
    <Drawer
      transitionDuration={theme.transitions.duration.oneHundredMS}
      variant="persistent"
      anchor="right"
      open={props.open}
      onClose={props.handleDrawerClose}
    >
      <DrawerHeader>
        <IconButton
          onClick={props.handleDrawerClose}
          sx={{ float: "left", display: { laptop: "none" } }}
        >
          <CloseIcon
            fontSize="large"
            sx={{ color: "primary.main", justifyContent: "left" }}
          />
        </IconButton>
      </DrawerHeader>
      <Divider />

      <List component="div">
        <MobileNavButton link="/" icon={<HomeIcon />} title="Home" />
        <CollapsibleMobileNavButton
          icon={<BalanceIcon />}
          title="Values"
          subPages={valuesSubPages}
        />
        <CollapsibleMobileNavButton
          icon={<EmojiEventsIcon />}
          title="Awards"
          subPages={awardsSubPages}
        />
        <CollapsibleMobileNavButton
          icon={<QuestionMarkIcon />}
          title="About"
          subPages={aboutSubPages}
        />
        <MobileNavButton link="/alumni" icon={<PeopleIcon />} title="Alumni" />
        <MobileNavButton
          link="/contact"
          icon={<ContactPageIcon />}
          title="Contact"
        />
      </List>
    </Drawer>
  );
}

export default MobileNavMenu;
