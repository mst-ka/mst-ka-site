import { Link, Typography, Box, Divider } from "@mui/material";
import theme from "../../../utils/theme.js";

function QuickLinkButton(props) {
  return (
    <Link href={props.link} underline="none">
      <Box
        sx={{
          color: "white.main",
          width: "auto",
          alignItems: "center",
          justifyContent: "flex-start",

          transition: theme.transitions.create(["color"], {
            duration: theme.transitions.duration.oneHundredMS,
          }),

          "&:hover": {
            color: "primary.main",
          },
        }}
      >
        <Typography sx={{ marginY: ".3rem" }}>{props.title}</Typography>
        <Divider color={theme.palette.white.main} />
      </Box>
    </Link>
  );
}

export default QuickLinkButton;
