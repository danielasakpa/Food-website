import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  orderBtn: {
    color: "#ffffff",
    textDecoration: "none",
    "&:hover": {
      color: "#000000",
    },
  },
  slideLeft: {
    animation: "$slide-left 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
  },
  "@keyframes slide-left": {
    "0%": {
      transform: " translateX(100px)",
    },
    "100%": {
      transform: "translateX(-1px)",
    },
  },
  slidRight: {
    animation:
      "$slide-right 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
  },
  "@keyframes slide-right": {
    "0%": {
      transform: "translateX(-100px)",
    },
    "100%": {
      transform: "translateX(1px)",
    },
  },
}));
