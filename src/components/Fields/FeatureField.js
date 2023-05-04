import { useEffect, useRef, useState } from "react";
import { styled } from "@mui/system";
import {
  Tooltip,
  IconButton,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  FormHelperText,
  Stack,
  Typography,
} from "@mui/material";
import ClearFieldButton from "../Buttons/ClearFieldButton";
import { AddCircleOutline } from "@mui/icons-material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Root = styled("div")(({ theme }) => ({
  "& .fieldButtons .MuiIconButton-root": {
    border: "1px solid white",
    "& .ra:before": {
      lineHeight: "normal",
      fontSize: "25px",
    },
  },
}));

export default function FeatureField({ handleSubmit, field }) {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const title = field.charAt(0).toUpperCase() + field.slice(1);
  const inputRef = useRef(null);

  function handleChange(e) {
    setText(e.target.value);
    if (e.target.value.trim()) {
      setError(false);
    }
  }

  function handleClearField() {
    setText("");
  }

  function handleSubmitField(e) {
    if (!text.trim()) {
      setError(true);
      return false;
    }
    handleSubmit(field, text);
    setText("");

    if (field !== "name") {
      inputRef.current.focus();
    }
  }

  useEffect(() => {
    setText("");
    inputRef.current.focus();
  }, [field]);

  return (
    <Root>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor={`${field}-input`}>{title}</InputLabel>
        <OutlinedInput
          id={`${field}-input`}
          type="text"
          label={title}
          value={text}
          error={error}
          onChange={handleChange}
          placeholder={
            field === "name"
              ? "Blue eyes lubed dragon"
              : `${field} placeholder example`
          }
          sx={{ pr: 1 }}
          inputRef={inputRef}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmitField(e);
            }
          }}
          endAdornment={
            <>
              <ClearFieldButton clickHandler={handleClearField} />
              <InputAdornment position="end">
                {field === "name" ? (
                  <Tooltip title="Confirm name" arrow>
                    <IconButton
                      aria-label={`Confirm name`}
                      onClick={handleSubmitField}
                      onMouseDown={handleSubmitField}
                    >
                      <ArrowCircleRightIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="Add" arrow>
                    <IconButton
                      aria-label={`Add ${field} detail`}
                      onClick={handleSubmitField}
                    >
                      <AddCircleOutline />
                    </IconButton>
                  </Tooltip>
                )}
              </InputAdornment>
            </>
          }
        />
        <FormHelperText id={`${field}-input-helper-text`}>
          {error && "Please enter some text before submitting"}
        </FormHelperText>
      </FormControl>
      <Typography variant="h4" sx={{ mt: 2, mb: 1 }} textAlign="center">
        Add to...
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        className="fieldButtons"
      >
        <Tooltip title="Vulnerabilities" arrow placement="top">
          <IconButton>
            <i className="ra ra-player-pain"></i>
          </IconButton>
        </Tooltip>
        <Tooltip title="Resistances" arrow placement="top">
          <IconButton>
            <i className="ra ra-shield"></i>
          </IconButton>
        </Tooltip>
        <Tooltip title="Immunities" arrow placement="top">
          <IconButton>
            <i className="ra ra-heavy-shield"></i>
          </IconButton>
        </Tooltip>
        <Tooltip title="Senses" arrow placement="top">
          <IconButton>
            <i className="ra ra-eyeball"></i>
          </IconButton>
        </Tooltip>
        <Tooltip title="Proficiencies" arrow placement="top">
          <IconButton>
            <i className="ra ra-muscle-up"></i>
          </IconButton>
        </Tooltip>
        <Tooltip title="Bait" arrow placement="top">
          <IconButton>
            <i className="ra ra-meat"></i>
          </IconButton>
        </Tooltip>
        <Tooltip title="Quicks" arrow placement="top">
          <IconButton>
            <i className="ra ra-biohazard"></i>
          </IconButton>
        </Tooltip>
        <Tooltip title="Behaviours" arrow placement="top">
          <IconButton>
            <i className="ra ra-leo"></i>
          </IconButton>
        </Tooltip>
        <Tooltip title="Abilities" arrow placement="top">
          <IconButton>
            <i className="ra ra-player-dodge"></i>
          </IconButton>
        </Tooltip>
      </Stack>
    </Root>
  );
}
