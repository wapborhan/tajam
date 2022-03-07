import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className="slide-arrow next-arrow" onClick={onClick}>
      <i className="feather-arrow-right">
        <FiArrowRight />
      </i>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="slide-arrow prev-arrow" onClick={onClick}>
      <i className="feather-arrow-left">
        <FiArrowLeft />
      </i>
    </button>
  );
}

function Client() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    cssEase: "linear",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div className="slider-content">
          <i className="fas fa-quote-left"></i>
          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
          </p>
          <img src="images/clients/clients-1.png" alt="" />
          <h2>JANE GALADRIEL</h2>
          <h5>CEO TENGKUREP</h5>
        </div>

        <div className="slider-content">
          <i className="fas fa-quote-left"></i>
          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
          </p>
          <img src="images/clients/clients-2.png" alt="" />
          <h2>JANE GALADRIEL</h2>
          <h5>CEO TENGKUREP</h5>
        </div>

        <div className="slider-content">
          <i className="fas fa-quote-left"></i>
          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
          </p>
          <img src="images/clients/clients-3.png" alt="" />
          <h2>JANE GALADRIEL</h2>
          <h5>CEO TENGKUREP</h5>
        </div>

        <div className="slider-content">
          <i className="fas fa-quote-left"></i>
          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
          </p>
          <img src="images/clients/clients-4.png" alt="" />
          <h2>JANE GALADRIEL</h2>
          <h5>CEO TENGKUREP</h5>
        </div>

        <div className="slider-content">
          <i className="fas fa-quote-left"></i>
          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
          </p>
          <img src="images/clients/clients-5.png" alt="" />
          <h2>JANE GALADRIEL</h2>
          <h5>CEO TENGKUREP</h5>
        </div>
      </Slider>
    </div>
  );
}

export default Client;
