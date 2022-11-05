import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  navLinks: {
      color: "#ffffff",
      textDecoration: "none",
      fontWeight: "900",
      fontSize: "36px",
      letterSpacing: "1px",
      textTransform: "uppercase",
      borderRadius: "3px",
      marginBottom: "5px",
      listStyle: "none",
      transition:{
        duration: 300,
        easing: {
          easeInOut: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
        }
      },
      "&:hover": {
        // color: "#F6F6C9",
        animation:
          "$anim2 500ms cubic-bezier(0.175, 0.885, 0.32, 0.275) infinite;",
      },
    },
  "@keyframes anim2": {
    "0%": {
      opacity: 1,
      transform: "translateY(px)",
    },
    "25%": {
      opacity: 0,
      transform: "translateY(-10px)",
    },
    "50%": {
      opacity: 1,
      transform: "translateY(0px)",
    },
    "75%": {
      opacity: 0,
      transform: "translateY(10px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0px)",
    },
  },
  navLink: {
    textDecoration: "none",
  },
}));
