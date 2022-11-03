import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup"
import Users from "./user/Users";
import SignIn from "./auth/SignIn";
import Profile from "./user/Profile";
import FoodMenu from "./core/FoodMenu/FoodMenu";
import EditProfile from "./user/EditProfile";
import PrivateRoute from "./auth/PrivateRoute";


const MainRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/user/:userId" component={Profile} />
        <Route exact path="/menu" component={FoodMenu} />
        <PrivateRoute path="/user/edit/:userId" component={EditProfile} />
      </Switch>
    </>
  );
};
export default MainRouter;
