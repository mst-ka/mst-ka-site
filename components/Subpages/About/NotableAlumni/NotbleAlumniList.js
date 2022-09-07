import { List, ListItem } from "@mui/material";

function NotableAlumniList(props) {
  return (
    <List
      dense
      sx={{
        listStyleType: "disc",
        paddingLeft: "2rem",
        "& .MuiListItem-root": {
          display: "list-item",
        },
      }}
    >
      {props.alumni.map((alumni, index) => (
        <ListItem key={index} sx={{ display: "list-item" }}>
          {alumni}
        </ListItem>
      ))}
    </List>
  );
}

export default NotableAlumniList;
