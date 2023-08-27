import React from "react";

const Wrapper = () => {
  const data = [
    {
      titile: "LOOKING FOR EXCLUSIVE  SERVICES?",
      heading: "Get The Best For Your Bussness",
      desc: "Earum libero repellendus fuga rem minima",
    },
  ];
  return (
    <>
      <div className="branding wrapper">
        <div className="container">
          {data.map((val) => {
            return (
              <>
                <div className="box">
                  <h3>{val.titile}</h3>
                  <h2>{val.heading}</h2>
                  <p>{val.desc}</p>
                  <button className="primary-btn">Contact Us</button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Wrapper;
