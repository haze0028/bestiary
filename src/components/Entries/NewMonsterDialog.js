import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Grid,
  Divider,
  Stack,
  IconButton,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SelectField from "./SelectField";
import TypeField from "../Fields/TypeField";
import FeatureField from "../Fields/FeatureField";
import FeatureCards from "./FeatureCard";
import NameField from "../Fields/NameField";
import ClearFieldButton from "../Buttons/ClearFieldButton";
import CloseIcon from "@mui/icons-material/Close";

const INITIAL = {
  name: "",
  // id: undefined,
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

export default function NewMonsterDialog({ open, handleClose }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [helperText, setHelperText] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [data, setData] = useState({
    name: "",
    // id: undefined,
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

  function handleSelectField(field) {
    setSelectedField(field);
  }

  function handleDeleteAll(title) {
    setData({ ...data, [title]: [] });
  }

  function handleDeleteLine(field, val) {
    const tempArr = data[field];
    const newArr = tempArr.filter((item) => item !== val);
    setData({ ...data, [field]: newArr });
  }

  function handleSubmitField(field, val) {
    if (field === "type" || field === "name") {
      setData({ ...data, [field]: val });
      setSelectedField("");
    } else {
      const tempArr = data[field];

      // check if value exists already
      if (tempArr.includes(val)) {
        setHelperText("Already exists");
        return false;
      }
      setHelperText("");
      tempArr.push(val);
      setData({
        ...data,
        [field]: tempArr,
      });
    }
  }

  function dataSubmitted() {
    const arr = Object.entries(data);
    const filterArr = arr.filter(
      (item) => item[0] !== "name" && item[0] !== "type" && item[1].length !== 0
    );
    const filterType = arr.filter(
      (item) => item[0] === "type" && item[1] !== ""
    );

    console.log(filterType);
    // console.log(filterArr.length);
  }

  function handleReset() {
    setData(INITIAL);
    setSelectedField("");
  }

  function handleCancel() {
    handleClose();
    setTimeout(function () {
      handleReset();
    }, 1000);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  // useEffect(() => {
  //   console.log(dataSubmitted());
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
        fullWidth
        maxWidth="sm"
        onSubmit={handleSubmit}
        sx={{
          "& > .MuiPaper-root": {
            minWidth: 500,
          },
        }}
      >
        <DialogTitle sx={{ pt: 3 }}>
          {/* {data.name ? "New Creature - Details" : "New Creature - Name"} */}
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Typography variant="h3" component="h2" sx={{ flex: 1 }}>
              {!data.name ? "Name" : `${data.name} - Details`}
            </Typography>
            <Typography variant="h4" component="h3" sx={{ mr: 2 }}>
              New Creature
            </Typography>
            <IconButton onClick={handleCancel}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ py: 0 }}>
            {!data.name && <NameField handleSubmit={handleSubmitField} />}
            {data.name && (
              <Box sx={{ mb: 2, textAlign: "center" }}>
                <SelectField
                  handleSelectField={handleSelectField}
                  menuItems={fields}
                  selected={selectedField}
                />
              </Box>
            )}

            {selectedField === "type" && (
              <TypeField handleSubmit={handleSubmitField} />
            )}
            {selectedField !== "type" && selectedField && (
              <FeatureField
                handleSubmit={handleSubmitField}
                field={selectedField}
              />
            )}
          </Box>
          {data.name && (
            <>
              {dataSubmitted() === true && <Divider sx={{ my: 3 }} />}
              {data.type && (
                <Stack
                  direction="row"
                  sx={{
                    height: 40,
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                    "& .MuiButtonBase-root": {
                      display: "none",
                    },
                    "&:hover .MuiButtonBase-root": {
                      display: "block",
                    },
                  }}
                >
                  <Typography sx={{ mr: 2, width: "100%" }}>
                    Type: {data.type}
                  </Typography>
                  <ClearFieldButton
                    clickHandler={() => setData({ ...data, type: "" })}
                  />
                </Stack>
              )}
              <Box sx={{ columns: 3 }}>
                <FeatureCards
                  handleDeleteAll={handleDeleteAll}
                  handleDeleteLine={handleDeleteLine}
                  data={data}
                />
              </Box>
            </>
          )}
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
                disabled={!data.name}
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
              <Button
                type="submit"
                variant="contained"
                disabled={!data.name}
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
