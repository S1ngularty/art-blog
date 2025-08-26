import { useState } from "react";
import NavBar from "../../components/nav-bar/nav-bar";
import Hero from "../../components/hero/hero";
import Section from "../../components/section";
import Card from "../../components/card";
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

      <Section sectionId={"section-2"}>
        <Card
          img={
            "https://images.unsplash.com/photo-1688589935456-191f352db55b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBlJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D"
          }
          text={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
          }
        ></Card>
         <Card
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdN2AYv2WHZ7YoMR7vOF56VfeQ3bqUU_-ug&s"
          }
          text={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
          }
        ></Card>
         <Card
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6DpeaeikBJeA6KZbj4pWlXkynKc6sGZk6w&s"
          }
          text={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
          }
        ></Card>
         <Card
          img={
            "https://i.etsystatic.com/17358183/r/il/8d8af8/6668464072/il_570xN.6668464072_j9zy.jpg"
          }
          text={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
          }
        ></Card>
      </Section>
    </>
  );
}

export default Home;
