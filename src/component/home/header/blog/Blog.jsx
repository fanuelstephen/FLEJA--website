import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import React from "react";

const Blog = () => {
  const BlogData = [
    {
      id: "1",
      date: "26 FEB 2019",
      title: "The MOst POpule New Top Bussness Apps",
      cover: "./asset/blog/blog1.jpg",
      category: "Technogly",
    },
    {
      id: "2",
      date: "26 FEB 2019",
      title: "The Best Marketing to Management Tools",
      cover: "./asset/blog/blog2.jpg",
      category: "Technogly",
    },
    {
      id: "3",
      date: "26 FEB 2019",
      title: "3 WooCommerce Plugins to Boost Sales",
      cover: "./asset/blog/blog3.jpg",
      category: "IT",
    },
  ];
  return (
    <>
      <div className="blog  topMargin">
        <div className="container">
          <div className="heading">
            <h3>LATEST BLOG</h3>
            <h1>Read Inpirational Story Every Week</h1>
          </div>

          <div className="contain grid topMargin">
            {BlogData.map((val) => {
              return (
                <>
                  <div className="box">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <span>{val.date}</span>
                      <h2>{val.title}</h2>
                      <a href="/">
                        Read More
                        <KeyboardDoubleArrowRightIcon className="icon" />
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
