import React from "react";

export default function Story() {
  return (
    <section id="story">
      <div className="container">
        <div className="row story-content">
          <div
            className="col-lg-5 col-md-5 text-center wow fadeInLeft animated"
            data-wow-duration=".6s"
          >
            <img src="images/story.png" alt="" />
          </div>
          <div className="col-lg-7 col-md-7 story-text">
            <h2>Our Story</h2>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus
              <span>
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                auctor a ornare odio. Sed non mauris vitae erat consequat auctor
                eu in elit. className aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos.
              </span>
            </p>
            <a href="">
              <button className="story-btn">Learn more</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
