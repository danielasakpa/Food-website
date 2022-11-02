import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  navLinks: {
    "& a": {
      textDecoration: "none",
      fontWeight: "900",
      fontSize: "36px",
      letterSpacing: "1px",
      textTransform: "uppercase",
      borderRadius: "3px",
      marginBottom: "5px",
      listStyle: "none",
      "&:hover": {
        color: "#E48C71",
      },
    },
    // ["@media screen and (max-width: 540px)"]: {
    //   display: "none",
    // },
  },
  navLink: {
    textDecoration: "none",
  }
}));
