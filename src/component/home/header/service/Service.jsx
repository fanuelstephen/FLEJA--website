import React from "react";

const ServiceData = [
  {
    id: "1",
    title: "Web Design",
    desc: "Earum libero repellendus fuga rem minima",
    cover: "./asset/services/services-1.jpg",
  },
  {
    id: "2",
    title: "Web Development",
    desc: "Earum libero repellendus fuga rem minima",
    cover: "./asset/services/services-2.jpg",
  },
  {
    id: "3",
    title: "Photograph",
    desc: "Earum libero repellendus fuga rem minima",
    cover: "./asset/services/services-3.jpg",
  },
  {
    id: "4",
    title: "Live Support",
    desc: "Earum libero repellendus fuga rem minima",
    cover: "./asset/services/services-4.jpg",
  },
  {
    id: "5",
    title: "Content Writing",
    desc: "Earum libero repellendus fuga rem minima",
    cover: "./asset/services/services-5.jpg",
  },
  {
    id: "6",
    title: "Timely Deliverables",
    desc: "Earum libero repellendus fuga rem minima",
    cover: "./asset/services/services-6.jpg",
  },
];
const Service = () => {
  return (
    <>
      <section className="services topMargin">
        <div className="container">
          <div className="heading">
            <h3>MY SERVICE</h3>
            <h1>Interactive service offered me</h1>
          </div>

          <div className="container grid topMargin">
            {ServiceData.map((val) => {
              return (
                <>
                  <div className="box">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
