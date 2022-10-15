import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  footerLink: {
    "& a": {
      color: "black",
      "&:hover": {
        color: "#E48C71",
      },
    },
  },
  footerImg: {
    objectFit: "cover",
    border: "2px solid black",
    maxWidth: "200px",
    cursor: "pointer",
    maxHeight: "200px",
    display: "block",
    margin: "0 auto",
    height: "150px",
    width: "150px",
    "&:hover": {
      animation: "$scale-up-center 0.1s both",
    },
  },
  "@keyframes scale-up-center": {
    "0%": { transform: "scale(1)" },
    "100%": { transform: "scale(1.2)" },
  },
  backToTop: {
    border: "2px solid black",
    borderRadius: "50%",
    padding: "8px",
    color: "black",
    textDecoration: "none",
    backgroundColor: "white",
  },
}));
