import React from "react";

export default function Teams() {
  return (
    <section id="team">
      <div className="container team-head text-center">
        <h2>MEET OUR AMAZING TEAM</h2>
        <h5>Lorem ipsum dolor sit amet proin gravida nibh vel velit</h5>

        <div className="row team-main-item">
          <div className="col-lg-3 col-md-6 col-sm-12 team-item">
            <div className="team-main-iteam">
              <img src="images/works/pro3.jpg" alt="" />
              <h3>SEMF UCUK</h3>
              <h6>CEO & FOUNDER</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 team-item">
            <div className="team-main-iteam">
              <img src="images/works/pro3.jpg" alt="" />
              <h3>DIK ADALIN</h3>
              <h6>ENGINEERING</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 team-item">
            <div className="team-main-iteam">
              <img src="images/works/pro3.jpg" alt="" />
              <h3>JENG KOL</h3>
              <h6>DESIGNER</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 team-item">
            <div className="team-main-iteam">
              <img src="images/works/pro3.jpg" alt="" />
              <h3>PET ROMAK</h3>
              <h6>MARKETING</h6>
            </div>
          </div>
        </div>
        <h4>Become part of our dream team, let’s join us ! </h4>
        <a href="">
          <button className="team-btn">WE ARE HIRING</button>
        </a>
      </div>
    </section>
  );
}
