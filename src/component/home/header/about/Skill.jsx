import React from "react";

function Skill() {
  const Progress = ({ done, title }) => {
    return (
      <div className="progress">
        <div
          className="progress-done"
          style={{ opacity: 1, width: `${done}%` }}
        >
          <h4>{title}</h4>
          <h4>{done} %</h4>
        </div>
      </div>
    );
  };

  const data = [
    {
      title: "Every Day is New Challange",
      para1:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, eius commodi sequi ratione ducimus iste ut officiis unde illum modi maiores quibusdam doloribus ea, nostrum dolorem harum quaerat eaque magni.",
      para2:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, eius commodi sequi ratione ducimus iste ut officiis unde illum modi maiores quibusdam doloribus ea, nostrum dolorem harum quaerat eaque magni.",
    },
  ];
  return (
    <>
      <div className="skill">
        <div className="container">
          <div className="heading">
            <h3>WHY CHOOSE US</h3>
            <h1>Some of my skill</h1>
          </div>
          <div className="content flex">
            <div className="left topMargin">
              <Progress done="70" title="HTML" />
              <Progress done="80" title="CSS" />
              <Progress done="90" title="JAVASCRIPT" />
              <Progress done="70" title="REACT JS" />
            </div>
            <div className="right mtop">
              {data.map((val) => {
                return (
                  <>
                    <h1>{val.title}</h1>
                    <p>{val.para1}</p>
                    <p>{val.para2}</p>
                    <button className="primary-btn">Hire Me</button>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
