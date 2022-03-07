import React from "react";
import MyCarousel from "./Carousel";

export default function Header() {
  return (
    <section
      id="header"
      className="head-bg"
      style={{
        backgroundImage: `url("images/header-bg.jpg")`,
      }}
    >
      <nav className="navbar navbar-expand-lg menu-head">
        <div
          className="container d-flex align-iteam-center menu-center"
          id="navbarSupportedContent"
        >
          <div className="col-4 logo navbar-brand">
            <img src="images/logo.png" alt="" />
          </div>
          <div className="col-8 main-menu text-right">
            <div className="menu collapse navbar-collapse menu-center">
              <ul>
                <li>
                  <a href="#header">Home</a>
                </li>
                <li>
                  <a href="#story">About</a>
                </li>
                <li>
                  <a href="#services">Experies</a>
                </li>
                <li>
                  <a href="#team">Teams</a>
                </li>
                <li>
                  <a href="#works">Works</a>
                </li>
                <li>
                  <a href="#clients">People Say</a>
                </li>
                <li>
                  <a href="#partner">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <MyCarousel />
      </div>
    </section>
  );
}
