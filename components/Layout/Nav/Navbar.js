import { useState } from "react";

import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import NavbarButton from "./NavbarButton";
import MobileNavMenu from "./MobileNavMenu";

function Navbar() {
  const pages = [
    { title: "Home", link: "/" },
    { title: "Values", link: "/values" },
    { title: "Awards", link: "/awards" },
    { title: "About Us", link: "/about" },
    { title: "Alumni", link: "/alumni" },
    { title: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "background.default",
          
        }}
      >
        <Toolbar
          sx={{ justifyContent: "space-between"}}
        >
          <Link href="#" underline="none">
            <Box
              component="img"
              src="/KA_logo.png"
              alt="KALogo"
              sx={{
                float: "left",
                padding: ".2rem",
                marginRight: ".25rem",
                width: "4rem",
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Verdana",
                fontSize: "2rem",
                fontWeight: 600,
                paddingTop: ".5rem",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                display: { mobile: "none", tablet: "block" },
              }}
            >
              Kappa Alpha Order
            </Typography>
            <Typography
              variant="overline"
              sx={{
                fontFamily: "Verdana",
                color: "grey.main",
                letterSpacing: ".2rem",
                textTransform: "uppercase",
                display: { mobile: "none", tablet: "block" },
              }}
            >
              Missouri S&amp;T
            </Typography>
          </Link>

          <Box sx={{ display: "flex" }}>
            {pages.map((page, index) => (
              <NavbarButton key={index} title={page.title} link={page.link} />
            ))}
          </Box>

          <IconButton
            onClick={handleDrawerOpen}
            sx={{ display: { laptop: "none" } }}
          >
            <MenuIcon fontSize="large" sx={{ color: "primary.main" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MobileNavMenu open={open} handleDrawerClose={handleDrawerClose} />
    </div>
  );
}

export default Navbar;
