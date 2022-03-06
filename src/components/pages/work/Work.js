import React from "react";

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
      <div className="row works-main-iteam">
        <div className="col-lg-2 col-md-4 col-sm-6 works-iteam">
          <img src="images/works/pro1.jpg" alt="" />
          <div className="works-hov">
            <i className="fas fa-file-code"></i>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 works-iteam">
          <img src="images/works/pro2.jpg" alt="" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 works-iteam">
          <img src="images/works/pro3.jpg" alt="" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 works-iteam">
          <img src="images/works/pro1.jpg" alt="" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 works-iteam">
          <img src="images/works/pro2.jpg" alt="" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 works-iteam">
          <img src="images/works/pro3.jpg" alt="" />
        </div>
      </div>
      <div className="row works-main-iteam">
        <div className="col-lg-2 col-md-4 col-sm-6 works-iteam">
          <img src="images/works/pro3.jpg" alt="" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 works-iteam">
          <img src="images/works/pro2.jpg" alt="" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 works-iteam">
          <img src="images/works/pro1.jpg" alt="" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 works-iteam">
          <img src="images/works/pro3.jpg" alt="" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 works-iteam">
          <img src="images/works/pro2.jpg" alt="" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 works-iteam">
          <img src="images/works/pro3.jpg" alt="" />
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
