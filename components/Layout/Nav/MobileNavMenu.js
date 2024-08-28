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
import {
  valuesSubPages,
  awardsSubPages,
  aboutSubPages,
  alumniSubPages,
} from "../../../utils/subpages";
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
          subpages={valuesSubPages}
        />
        <CollapsibleMobileNavButton
          icon={<EmojiEventsIcon />}
          title="Awards"
          subpages={awardsSubPages}
        />
        <CollapsibleMobileNavButton
          icon={<QuestionMarkIcon />}
          title="About"
          subpages={aboutSubPages}
        />
        <CollapsibleMobileNavButton
          icon={<PeopleIcon />}
          title="Alumni"
          subpages={alumniSubPages}
        />
        <MobileNavButton
          link="/apply"
          icon={<ContactPageIcon />}
          title="Apply"
        />
      </List>
    </Drawer>
  );
}

export default MobileNavMenu;
