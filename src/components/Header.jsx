import React, { useState } from "react";
import logo from "../assets/img/rasm/logo.png";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    setToggle((e) => !e);
  };

  console.log(toggle);
  return (
    <>
      <header
        id="header"
        className="fixed-top d-flex align-items-center header-transparent"
      >
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            {/* <h1><a href="index.html"><span>Bootslander</span></a></h1> */}
            {/* <!-- Uncomment below if you prefer to use an image logo --> */}
            <a href="index.html">
              <img src={logo} alt="logo" className="img-fluid" />
            </a>
          </div>

          <nav
            id="navbar"
            className={`navbar ${toggle ? "navbar-mobile" : " "}`}
          >
            <ul>
              {/* <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                    <li><a className="nav-link scrollto" href="#about">About</a></li>
                    <li><a className="nav-link scrollto" href="#features">Features</a></li>
                    <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
                    <li><a className="nav-link scrollto" href="#team">Team</a></li>
                    <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
                    <li><a className="nav-link scrollto" href="#contact">Contact</a></li> */}
            </ul>
            <i
              onClick={toggler}
              className={`bi text-black bi-list mobile-nav-toggle ${
                toggle ? "bi-list bi-x " : ""
              }`}
            ></i>
            
            <button
              class="menu mn me-3"
              onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
              aria-label="Main Menu"
              aria-expanded="false"
            >
              <svg width="100" height="100" viewBox="0 0 100 100">
                <path
                  class="lines lines1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                ></path>
                <path class="lines lines2" d="M 20,50 H 80"></path>
                <path
                  class="lines lines3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                ></path>
              </svg>
            </button>

          </nav>
          {/* <!-- .navbar --> */}
        </div>
      </header>
    </>
  );
};

export default Header;
