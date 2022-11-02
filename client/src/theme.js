import { createTheme  } from "@mui/material/styles";
// import { pink } from "@material-ui/core/colors";
const theme = createTheme ({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: "#5c67a3",
      main: "#3f51b5",
      dark: "#2e355b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff79b0",
      main: "#ff4081",
      dark: "#000000",
      contrastText: "#000",
    },
    black: {
      main: "#000000",
      contrastText: "#ffffff",
    },
    openTitle: "#3f4771",
    type: "light",
  },
});
export default theme;
