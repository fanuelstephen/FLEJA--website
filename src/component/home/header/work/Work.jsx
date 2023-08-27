import React from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import IosShareIcon from "@mui/icons-material/IosShare";

const Work = () => {
  const Data = [
    {
      id: "1",
      title: "Digital marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, illum delectus earum vitae natus, totam sunt vero tempora non ducimus, amet id veniam facilis magni quaerat libero impedit eum est!",
      cover: "./asset/work/work1.jpg",
    },
    {
      id: "2",
      title: "Digital marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, illum delectus earum vitae natus, totam sunt vero tempora non ducimus, amet id veniam facilis magni quaerat libero impedit eum est!",
      cover: "./asset/work/work2.jpg",
    },
    {
      id: "3",
      title: "Digital marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, illum delectus earum vitae natus, totam sunt vero tempora non ducimus, amet id veniam facilis magni quaerat libero impedit eum est!",
      cover: "./asset/work/work3.jpg",
    },
    {
      id: "4",
      title: "Digital marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, illum delectus earum vitae natus, totam sunt vero tempora non ducimus, amet id veniam facilis magni quaerat libero impedit eum est!",
      cover: "./asset/work/work4.jpg",
    },
    {
      id: "5",
      title: "Digital marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, illum delectus earum vitae natus, totam sunt vero tempora non ducimus, amet id veniam facilis magni quaerat libero impedit eum est!",
      cover: "./asset/work/work5.jpg",
    },
    {
      id: "6",
      title: "Digital marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, illum delectus earum vitae natus, totam sunt vero tempora non ducimus, amet id veniam facilis magni quaerat libero impedit eum est!",
      cover: "./asset/work/work6.jpg",
    },
  ];
  return (
    <>
      <div className="work">
        <div className="heading">
          <h3>MY WORKS</h3>
          <h1>Some of my complete projects</h1>
        </div>
        <div className="content">
          {Data.map((val) => {
            return (
              <>
                <div className="box">
                  <div className="img">
                    <img src={val.cover} alt="oyaaaaaaa" />
                  </div>
                  <div className="ovalay">
                    <div className="text">
                      <h1>{val.title}</h1>
                      <p>{val.desc}</p>
                    </div>
                    <div className="icon">
                      <FullscreenIcon className="iconWork" />
                      <IosShareIcon className="iconWork" />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Work;
