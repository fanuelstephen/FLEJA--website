import React from "react";
const data = [
  {
    id: "01",
    heading: "Digital branding",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "02",
    heading: "Team Management",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "03",
    heading: "Creative mind",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

function Brading() {
  return (
    <>
      <div className="branding">
        <div className="container grid">
          {data.map((value) => {
            return (
              <div className="box flex">
                <div className="text">
                  <h1>{value.id}</h1>
                </div>
                <div className="para">
                  <h2>{value.heading}</h2>
                  <p>{value.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Brading;
