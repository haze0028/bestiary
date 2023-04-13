import { useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Popover,
  Typography,
  IconButton,
} from "@mui/material";
import { CREATURE_TYPES } from "../../constants";
import { AddCircleOutline } from "@mui/icons-material";

export default function TypeField({ handleSubmit }) {
  const types = CREATURE_TYPES;
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState("");

  function handleChange(e) {
    setSelected(e.target.value);
  }

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const popopen = Boolean(anchorEl);

  return (
    <Grid container>
      <Grid item sx={{ flex: 1, mr: 1, mt: -2 }} alignItems="center">
        <FormControl
          variant="standard"
          sx={{
            width: "100%",
            "& label.Mui-focused": {
              color: "brown",
            },
            "& .MuiInputBase-root.MuiInput-root::after": {
              borderBottomColor: "brown",
            },
          }}
        >
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            labelId="type-label"
            id="type-select"
            value={selected}
            label="Type"
            onChange={handleChange}
          >
            {types.map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid
        item
        alignItems="center"
        sx={{ display: "flex", alignItems: "flex-end" }}
      >
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
          <Typography sx={{ p: 1 }}>Confirm Type</Typography>
        </Popover>
        <IconButton
          sx={{ width: 40, height: 40 }}
          onClick={() => handleSubmit("type", selected)}
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
