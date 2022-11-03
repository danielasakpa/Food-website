import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  Box,
  CardActions,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import auth from "./../auth/auth-helper";
import { read, update } from "./api-user.js";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import ErrorIcon from "@mui/icons-material/Error";
import UserNav from "../core/UserNav/UserNav";
import Footer from "../core/Footer/Footer";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  title: {
    margin: theme.spacing(2),
    color: theme.palette.protectedTitle,
  },
  error: {
    verticalAlign: "middle",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
     ["@media screen and (max-width: 540px)"]: {
      width: "100%"
    },
  },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
}));

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
            "&:hover": {
              backgroundColor: "#F1D4CA",
              color: "#000000",
            },
          },
        },
      ],
    },
  },
});

export default function EditProfile({ match }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    password: "",
    email: "",
    open: false,
    error: "",
    redirectToProfile: false,
  });
  const jwt = auth.isAuthenticated();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    read(
      {
        userId: match.params.userId,
      },
      { t: jwt.token },
      signal
    ).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, name: data.name, email: data.email });
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, [match.params.userId]);

  const clickSubmit = () => {
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined,
    };
    update(
      {
        userId: match.params.userId,
      },
      {
        t: jwt.token,
      },
      user
    ).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, userId: data._id, redirectToProfile: true });
      }
    });
  };
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  if (values.redirectToProfile) {
    return <Redirect to={"/user/" + values.userId} />;
  }
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <UserNav />
        <Box display="flex" my={10} justifyContent="center" alignItems="center">
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h6" className={classes.title}>
                Edit Profile
              </Typography>
              <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={values.name}
                onChange={handleChange("name")}
                margin="normal"
              />
              <br />
              <TextField
                id="email"
                type="email"
                label="Email"
                className={classes.textField}
                value={values.email}
                onChange={handleChange("email")}
                margin="normal"
              />
              <br />
              <TextField
                id="password"
                type="password"
                label="Password"
                className={classes.textField}
                value={values.password}
                onChange={handleChange("password")}
                margin="normal"
              />
              <br />{" "}
              {values.error && (
                <Typography component="p" color="error">
                  <ErrorIcon />
                  {values.error}
                </Typography>
              )}
            </CardContent>
            <CardActions>
              <Button
                color="primary"
                fullWidth
                variant="contained"
                onClick={clickSubmit}
                className={classes.submit}
              >
                Submit
              </Button>
            </CardActions>
          </Card>
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
