import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

function OfficerInfo(props) {
  return (
    <Grid item mobile={12} laptop={4}>
      <Card raised>
        <CardMedia
          component="img"
          src={props.img}
          alt={props.position}
        />
        <CardContent>
          <Typography variant="h6">{props.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {props.position}
          </Typography>
          <Typography>{props.email}</Typography>
          <Typography>Year Joined KA: {props.yearJoined}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default OfficerInfo;
