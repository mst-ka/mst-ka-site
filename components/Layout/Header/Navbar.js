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

const pages = [
  { title: "Home", link: "/" },
  { title: "Values", link: "/values" },
  { title: "Awards", link: "/awards" },
  { title: "About Us", link: "/about" },
  { title: "Alumni", link: "/alumni" },
  { title: "Contact", link: "/contact" },
];

function Navbar() {
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
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link href="/" underline="none">
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
                fontSize: "2.5rem",
                fontWeight: 700,
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                display: { mobile: "none", tablet: "block" },
              }}
            >
              Kappa Alpha Order
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "grey.main",
                textTransform: "uppercase",
                display: { mobile: "none", tablet: "block" },
              }}
            >
              Missouri University of Science &amp; Technology
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
