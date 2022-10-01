import { Typography } from "@mui/material";

function TextSectionHeading(props) {
  return (
    <Typography
      variant="h4"
      sx={{ paddingBottom: "1rem", display: "flex", alignItems: "center", }}
    >
      {props.children}
    </Typography>
  );
}

export default TextSectionHeading;
