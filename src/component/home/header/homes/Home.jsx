import React from "react";

function Home() {
  return (
    <>
      <section className="home">
        <div className="container flex">
          <div className="left">
            <div className="img">
              <img src="./asset/home.png" alt="person" />
            </div>
          </div>
          <div className="right topMargin">
            <h1>
              IM AM A <br />
              WEB DESIGNER
            </h1>
            <div className="socialIcon">
              <i className="fab fa-facebook-f facebook"></i>
              <i className="fab fa-instagram instagram"></i>
              <i className="fab fa-twitter twitter"></i>
              <i className="fab fa-youtube youtube"></i>
              <i className="fab fa-pinterest pinterest"></i>
              <i className="fab fa-dribbble dribbble"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              libero repellendus fuga rem minima.
            </p>
            <button className="primary-btn">Contanct Us</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
