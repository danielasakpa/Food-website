import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Box,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import HowItWorks from "../core/How-It-Works/How-It-Works";
import Footer from "../core/Footer/Footer";
import auth from "../auth/auth-helper";
import { read } from "./api-user.js";
import { Redirect, Link, withRouter } from "react-router-dom";
import DeleteUser from "./DeleteUser";
import IconButton from "@mui/material/IconButton";
import ProfileImg from "../Assets/images/profile.jpg";
import { makeStyles } from "@mui/styles";
import LogoutImg from "../Assets/images/logout.png";
import OrderImg from "../Assets/images/online-order.png";
import MenuImg from "../Assets/images/restaurant-menu.png";
import UserNav from "../core/UserNav/UserNav";

const useStyles = makeStyles((theme) => ({
  card: {
    // border: `2px solid black`,
  },
  Papers: {
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(32),
      height: theme.spacing(16),
      elevation: 0,
      cursor: "pointer",
      transition: "all .2s ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
      }
    },
  },
}));

const Profile = withRouter(({ match, history }) => {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [redirectToSignin, setRedirectToSignin] = useState(false);
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
        setRedirectToSignin(true);
      } else {
        setUser(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, [match.params.userId]);

  if (redirectToSignin) {
    return <Redirect to="/signin" />;
  }
  return (
    <>
      <Container maxWidth="xl">
        <UserNav/>
        <Box>
          <Stack
            marginTop={10}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h3" fontFamily="pragmatica-extrabold" fontSize={{ xs: "25px", md: "40px" }}>
              Welcome, {user.name}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {auth.isAuthenticated().user &&
                auth.isAuthenticated().user._id === user._id && (
                  <>
                    <Link to={"/user/edit/" + user._id}>
                      <IconButton aria-label="Edit" color="primary">
                        <EditIcon />
                      </IconButton>
                    </Link>
                    <DeleteUser userId={user._id} />
                  </>
                )}
            </Stack>
          </Stack>
          <Stack marginTop={6}>
            <Card
              variant="HTW"
              className={classes.card}
              data-aos="zoom-in"
              sx={{ height: "100%" }}
            >
              <CardContent>
                <CardMedia
                  component="img"
                  sx={{ borderRadius: "15px 50px 15px" }}
                  height="250"
                  loading="lazy"
                  image={ProfileImg}
                  alt="Paella dish"
                />
                <Typography
                  variant="h4"
                  fontFamily="Averia Serif Libre"
                  marginTop={4}
                  color="text.secondary"
                >
                  WE SPEAK THE GOOD FOOD LANGUAGE
                </Typography>
                <Typography
                  variant="h5"
                  fontSize="20px"
                  fontFamily="pragmatica-extrabold"
                  marginTop={2}
                  color="text.secondary"
                >
                  Satisfy your cravings with our variety of meals. Whatever your
                  choice or however you like it, we are always ready to serve
                  you.
                </Typography>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  justifyContent="space-between"
                  alignItems="center"
                  margin="0 auto"
                  marginTop={6}
                  className={classes.Papers}
                >
                  <Paper p={3} elevation={3} square>
                    <Box textAlign="center" m={2}>
                      <img style={{ width: "50px" }} src={MenuImg} />
                      <Typography fontFamily="Bebas Neue" variant="h5">
                        Order Now
                      </Typography>
                    </Box>
                  </Paper>
                  <Paper p={3} elevation={3} square>
                    <Box textAlign="center" m={2}>
                      <img style={{ width: "50px" }} src={OrderImg} />
                      <Typography fontFamily="Bebas Neue" variant="h5">
                        Order History
                      </Typography>
                    </Box>
                  </Paper>
                  <Paper
                    p={3}
                    elevation={3}
                    onClick={() => {
                      auth.clearJWT(() => history.push("/"));
                    }}
                    square
                  >
                    <Box textAlign="center" m={2}>
                      <img style={{ width: "50px" }} src={LogoutImg} />
                      <Typography fontFamily="Bebas Neue" variant="h5">
                        Logout
                      </Typography>
                    </Box>
                  </Paper>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Box>
        <HowItWorks />
        <Footer />
      </Container>
    </>
  );
});

export default Profile;
