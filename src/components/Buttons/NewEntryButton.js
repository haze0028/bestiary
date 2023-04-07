import clsx from "clsx";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

const Root = styled(Button)(({ theme }) => ({
  "&.newEntryBtn": {
    position: "absolute",
    bottom: `calc(50% - 13px)`,
    right: `calc(50% - 200px)`,
    transition: "500ms ease-out",
    "&.shifted": {
      bottom: theme.spacing(3),
      right: theme.spacing(3),
    },
  },
}));

export default function NewEntryButton({ handleClick, shift }) {
  return (
    <Root
      variant="contained"
      startIcon={<Add />}
      onClick={handleClick}
      className={clsx("newEntryBtn", {
        shifted: shift,
      })}
    >
      New Entry
    </Root>
  );
}
