import React from "react";

export default function Watch() {
  return (
    <section
      id="watch"
      style={{
        backgroundImage: `url("images/watch.jpg")`,
      }}
    >
      <div className="container">
        <div className="watch-sec">
          <div className="watch-btn">
            <a data-toggle="modal" data-target="#modal1">
              <i className="far fa-play-circle"></i>
            </a>

            <div
              className="modal fade"
              id="modal1"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-body mb-0 p-0">
                    <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                      <iframe
                        className="embed-responsive-item"
                        src="https://www.youtube.com/watch?v=pBFQdxA-apI"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>

                  <div className="modal-footer justify-content-center">
                    <span className="mr-4">Spread the word!</span>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-rounded btn-md ml-4"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="popup-youtube"
              href="https://www.youtube.com/watch?v=pBFQdxA-apI"
            >
              <i className="far fa-play-circle"></i>
            </a>
            <br />
          </div>
          <h2>WATCH OUR STORY</h2>
        </div>
      </div>
    </section>
  );
}
