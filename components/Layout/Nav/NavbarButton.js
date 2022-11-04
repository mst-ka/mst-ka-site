import { Link, Typography, Box, MenuItem } from "@mui/material";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import theme from "../../../utils/theme.js";

function NavbarButton(props) {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "subpageMenu",
  });

  return (
    <Link href={props.link} underline="none">
      <Box
        sx={{
          color: "grey.main",
          height: "78px",
          width: "auto",
          padding: "1rem",
          alignItems: "center",
          justifyContent: "center",
          display: { mobile: "none", laptop: "flex" },

          transition: theme.transitions.create(
            ["color", "background-color", "border-bottom"],
            {
              duration: theme.transitions.duration.oneHundredMS,
            }
          ),

          "&:hover": {
            color: "secondary.main",
            backgroundColor: "#eeeeee",
            borderBottom: ".25rem solid",
          },
        }}
        {...bindHover(popupState)}
      >
        <Typography variant="button" sx={{ fontWeight: 700 }}>
          {props.title}
        </Typography>
      </Box>
      {props.subpages.length === 0 ? null : (
        <HoverMenu
          {...bindMenu(popupState)}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          {props.subpages.map((page, index) => (
            <MenuItem
              key={index}
              onClick={popupState.close}
              component="a"
              href={page.link}
              sx={{
                "&:hover": {
                  color: "secondary.main",
                  backgroundColor: "#eeeeee",
                },
              }}
            >
              {page.title}
            </MenuItem>
          ))}
        </HoverMenu>
      )}
    </Link>
  );
}

export default NavbarButton;
