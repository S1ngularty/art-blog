import { useState } from "react";
import NavBar from "../../components/nav-bar/nav-bar";
import Hero from "../../components/hero/hero";
import Section from "../../components/section";
import "./home.css";
function Home() {
  return (
    <>
      <NavBar />
      <Hero className={"home-hero"} />
      <Section sectionId={"section-1"}>
        <div className="section-child" id="content-left">
          <h1>Hello, I'm Levi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur
            adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae
            pellentesque sem placerat in id. Placerat in id cursus mi pretium
            tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
          </p>
        </div>
        <div className="section-child" id="content-right">
          <img
            key={"apollo-img"}
            src="https://wallpapers.com/images/hd/apollo-belvedere-greek-statue-hlbd4e24ludtpu48.jpg"
          />
        </div>
      </Section>
      <div className="divider"></div>
        <Section sectionId={"section-1"}>
        <div className="section-child" id="content-left">
          <h1>Hello, I'm Levi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur
            adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae
            pellentesque sem placerat in id. Placerat in id cursus mi pretium
            tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
          </p>
        </div>
        <div className="section-child" id="content-right">
          <img
            key={"apollo-img"}
            src="https://wallpapers.com/images/hd/apollo-belvedere-greek-statue-hlbd4e24ludtpu48.jpg"
          />
        </div>
      </Section>
    </>
  );
}

export default Home;
