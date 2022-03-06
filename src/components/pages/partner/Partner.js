import React from "react";

export default function Partner() {
  return (
    <section id="partner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 partner-content">
            <h2>GIVE US A GOOD NEWS</h2>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="8"
                ></textarea>
              </div>
              <button type="submit" className="btn client-btn">
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-6 text-left partner-content">
            <h2>OUR HAPPY CLIENT</h2>
            <img src="images/partner.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
