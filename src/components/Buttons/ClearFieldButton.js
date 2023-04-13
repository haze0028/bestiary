import { useState } from "react";
import { Typography, IconButton, Popover } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ClearFieldButton({ clickHandler }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const popopen = Boolean(anchorEl);

  return (
    <>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={popopen}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        disableAutoFocus={true}
        disableEnforceFocus={true}
      >
        <Typography sx={{ p: 1 }}>Clear</Typography>
      </Popover>
      <IconButton
        sx={{ width: 40, height: 40 }}
        onClick={clickHandler}
        aria-owns={popopen ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <CloseIcon />
      </IconButton>
    </>
  );
}
