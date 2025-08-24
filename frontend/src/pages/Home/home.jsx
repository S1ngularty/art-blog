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
      <Section
        id={"section-1"}
        title={"Hello, I’m Levi 👋"}
        text={
          "Welcome to my personal website! Here, I share my projects, ideas, and creative works. This space is where I document my progress, showcase my artworks, and keep track of the journey I’m taking as I continue to learn and grow."
        }
        contentRight={[<img src="https://wallpapers.com/images/hd/apollo-belvedere-greek-statue-hlbd4e24ludtpu48.jpg"/>]}
        buttonText={"Show more "}
     />
     <div className="divider"></div>
      <Section
        id={"section-1"}
        title={"Tech Stack {}"}
        text={
          "Welcome to my personal website! Here, I share my projects, ideas, and creative works. This space is where I document my progress, showcase my artworks, and keep track of the journey I’m taking as I continue to learn and grow."
        }
        contentRight={[<img src="https://wallpapers.com/images/hd/apollo-belvedere-greek-statue-hlbd4e24ludtpu48.jpg"/>]}
        buttonText={"Show more "}
     />
    </>
  );
}

export default Home;
