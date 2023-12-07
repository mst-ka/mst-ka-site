import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";

function OfficerCard(props) {
  return (
    <Grid item mobile={12} laptop={4}>
      <Card raised>
        <CardMedia component="img" src={props.img} alt={props.position} />
        <CardContent>
          <Typography variant="h6">{props.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {props.position}
          </Typography>
          <Link href={"mailto:" + props.email}>{props.email}</Link>
          <Typography>Pledge Class: {props.pledgeClass}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default OfficerCard;
