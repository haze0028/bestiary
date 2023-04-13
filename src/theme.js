import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const COLOR_PRIMARY = "rgb(227 125 0)";
const COLOR_SECONDARY = "rgb(136, 81, 35)";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        containedSuccess: {
          background: COLOR_SECONDARY,
          "&:hover": {
            background: COLOR_SECONDARY,
            filter: "brightness(85%)",
          },
        },
        outlinedSuccess: {
          borderColor: COLOR_SECONDARY,
          color: COLOR_SECONDARY,
          "&:hover": {
            borderColor: COLOR_SECONDARY,
            color: COLOR_SECONDARY,
            filter: "brightness(85%)",
          },
        },
        containedPrimary: {
          background: COLOR_PRIMARY,
          "&:hover": {
            background: COLOR_PRIMARY,
            filter: "brightness(85%)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: COLOR_SECONDARY,
          },
          "& .MuiInputBase-colorPrimary.MuiInput-root::after": {
            borderColor: COLOR_SECONDARY,
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: COLOR_SECONDARY,
          },
          "& .MuiInputBase-colorPrimary.MuiInput-root::after": {
            borderColor: COLOR_SECONDARY,
          },
        },
      },
    },
  },
});

export default theme;
