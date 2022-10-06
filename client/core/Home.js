import React from 'react';
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import HowItWorks from './How-It-Works/How-It-Works';
import Footer from "./Footer/Footer"
import Container from "@mui/material/Container";

function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Navbar/>
        <Hero/>
        <HowItWorks/>
        <Footer/>
      </Container>
    </>
  );
}

export default Home;
