import { Box, Grid } from "@mui/material";

function TextSectionImage(props) {
  return (
    <Grid item mobile={12} tablet={6} sx={{margin: "auto"}}>
      <Box
        component="img"
        src={props.src}
        alt={props.alt}
        sx={{
          borderRadius: ".25rem",
          boxShadow: ".1rem .1rem .5rem",
          width: "100%",
          height: "auto",
        }}
      />
    </Grid>
  );
}

export default TextSectionImage;
