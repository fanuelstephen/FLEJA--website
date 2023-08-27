import React from "react";
import Home from "../home/header/homes/Home";
import Brading from "../home/header/brading/Brading";
import About from "../home/header/about/About";
import Service from "../home/header/service/Service";
import Wrapper from "../home/header/Wrapper";
import Skill from "../home/header/about/Skill";
import WrapperOne from "../home/header/WrapperOne";
import Work from "../home/header/work/Work";
import Blog from "../home/header/blog/Blog";

function HomePages() {
  return (
    <>
      <Home />
      <Brading />
      <About />
      <Service />
      <Wrapper />
      <Skill />
      <WrapperOne />
      <Work />
      <Blog />
    </>
  );
}

export default HomePages;
