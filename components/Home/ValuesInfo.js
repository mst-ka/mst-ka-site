import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function ValuesInfoCard(props) {
  return (
    <Grid
      item
      mobile={12}
      laptop={4}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card sx={{ width: "90%" }}>
        <CardMedia component="img" src={props.image} />
        <CardContent>
          <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
            {props.title}
          </Typography>
          <Typography sx={{ marginBottom: "1rem" }}>
            {props.children}
          </Typography>
          <Button variant="text" href="/values" endIcon={<ArrowRightIcon />}>
            Read More
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ValuesInfoCard;
