import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  TextField,
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
  Grid,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Popover,
  Alert,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { CREATURE_TYPES } from "../../constants";
import SelectField from "./SelectField";
import ClearFieldButton from "../Buttons/ClearFieldButton";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import PostAddIcon from "@mui/icons-material/PostAdd";

const INITIAL = {
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
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function NewMonsterModal({ open, handleClose }) {
  const types = CREATURE_TYPES;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [data, setData] = useState({
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
  const [lockedData, setLockedData] = useState({
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

  const [selectedField, setSelectedField] = useState("");
  const fields = [
    "type",
    "vulnerabilities",
    "resistances",
    "immunities",
    "traits",
    "proficiencies",
    "bait",
    "quirks",
    "behaviours",
    "abilities",
  ];

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const popopen = Boolean(anchorEl);

  function handleSelectField(field) {
    setSelectedField(field);
    // setFields((prevState) => {
    //   const nextState = {};
    //   Object.keys(prevState).forEach((key) => {
    //     if (key === field) {
    //       nextState[key] = true;
    //     } else {
    //       nextState[key] = false;
    //     }
    //   });
    //   return nextState;
    // });
  }

  function handleChange(e, field) {
    setData({ ...data, [field]: e.target.value });
  }

  function handleClearField(val) {
    if (val === "name" || val === "type") {
      setData({ ...data, [val]: "" });
    } else {
      setData({ ...data, [val]: [] });
    }
  }

  function handleSubmitName() {
    if (!data.name.trim() || data.name === undefined) {
      return false;
    }
    setLockedData({ ...lockedData, name: data.name });

    // TO DO: Test if name already exists
  }

  function handleReset() {
    setLockedData(INITIAL);
    setData(INITIAL);
    setAnchorEl(null);
    setSelectedField("");
    // setFields((prevState) => {
    //   const nextState = {};
    //   Object.keys(prevState).forEach((key) => {
    //     nextState[key] = false;
    //   });
    //   return nextState;
    // });
  }

  function handleCancel() {
    handleClose();
    setTimeout(function () {
      handleReset();
    }, 1000);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("test");
  }

  // useEffect(() => {
  //   console.clear();
  //   console.log("loaded");
  // }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Dialog
        open={open}
        id="newEntryForm"
        onClose={handleClose}
        component="form"
        fullScreen={fullScreen}
        onSubmit={handleSubmit}
        sx={{
          "& .MuiPaper-root": {
            minWidth: 500,
          },
        }}
      >
        <DialogTitle sx={{ pt: 3 }}>
          {lockedData.name
            ? `Name: ${lockedData.name}`
            : `Let's start with a name`}
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ py: 0 }}>
            {!lockedData.name && (
              <>
                <Grid container>
                  <Grid item sx={{ flex: 1, my: 2 }} alignItems="center">
                    <TextField
                      id="monsterName"
                      label="Name"
                      value={data.name}
                      placeholder="Blue Eyes Lubed Dragon"
                      onChange={(e) => handleChange(e, "name")}
                      variant="standard"
                      sx={{
                        mt: -2,
                      }}
                      fullWidth
                      // error={true}
                      // helperText={data.name && "That name already exists"}
                    />
                  </Grid>
                  <Grid item alignItems="center" sx={{ display: "flex" }}>
                    <ClearFieldButton
                      clickHandler={() => handleClearField("name")}
                    />
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
              </>
            )}
            {lockedData.name && (
              <Box sx={{ mb: 2 }}>
                <Alert
                  severity="warning"
                  sx={{
                    "&.MuiAlert-root.MuiAlert-standardWarning": {
                      minWidth: "unset",
                    },
                    mb: 2,
                  }}
                  icon={<PostAddIcon />}
                >
                  Want to add some extra details?
                </Alert>
                <SelectField
                  handleSelectField={handleSelectField}
                  menuItems={fields}
                />
              </Box>
            )}
            {selectedField === "type" && (
              <FormControl
                variant="standard"
                sx={{
                  mb: 2,
                  "& label.Mui-focused": {
                    color: "brown",
                  },
                  "& .MuiInputBase-root.MuiInput-root::after": {
                    borderBottomColor: "brown",
                  },
                }}
                fullWidth
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
            {selectedField === "vulnerabilities" && (
              <TextField label="Vulnerabilities" fullWidth />
            )}
            {selectedField === "resistances" && (
              <TextField label="Resistances" />
            )}
            {selectedField === "immunities" && <TextField label="Immunities" />}
            {selectedField === "traits" && <TextField label="Traits" />}
            {selectedField === "proficiencies" && (
              <TextField label="Proficiencies" />
            )}
            {selectedField === "bait" && <TextField label="Bait" />}
            {selectedField === "quirks" && <TextField label="Quirks" />}
            {selectedField === "behaviours" && <TextField label="Behaviours" />}
            {selectedField === "abilities" && <TextField label="Abilities" />}
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3 }}>
          <Grid container justifyContent="space-between">
            <Grid item xs={6}>
              <Button
                onClick={handleCancel}
                type="button"
                variant="outlined"
                sx={{ mr: 1 }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleReset}
                type="button"
                variant="text"
                disabled={!lockedData.name}
              >
                Reset
              </Button>
            </Grid>
            <Grid
              item
              xs={6}
              justifyContent="flex-end"
              sx={{ display: "flex" }}
            >
              {/* <Button
                variant="contained"
                color="success"
                sx={{ mr: 1 }}
                disabled={!data.name}
                onClick={handleNext}
              >
                Next
              </Button> */}
              <Button
                type="submit"
                variant="contained"
                disabled={!lockedData.name}
                form="newEntryForm"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
