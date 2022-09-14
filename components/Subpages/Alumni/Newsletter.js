import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import theme from "../../../utils/theme.js";

function Newsletter(props) {
  return (
    <Card raised sx={{backgroundColor: "primary.main"}}>
      <CardActionArea
        href={props.link}
        sx={{
          transition: theme.transitions.create(
            ["opacity", "color"],
            {
              duration: theme.transitions.duration.twoHundredMS,
            }
          ),

          "&:hover": {
            opacity: 0.9,
            color: "primary.main"
          },
        }}
      >
        <CardMedia component="img" src={props.imageSrc} alt={props.altText} />
        <CardContent sx={{ backgroundColor: "white.main" }}>
          <Typography variant="h6" >{props.volumeName}</Typography>
          <Typography variant="body2" color="text.secondary">
            {props.volumeSubText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Newsletter;
