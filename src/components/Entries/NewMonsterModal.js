import { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Modal,
  Typography,
  Grid,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { CREATURE_TYPES } from "../../constants";
import SelectField from "./SelectField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// const INITIAL = {
//   name: "",
//   id: undefined,
//   type: "",
//   vulnerabilities: [],
//   resistances: [],
//   immunities: [],
//   traits: [],
//   proficiencies: [],
//   bait: [],
//   quirks: [],
//   behaviours: [],
//   abilities: [],
// };

export default function NewMonsterModal({ open, handleClose }) {
  const types = CREATURE_TYPES;
  const [data, setData] = useState({
    // name: "Creature name",
    name: "",
    id: undefined,
    type: "",
    vulnerabilities: [],
    resistances: [],
    immunities: [],
    traits: [],
    proficiencies: [],
    bait: [],
    quirks: [],
    behaviours: [],
    abilities: [],
  });

  const [fields, setFields] = useState({
    type: false,
    vulnerabilities: false,
    resistances: false,
    immunities: false,
    traits: false,
    proficiencies: false,
    bait: false,
    quirks: false,
    behaviours: false,
    abilities: false,
  });

  function handleSelectField(field) {
    setFields({ ...fields, [field]: true });
  }

  function handleChange(e, field) {
    setData({ ...data, [field]: e.target.value });
  }

  function focusNameField() {
    if (data.name === "Creature name") {
      setData({ ...data, name: "" });
    }
  }

  useEffect(() => {
    setTimeout(function () {
      // document.querySelector("#monsterName").focus();
    }, 100);
  }, []);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="form" sx={style} noValidate autoComplete="off">
        <TextField
          id="monsterName"
          label="Name"
          value={data.name}
          placeholder="Creature name"
          onChange={(e) => handleChange(e, "name")}
          onFocus={focusNameField}
          variant="standard"
        />
        <Divider sx={{ my: 1 }} />
        <Grid container>
          {fields.type && (
            <FormControl
              variant="standard"
              sx={{
                width: "70%",
                mb: 2,
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
                value={data.type}
                label="Type"
                onChange={(e) => handleChange(e, "type")}
              >
                {types.map((item) => (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          <SelectField
            handleSelectField={handleSelectField}
            menuItems={fields}
          />
        </Grid>

        <Grid container>
          {fields.vulnerabilities && <TextField label="Vulnerabilities" />}
          {fields.resistances && <TextField label="Resistances" />}
          {fields.immunities && <TextField label="Immunities" />}
          {fields.traits && <TextField label="Traits" />}
          {fields.proficiencies && <TextField label="Proficiencies" />}
          {fields.bait && <TextField label="Bait" />}
          {fields.quirks && <TextField label="Quirks" />}
          {fields.behaviours && <TextField label="Behaviours" />}
          {fields.abilities && <TextField label="Abilities" />}
        </Grid>
        <Grid container>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose} type="submit">
            Save
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
}
