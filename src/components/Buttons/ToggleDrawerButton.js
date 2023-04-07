import clsx from "clsx";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Root = styled(Button)(({ theme }) => ({
  "&.drawerToggleBtn": {
    position: "absolute",
    bottom: `calc(50% - 13px)`,
    left: `calc(50% - 200px)`,
    transition: "500ms ease-out",
    "&.shifted": {
      bottom: theme.spacing(3),
      left: theme.spacing(3),
    },
  },
}));

export function ToggleDrawerButton({ handleClick, drawer, shift }) {
  return (
    <Root
      onClick={() => handleClick("drawer")}
      variant="contained"
      color="success"
      startIcon={drawer ? <ChevronLeft /> : <ChevronRight />}
      className={clsx("drawerToggleBtn", {
        shifted: shift,
      })}
    >
      {!drawer ? "View Bestiary List" : "Close Bestiary List"}
    </Root>
  );
}
