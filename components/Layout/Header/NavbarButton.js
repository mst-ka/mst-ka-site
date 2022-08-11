import { Link, Typography, Box } from "@mui/material";

import theme from "../../../utils/theme.js";

function NavbarButton(props) {
  return (
    <Link href={props.link} underline="none">
      <Box
        sx={{
          color: "grey.main",
          height: "78px",
          width: "auto",
          padding: "1rem",
          alignItems: "center",
          justifyContent: "center",
          display: { mobile: "none", laptop: "flex" },
          

          transition: theme.transitions.create(
            ["color", "background-color", "border-bottom"],
            {
              duration: theme.transitions.duration.oneHundredMS,
            }
          ),

          "&:hover": {
            color: "secondary.main",
            backgroundColor: "#eeeeee",
            borderBottom: ".25rem solid",
          },
        }}
      >
        <Typography variant="button" sx={{ fontWeight: 700 }}>
          {props.title}
        </Typography>
      </Box>
    </Link>
  );
}

export default NavbarButton;
