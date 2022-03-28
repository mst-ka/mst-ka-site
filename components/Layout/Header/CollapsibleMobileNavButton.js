import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
  Divider,
  Typography,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";

function CollapsibleMobileNavButton(props) {
  const [collapse, setCollapse] = useState(false);

  const handleDropdown = () => {
    setCollapse(!collapse);
  };

  return (
    <div>
      <ListItemButton onClick={handleDropdown}>
        <ListItemIcon sx={{ color: "secondary.main" }}>
          {props.icon}
        </ListItemIcon>
        <ListItemText primary={props.title} primaryTypographyProps={{paddingRight: "8rem", fontWeight: 700, }} />
        {collapse ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider />
      <Collapse in={collapse} timeout="auto" unmountOnExit>
        <List component="div" sx={{ color: "primary.main" }}>
          {props.subPages.map((page, index) => (
            <div key={index}>
              <ListItemButton
                component={Link}
                href={page.link}
                sx={{ paddingLeft: "3rem" }}
              >
                <ListItemText primary={page.title} primaryTypographyProps={{fontWeight: 700, maxWidth: "12rem" }}/> 
              </ListItemButton>
              <Divider />
            </div>
          ))}
        </List>
      </Collapse>
    </div>
  );
}

export default CollapsibleMobileNavButton;
