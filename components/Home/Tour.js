import {
  Button,
  Container,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Iframe from "react-iframe";

function Tour() {
  return (
    <>
      <Typography variant="h2" sx={{ margin: "2rem 0rem" }}>
        Take a Tour of the Chapter House!
      </Typography>
      <Iframe
        url="https://my.matterport.com/show/?m=cjA8963SkH1"
        width="100%"
        height="100%"
        frameBorder={0}
        styles={{ height: "600px" }}
      />
    </>
  );
}

export default Tour;
