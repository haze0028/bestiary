import { useRef, useState } from "react";
import { Grid, TextField, Tooltip, IconButton } from "@mui/material";
import ClearFieldButton from "../Buttons/ClearFieldButton";
import { AddCircleOutline } from "@mui/icons-material";

export default function FeatureField({ handleSubmit, helperText, field }) {
  const [text, setText] = useState("");
  const title = field.charAt(0).toUpperCase() + field.slice(1);
  const inputRef = useRef(null);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClearField() {
    setText("");
  }

  function handleSubmitField(e) {
    if (!text.trim()) {
      return false;
    }
    handleSubmit(field, text);
    setText("");
    inputRef.current.focus();
  }

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
        <Tooltip title="Add" arrow>
          <IconButton
            sx={{ width: 40, height: 40 }}
            onClick={handleSubmitField}
          >
            <AddCircleOutline />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
