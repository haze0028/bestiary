import { useRef, useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Popover,
  Typography,
  IconButton,
} from "@mui/material";
import ClearFieldButton from "../Buttons/ClearFieldButton";
import { AddCircleOutline } from "@mui/icons-material";

export default function FeatureField({ handleSubmit, helperText, field }) {
  const [text, setText] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const title = field.charAt(0).toUpperCase() + field.slice(1);
  const inputRef = useRef(null);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClearField() {
    setText("");
  }

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  function handleSubmitField(e) {
    if (!text.trim()) {
      return false;
    }
    handleSubmit(field, text);
    setText("");
    inputRef.current.focus();
  }

  const popopen = Boolean(anchorEl);

  // useEffect(() => {
  //   setTimeout(function () {
  //     inputRef.current.focus();
  //   }, 100);
  // });

  return (
    <Grid container>
      <Grid item sx={{ flex: 1, display: "flex" }} alignItems="center">
        <TextField
          id={`${field}-input`}
          inputRef={inputRef}
          label={title}
          value={text}
          onChange={handleChange}
          fullWidth
          helperText={helperText}
          size="small"
          multiline
          sx={{ mr: 1 }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmitField(e);
            }
          }}
          // error={true}
          // helperText={data.name && "That name already exists"}
        />
        <ClearFieldButton clickHandler={handleClearField} />
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
          <Typography sx={{ p: 1 }}>Add</Typography>
        </Popover>
        <IconButton
          sx={{ width: 40, height: 40 }}
          onClick={handleSubmitField}
          aria-owns={popopen ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <AddCircleOutline />
        </IconButton>
      </Grid>
    </Grid>
  );
}
