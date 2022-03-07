import React from "react";
import { FaFileCode } from "react-icons/fa";

export default function Work() {
  return (
    <section id="works">
      <div className="container">
        <div className="row works-head">
          <div className="col-lg-6 text-left">
            <h2>Our works</h2>
          </div>
          <div className="col-lg-6 text-right">
            <h5>See All Project in dribbble </h5>
          </div>
        </div>
      </div>
      <div className="m-0 p-0">
        <div className="works-main-iteam d-flex">
          <div className="works-iteam">
            <img
              src="images/works/pro2.jpg"
              className="image-fluid"
              alt="work"
            />
            <div className="works-hov">
              <FaFileCode />
            </div>
          </div>
          <div className="works-iteam">
            <img
              src="images/works/pro3.jpg"
              className="image-fluid"
              alt="work"
            />
            <div className="works-hov">
              <FaFileCode />
            </div>
          </div>
          <div className="works-iteam">
            <img
              src="images/works/pro2.jpg"
              className="image-fluid"
              alt="work"
            />
            <div className="works-hov">
              <FaFileCode />
            </div>
          </div>
          <div className="works-iteam">
            <img
              src="images/works/pro3.jpg"
              className="image-fluid"
              alt="work"
            />
            <div className="works-hov">
              <FaFileCode />
            </div>
          </div>
          <div className="works-iteam">
            <img
              src="images/works/pro2.jpg"
              className="image-fluid"
              alt="work"
            />
            <div className="works-hov">
              <FaFileCode />
            </div>
          </div>
        </div>
        <div className="works-main-iteam d-flex">
          <div className="works-iteam">
            <img
              src="images/works/pro2.jpg"
              className="image-fluid"
              alt="work"
            />
            <div className="works-hov">
              <FaFileCode />
            </div>
          </div>
          <div className="works-iteam">
            <img
              src="images/works/pro3.jpg"
              className="image-fluid"
              alt="work"
            />
            <div className="works-hov">
              <FaFileCode />
            </div>
          </div>
          <div className="works-iteam">
            <img
              src="images/works/pro2.jpg"
              className="image-fluid"
              alt="work"
            />
            <div className="works-hov">
              <FaFileCode />
            </div>
          </div>
          <div className="works-iteam">
            <img
              src="images/works/pro3.jpg"
              className="image-fluid"
              alt="work"
            />
            <div className="works-hov">
              <FaFileCode />
            </div>
          </div>
          <div className="works-iteam">
            <img
              src="images/works/pro2.jpg"
              className="image-fluid"
              alt="work"
            />
            <div className="works-hov">
              <FaFileCode />
            </div>
          </div>
        </div>
      </div>
      <div className="container work-button text-center">
        <a href="">
          <button className="work-btn">WE ARE HIRING</button>
        </a>
      </div>
    </section>
  );
}
