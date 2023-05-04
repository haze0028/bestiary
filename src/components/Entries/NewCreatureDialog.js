import { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
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
  Alert,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { darkTheme } from "../../theme";
import TypeField from "../Fields/TypeField";
import FeatureField from "../Fields/FeatureField";
import FeatureCards from "./FeatureCard";
import ClearFieldButton from "../Buttons/ClearFieldButton";
import SelectFieldMenu from "./SelectField";

const INITIAL = {
  name: "",
  id: 0,
  type: "",
  vulnerabilities: [],
  resistances: [],
  immunities: [],
  senses: [],
  proficiencies: [],
  bait: [],
  quirks: [],
  behaviours: [],
  abilities: [],
};

export default function NewCreatureDialog({
  open,
  handleClose,
  handleSubmitEntry,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedField, setSelectedField] = useState("");
  const [columns, setColumns] = useState(2);
  const [dataSubmitted, setDataSubmitted] = useState(false);
  const [data, setData] = useState({
    name: "",
    // id: undefined,
    type: "",
    vulnerabilities: [],
    resistances: [],
    immunities: [],
    senses: [],
    proficiencies: [],
    bait: [],
    quirks: [],
    behaviours: [],
    abilities: [],
  });

  const fields = [
    "type",
    "vulnerabilities", // player-pain
    "resistances", // shield
    "immunities", // heavy-shield
    "senses", // eyeball
    // Senses: darkvision, blindsight
    "proficiencies", // muscle-up
    "bait", // meat
    "quirks", // biohazard
    // Homebrew: damaged only after being hit by lightning
    "behaviours", // leo
    // Tries to swarm oponents and assist each other
    "abilities", //player-dodge
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
    const numb = Math.floor(Math.random() * 9999);
    console.log(numb);
    // Update the string fields
    if (field === "name" || field === "type") {
      setData({ ...data, [field]: val });
      setSelectedField("");
    } else {
      // Update the array fields
      const tempArr = data[field];

      // check if value already exists in array
      if (tempArr.includes(val)) {
        return false;
      }

      // Update temporary array
      tempArr.push(val);

      // Replace data in Field with temporary array
      setData({
        ...data,
        [field]: tempArr,
      });
    }
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
    handleClose();
    handleReset();

    handleSubmitEntry(data);
  }

  const checkDataSubmitted = useCallback(() => {
    const arr = Object.entries(data);
    const filterArr = arr.filter(
      (item) => item[0] !== "name" && item[1].length !== 0
    );

    const filterType = arr.filter(
      (item) => Array.isArray(item[1]) && item[1].length > 0
    );

    setColumns(filterType.length >= 3 ? 3 : 2);

    filterArr.length > 0 ? setDataSubmitted(true) : setDataSubmitted(false);
  }, [data]);

  useEffect(() => {
    checkDataSubmitted();
  }, [checkDataSubmitted, data]);

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
        maxWidth={columns === 3 ? "md" : "sm"}
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
              {!data.name ? "Name it" : `${data.name}`}
            </Typography>
            <Typography variant="h4" component="h3">
              New Creature
            </Typography>
          </Stack>
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ py: 0 }}>
            {!data.name && (
              <FeatureField handleSubmit={handleSubmitField} field="name" />
            )}
            {data.name && !selectedField && (
              <Alert severity="success">
                Want to add more infomation? Click "Add Details" below
              </Alert>
            )}

            {selectedField === "type" && (
              <TypeField
                handleSubmit={handleSubmitField}
                handleClearType={() => setSelectedField("")}
              />
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
              {dataSubmitted && <Divider sx={{ my: 3 }} />}
              {data.type && (
                <Stack
                  direction="row"
                  sx={{
                    height: 40,
                    width: "100%",
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
                  <Typography sx={{ mr: 2 }}>Type: {data.type}</Typography>
                  <ClearFieldButton
                    clickHandler={() => setData({ ...data, type: "" })}
                  />
                </Stack>
              )}
              <Box sx={{ columns: columns }}>
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
                color="warning"
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
              {data.name && (
                <SelectFieldMenu
                  handleSelectField={handleSelectField}
                  menuItems={fields}
                  selected={selectedField}
                />
              )}
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
