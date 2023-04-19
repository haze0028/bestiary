import { useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { CREATURE_TYPES } from "../../constants";
import { AddCircleOutline } from "@mui/icons-material";
import ClearFieldButton from "../Buttons/ClearFieldButton";

export default function TypeField({ handleSubmit, handleClearType }) {
  const types = CREATURE_TYPES;
  const [selected, setSelected] = useState("Unknown");
  const [error, setError] = useState(false);

  function handleChange(e) {
    setSelected(e.target.value);
    setError(false);
  }

  function handleClear() {
    handleClearType();
    setSelected("");
  }

  function handleSubmitField() {
    if (!selected) {
      setError(true);
      return false;
    }
    handleSubmit("type", selected);
  }

  return (
    <Grid container sx={{ my: 1 }}>
      <Grid item sx={{ flex: 1, mr: 1, mt: -2 }} alignItems="center">
        <FormControl
          variant="standard"
          sx={{
            width: "100%",
          }}
        >
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            labelId="type-label"
            id="type-select"
            value={selected}
            label="Type"
            error={error}
            onChange={handleChange}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSubmitField(e);
              }
            }}
          >
            {types.map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{error && "Please select a type"}</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item alignItems="center" sx={{ display: "flex" }}>
        <ClearFieldButton clickHandler={handleClear} />
        <Tooltip title="Confirm" arrow>
          <IconButton
            sx={{ width: 40, height: 40, ml: 1 }}
            onClick={() => handleSubmitField("type", selected)}
          >
            <AddCircleOutline />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
