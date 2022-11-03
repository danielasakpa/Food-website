import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  UserNavLogo: {
    textDecoration: "none",
    color: "#ffffff",
  },
  UserNavLink: {
    textDecoration: "none",
    color: "#ffffff",
    ["@media screen and (max-width: 540px)"]: {
      color: "#000000",
    },
  },
}));
