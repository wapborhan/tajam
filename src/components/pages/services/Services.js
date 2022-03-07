import React from "react";
import {
  FaDesktop,
  FaPaintBrush,
  FaMobileAlt,
  FaRegChartBar,
  FaTabletAlt,
  FaRegHeart,
} from "react-icons/fa";

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="services-head">
          <h2>EXPERTISE</h2>
          <h5>Lorem ipsum dolor sit amet proin gravida nibh vel velit</h5>
        </div>
        <div className="row services-1st">
          <div className="col-lg-4 col-md-6 col-sm-12 text-center ">
            <div className="services-item">
              <FaDesktop />
              <h2>WEB DESIGN & DEVELOPMENT</h2>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet Aenean.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center ">
            <div className="services-item">
              <FaPaintBrush />
              <h2>BRANDING IDENTITY</h2>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet Aenean.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center ">
            <div className="services-item">
              <FaMobileAlt />
              <h2>MOBILE APP</h2>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet Aenean.
              </p>
            </div>
          </div>
        </div>

        <div className="row services-2nd mt-4">
          <div className="col-lg-4 col-md-6 col-sm-12 text-center ">
            <div className="services-item">
              <FaRegChartBar />
              <h2>SEARCH ENGINE OPTIMIZATION</h2>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet Aenean.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center ">
            <div className="services-item">
              <FaTabletAlt />
              <h2>GAME DEVELOPMENT</h2>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet Aenean.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center ">
            <div className="services-item">
              <FaRegHeart />
              <h2>MADE WITH LOVE</h2>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet Aenean.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
