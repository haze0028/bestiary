import { useState } from "react";
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
  Alert,
  Stack,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SelectField from "./SelectField";
import PostAddIcon from "@mui/icons-material/PostAdd";
import TypeField from "../Fields/TypeField";
import FeatureField from "../Fields/FeatureField";
import FeatureCard from "./FeatureCard";
import NameField from "../Fields/NameField";
import ClearFieldButton from "../Buttons/ClearFieldButton";

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

  function featureCards() {
    return Object.entries(data).map(([key, value]) => {
      if (key !== "name" && key !== "type") {
        if (value.length !== 0) {
          return (
            <FeatureCard
              title={key}
              key={key}
              contents={value}
              handleDeleteAll={handleDeleteAll}
              handleDeleteLine={handleDeleteLine}
            />
          );
        }
      }
      return true;
    });
  }

  function handleSubmitField(field, val) {
    if (field === "type" || field === "name") {
      setData({ ...data, [field]: val });
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
        maxWidth="md"
        onSubmit={handleSubmit}
        sx={{
          "& > .MuiPaper-root": {
            minWidth: 500,
          },
        }}
      >
        <DialogTitle sx={{ pt: 3 }}>
          {data.name ? "New Creature - Details" : "New Creature - Name"}
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ py: 0 }}>
            {!data.name && <NameField handleSubmit={handleSubmitField} />}
            {data.name && (
              <Box sx={{ mb: 2, textAlign: "center" }}>
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
              <Divider sx={{ my: 3 }} />
              <Typography variant="h3">{data.name}</Typography>
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
                  <Typography sx={{ mr: 2 }} fullWidth>
                    Type: {data.type}
                  </Typography>
                  <ClearFieldButton
                    clickHandler={() => setData({ ...data, type: "" })}
                  />
                </Stack>
              )}
              <Box sx={{ columns: 2 }}>{featureCards()}</Box>
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
