import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className=" footer container grid1">
          <div className="box">
            <img src="./asset/logo1.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              odit aperiam accusamus ut porro aspernatur necessitatibus at
              architecto asperiores explicabo. Quisquam ipsam laboriosam eum
              accusamus magni pariatur, commodi officiis porro?
            </p>
            <div className="socialIcon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-dribbble"></i>
            </div>
          </div>
          <div className="box">
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>News</li>
              <li>Contact</li>
              <li>FAQ's</li>
            </ul>
          </div>
          <div className="box">
            <h2>Recent Post</h2>
            <div className="text">
              <p>3 WooCommerce Plugins to Book Sales</p>
              <span>28 Feb 2022 </span>
            </div>
            <div className="text">
              <p>3 WooCommerce Plugins to Book Sales</p>
              <span>28 Feb 2022 </span>
            </div>
            <div className="text">
              <p>3 WooCommerce Plugins to Book Sales</p>
              <span>28 Feb 2022 </span>
            </div>
          </div>
          <div className="box">
            <h2>Get in Touch</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              in aliquam illum quos
            </p>

            <div className="icon">
              <i className="fa fa-location-dot"></i>
              <label htmlFor="">
                Location: 27 Division st, New York,NY 10002, USA
              </label>
            </div>

            <div className="icon">
              <i className="fa fa-phone"></i>
              <label htmlFor="">Phone: +255 752054441</label>
            </div>

            <div className="icon">
              <i className="fa fa-envelope"></i>
              <label htmlFor="">Emai:masterstee@gmail.com</label>
            </div>
          </div>
        </div>

        <div className="legal container">
          <p>Copyright @2023. All right reserved</p>
          <label>
            Design & Developed by <span>GorkCoder</span> and Redesined by
            <span>
              <strong> Fanuel-The-Softeware-Developer</strong>
            </span>
          </label>
        </div>
      </footer>
    </>
  );
};

export default Footer;
