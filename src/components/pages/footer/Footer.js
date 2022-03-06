import React from "react";

export default function Footer() {
  return (
    <section
      id="footer"
      style={{
        backgroundImage: `url("images/footer.jpg")`,
      }}
    >
      <div className="container">
        <div className="row foot-head">
          <div className="col-lg-4">
            <img src="images/logo.png" alt="" />
          </div>
          <div className="col-lg-4">
            <h2>OUR STUDIO</h2>
          </div>
          <div className="col-lg-4">
            <h2>STAY IN TOUCH</h2>
          </div>
        </div>
        <div className="row foot-content">
          <div className="col-lg-4">
            <p>
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh elit. Duis sed odio sit amet auctror a ornare
              odio non mauris vitae erat in elit
            </p>
          </div>
          <div className="col-lg-4">
            <ul>
              <li>
                <i className="fal fa-map-marker-alt"></i>Ruko cucruk, Jl. Radio
                luar dalem jos No.12 - 13, Kalideres - Jakarta Barat 11480 -
                Indonesia
              </li>
              <li>
                <i className="fal fa-phone"></i>(+62) 21-2224 3333
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Subscribe our newsletter"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  <i className="far fa-paper-plane"></i>
                </span>
              </div>
            </div>
            <nav className="foot-social-icon">
              <ul>
                <li>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="row foot-copyright">
          <div className="col-lg-6">
            <nav className="fot-menu text-left">
              <ul>
                <li>
                  <a href="">HELP </a>
                </li>
                <li>
                  <a href="">TERMS & CONDITION</a>
                </li>
                <li>
                  <a href="">PRIVACY</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-6 text-right foot-credit">
            Copyright © 2015 - Tajem Creative
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 desigh-by">
            <h1 className="animate__animated animate__rollIn text-center">
              Design By{" "}
              <a
                className="linksl kukuri"
                href="http://www.facebook.com/borhan.biswas/"
              >
                <i className="fas fa-heart"></i>
                Borhan Uddin
                <i className="fas fa-heart"></i>
              </a>
            </h1>
            <br />
            <br />
          </div>
        </div>
      </div>
    </section>
  );
}
