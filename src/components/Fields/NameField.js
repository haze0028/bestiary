import { useRef, useState } from "react";
import {
  TextField,
  Typography,
  Grid,
  IconButton,
  Popover,
} from "@mui/material";
import ClearFieldButton from "../Buttons/ClearFieldButton";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function NameField({ handleSubmit, handleReset }) {
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const popopen = Boolean(anchorEl);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleClearName() {
    setName("");
    inputRef.current.focus();
  }

  function handleSubmitName() {
    handleSubmit("name", name);
    setName("");
    // TO DO: Test if name already exists
  }

  return (
    <Grid container>
      <Grid item sx={{ flex: 1, my: 2 }} alignItems="center">
        <TextField
          id="monsterName"
          inputRef={inputRef}
          label="Name"
          placeholder="Blue Eyes Lubed Dragon"
          variant="standard"
          value={name}
          sx={{
            mt: -2,
          }}
          fullWidth
          onChange={handleChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSubmitName();
            }
          }}
          // error={true}
          // helperText={data.name && "That name already exists"}
        />
      </Grid>
      <Grid item alignItems="center" sx={{ display: "flex" }}>
        <ClearFieldButton clickHandler={handleClearName} />
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
        >
          <Typography sx={{ p: 1 }}>Submit Name</Typography>
        </Popover>
        <IconButton
          sx={{ width: 40, height: 40 }}
          onClick={handleSubmitName}
          aria-owns={popopen ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <ArrowCircleRightIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
