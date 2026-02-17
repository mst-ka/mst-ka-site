import { Box, Typography } from "@mui/material";

function Banner(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "10rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #be2f37 0%, #8a2228 100%)",
        borderBottom: "4px solid #c19709",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "white.main",
          textShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
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
