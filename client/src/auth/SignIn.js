import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import ErrorIcon from "@mui/icons-material/Error";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Backdrop from "@mui/material/Backdrop"
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignupImg from "../Assets/images/signup.jpg";
import auth from "./auth-helper";
import { Redirect } from "react-router-dom";
import { signin } from "./api-auth.js";
import { Link } from "react-router-dom";
import Loader from "../core/Loader";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <a color="inherit" href="https://mui.com/">
        Jesus Embassy
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: {
            variant: "contained",
          },
          style: {
            fontWeight: "400",
            backgroundColor: "#000000",
            boxShadow: "none",
            color: "#ffffff",
            marginTop: "35px",
            border: "2px solid black",
            "&:hover": {
              backgroundColor: "#faf0e6",
              color: "#000000",
            },
          },
        },
      ],
    },
  },
});

const SignIn = (props) => {
  const jwt = auth.isAuthenticated();
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    redirectToReferrer: false,
    isLoading: false
  });
  const [userId, setUserID] = useState("");

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const clickSubmit = () => {
    setValues({isLoading: true});
    const user = {
      email: values.email || undefined,
      password: values.password || undefined,
    };

    signin(user).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error, isLoading: false });
      } else {
        setUserID(data.user._id);
        sessionStorage.setItem("user", JSON.stringify(user))
        auth.authenticate(data, () => {
          setValues({ ...values, error: "", redirectToReferrer: true, isLoading: false });
        });
      }
    });
  };

  const { from } = (props.location && props.location.state) || {
    from: {
      pathname: `/user/${userId}`,
    },
  };
  const { redirectToReferrer } = values;

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  if (jwt.token) {
    return <Redirect to="/" />;
  }

  if (values.isLoading) {
    console.log("manmsnjndim");
    return(<Loader/>);
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${SignupImg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "black" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                value={values.email}
                onChange={handleChange("email")}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                fullWidth
                value={values.password}
                onChange={handleChange("password")}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <br />{" "}
              {values.error && (
                <Typography component="p" color="error">
                  <ErrorIcon />
                  {values.error}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={clickSubmit}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign
              </Button>
              <Grid container>
                <Grid item xs>
                  <a href="#" variant="body2">
                    Forgot password?
                  </a>
                </Grid>
                <Grid item>
                  <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignIn;
