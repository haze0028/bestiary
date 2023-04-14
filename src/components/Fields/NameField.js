import { useRef, useState } from "react";
import { TextField, Grid, IconButton, Tooltip } from "@mui/material";
import ClearFieldButton from "../Buttons/ClearFieldButton";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function NameField({ handleSubmit, handleReset }) {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

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
      <Grid item alignItems="center" sx={{ display: "flex", ml: 1 }}>
        <ClearFieldButton clickHandler={handleClearName} />
        <Tooltip title="Confirm Name" arrow>
          <IconButton sx={{ width: 40, height: 40 }} onClick={handleSubmitName}>
            <ArrowCircleRightIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
