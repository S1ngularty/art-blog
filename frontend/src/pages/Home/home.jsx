import { useState } from "react";
import NavBar from "../../components/nav-bar/nav-bar";
import Section from "../../components/section/section";
import Hero from "../../components/hero/hero";
import LogoHolder from "../../components/card/card.jsx";
import GallerySection from "../../components/gallery-section/gallery-section.jsx";
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
        contentRight={[
          <img key={"apollo-img"} src="https://wallpapers.com/images/hd/apollo-belvedere-greek-statue-hlbd4e24ludtpu48.jpg" />,
        ]}
        buttonText={"Show more "}
      />
      <div className="divider"></div>
     
      <GallerySection
        id={"section-3"}
        title={"Art Gallery"}
        cardNum={4}
        images={[
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmogo_dI3yVtkLEbtlEOZ537L5UgPnoJYbXg&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCa3P5w963gTAHNwHXAJnM9iC8zTJjFsEp_xa4bd3iA8bh4MIR24AnarC99Cj8wxPPPSM&usqp=CAU",
          "https://cdn.britannica.com/87/2087-050-8B2A01CD/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE6tlXa0hIxrdLeVW2n3TxWuM5ILYkCL_5Aw&s",
        ]}
      />
      <div className="divider"></div>
    </>
  );
}

export default Home;
