import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WorkIcon from "@mui/icons-material/Work";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  window.addEventListener("scroll", () => {
    const header = document.querySelector("Header");
    header.classList.toggle("active", window.scrollY > 280);
  });
  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            <img src="./asset/logo.png" alt="LOGO" />
          </div>
          <div>
            <ul className={sidebar ? "nav-links-sidebar" : "nav-links"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages">Pages</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li className="icon">
                <SearchOutlinedIcon className="HeaderIcon" />
                <WorkIcon className="HeaderIcon" />
                <GridViewTwoToneIcon className="HeaderIcon" />
              </li>
            </ul>
          </div>
          <button
            className="navbar-items-icon"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
