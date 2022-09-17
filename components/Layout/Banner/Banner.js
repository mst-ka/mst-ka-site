import { Box, Typography } from "@mui/material";

function Banner(props) {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        height: "10rem",
        lineHeight: "10rem",
        textAlign: "center",
        backgroundColor: "primary.main",
        background:
          "radial-gradient(circle, transparent 20%, #be2f37 20%, #be2f37 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #be2f37 20%, #be2f37 80%, transparent 80%, transparent) 22.5px 22.5px, linear-gradient(#c19709 1.8px, transparent 1.8px) 0 -0.9px, linear-gradient(90deg, #c19709 1.8px, #be2f37 1.8px) -0.9px 0",
        backgroundSize: "45px 45px, 45px 45px, 22.5px 22.5px, 22.5px 22.5px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          display: "inline-block",
          verticalAlign: "middle",
          color: "white.main",
          textShadow: ".1rem .1rem 1rem #000000",
          fontWeight: 500,
          fontSize: { mobile: "2.5rem", tablet: "3.5rem" },
        }}
      >
        {props.text}
      </Typography>
    </Box>
  );
}

export default Banner;
