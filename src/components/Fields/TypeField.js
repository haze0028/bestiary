import { useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  IconButton,
} from "@mui/material";
import { CREATURE_TYPES } from "../../constants";
import { AddCircleOutline } from "@mui/icons-material";

export default function TypeField({ handleSubmit }) {
  const types = CREATURE_TYPES;
  const [selected, setSelected] = useState("");

  function handleChange(e) {
    setSelected(e.target.value);
  }

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
        <Tooltip title="Confirm" arrow>
          <IconButton
            sx={{ width: 40, height: 40 }}
            onClick={() => handleSubmit("type", selected)}
          >
            <AddCircleOutline />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
