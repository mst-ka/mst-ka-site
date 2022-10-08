import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
  Divider,
  Typography,
} from "@mui/material";

function MobileNavButton(props) {
  return (
    <div>
      <ListItemButton component={Link} href={props.link}>
        <ListItemIcon sx={{ color: "secondary.main" }}>{props.icon}</ListItemIcon>
        <ListItemText primary={props.title} primaryTypographyProps={{fontWeight: 700, }} />
      </ListItemButton>
      <Divider />
    </div>
  );
}

export default MobileNavButton;
