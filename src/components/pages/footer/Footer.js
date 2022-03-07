import React from "react";
import {
  FaMap,
  FaPhoneAlt,
  FaRegPaperPlane,
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";

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
            <nav className="fot-menu text-left mt-4">
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
          <div className="col-lg-4">
            <ul>
              <li>
                <FaMap />
                Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres -
                Jakarta Barat 11480 - Indonesia
              </li>
              <li>
                <FaPhoneAlt />
                (+62) 21-2224 3333
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
                  <FaRegPaperPlane />
                </span>
              </div>
            </div>
            <nav className="foot-social-icon">
              <ul>
                <li>
                  <a href="">
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaTwitterSquare />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaGithubSquare />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaYoutubeSquare />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mt-5 mb-5 text-center">
            Copyright © 2020 - Tajem Creative | Design By{" "}
            <a className="linksl kukuri" href="http://www.wapborhan.com/">
              <i className="fas fa-heart"></i>
              Borhan Uddin
              <i className="fas fa-heart"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
