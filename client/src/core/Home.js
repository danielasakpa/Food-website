import React from "react";
import Hero from "./Hero/Hero";
import HowItWorks from "./How-It-Works/How-It-Works";
import Footer from "./Footer/Footer";
import { Redirect } from "react-router-dom";
import auth from "../auth/auth-helper";

function Home() {
  const jwt = auth.isAuthenticated();

  if (jwt.token) {
    return <Redirect to={`/user/${jwt.user._id}`} />;
  }

  return (
    <>
      <Hero />
      <HowItWorks />
      <Footer/>
    </>
  );
}

export default Home;