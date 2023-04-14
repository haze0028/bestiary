import { createTheme, alpha } from "@mui/material/styles";

const COLOR_PRIMARY = "rgb(227, 125, 0)";
const COLOR_SECONDARY = "rgb(136, 81, 35)";
const COLOR_GREY = "rgb(184, 184, 184)";
const COLOR_WHITE = "rgb(245, 245, 245)";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "norse",
    },
    h2: {
      fontFamily: "norse",
    },
    h3: {
      fontFamily: "norse",
    },
    h4: {
      fontFamily: "norse",
    },
    h5: {
      fontFamily: "norse",
    },
    h6: {
      fontFamily: "norse",
    },
  },
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

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  // import non-palette changes from theme
  typography: theme.typography,
  components: {
    ...theme.components,
    MuiButton: {
      styleOverrides: {
        root: {
          color: COLOR_PRIMARY,
          "&:hover": {
            backgroundColor: alpha(COLOR_PRIMARY, 0.1),
          },
        },
        outlinedWarning: {
          borderColor: COLOR_GREY,
          color: COLOR_GREY,
          "&:hover": {
            borderColor: COLOR_GREY,
            color: COLOR_GREY,
            backgroundColor: alpha(COLOR_GREY, 0.1),
          },
        },
        containedPrimary: {
          background: COLOR_PRIMARY,
          color: COLOR_WHITE,
          "&:hover": {
            background: COLOR_PRIMARY,
            filter: "brightness(85%)",
          },
        },
        containedSecondary: {
          background: COLOR_SECONDARY,
          color: COLOR_WHITE,
          "&:hover": {
            background: COLOR_SECONDARY,
            filter: "brightness(85%)",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: COLOR_PRIMARY,
          },
          "& .MuiInputBase-colorPrimary.MuiInput-root::after": {
            borderColor: COLOR_PRIMARY,
          },
          "& .MuiInputBase-root.Mui-focused fieldset": {
            borderColor: COLOR_PRIMARY,
          },
        },
      },
    },
  },
});

export { theme, darkTheme };
