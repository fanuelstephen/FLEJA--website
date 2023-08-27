import React from "react";

const data = [
  {
    title: "who I am and What i Do",
    desc1:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Earum libero repellendus fuga rem minima Lorem ipsum dolor sit amet consectetur adipisicing elit Earum libero repellendus fuga rem minima",
    desc2:
      "Earum libero repellendus fuga rem minima Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Earum libero repellendus fuga rem minima",
    desc3:
      " Earum libero repellendus fuga rem minima Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Earum libero repellendus fuga rem minima",
    cover: "./asset/about.jpg",
  },
];
const About = () => {
  return (
    <>
      <section className="about topMargin">
        <div className="container flex">
          {data.map((val) => {
            return (
              <>
                <div className="left mtop">
                  <div className="heading">
                    <h3>About me</h3>
                    <h1>{val.title}</h1>
                  </div>

                  <p>{val.desc1}</p>
                  <p>{val.desc2}</p>
                  <p>{val.desc3}</p>
                  <button className="primary-btn">Download Cv</button>
                </div>

                <div className="right">
                  <div className="img">
                    <img src={val.cover} alt="love" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
