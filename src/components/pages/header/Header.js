import React from "react";

export default function Header() {
  return (
    <section id="header" className="head-bg">
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
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>

          <div className="row carousel-inner text-center d-flex text-align-center">
            <div className="carousel-item active">
              <img src="images/000000.png" alt="..." />
              <div className="carousel-caption  d-md-block slider-sec">
                <h5>We Are Awesome Creative Agency</h5>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet mauris. Morbi accumsan ipsum velit.
                </p>
                <a href="">
                  <button className="slider-btn">Learn more</button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src="images/000000.png" alt="..." />
              <div className="carousel-caption  d-md-block slider-sec">
                <h5>We Are Awesome Creative Agency</h5>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet mauris. Morbi accumsan ipsum velit.
                </p>
                <a href="">
                  <button className="slider-btn">Learn more</button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src="images/000000.png" alt="..." />
              <div className="carousel-caption  d-md-block slider-sec">
                <h5>We Are Awesome Creative Agency</h5>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet mauris. Morbi accumsan ipsum velit.
                </p>
                <a href="">
                  <button className="slider-btn">Learn more</button>
                </a>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
}
