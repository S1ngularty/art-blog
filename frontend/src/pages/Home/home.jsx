import { useState } from "react";
import NavBar from "../../components/nav-bar/nav-bar";
import Section from "../../components/section/section";
import Hero from "../../components/hero/hero";
import "./home.css";
function Home() {
  return (
    <>
      <NavBar />
      <Hero className={"home-hero"} />
    </>
  );
}

export default Home;
