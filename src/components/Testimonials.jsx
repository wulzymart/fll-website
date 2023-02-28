import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RatingStar from "react-rating-stars-component";

function TestimonialCarousel({ testimonials }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-5 px-20 bg-slate-200">
      <h3 className="text-3xl font-bold mb-2 text-gray-700 ">Our Reviews</h3>
      <p className="">
        Dont just take our words, Here what other clients are saying
      </p>
      <div className="pt-20 pb-10 w-[90% mx-auto]">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-[85%] md:w-[70%]">
              <p className="text-center text-2xl font-medium text-gray-800">
                "{testimonial.review}"
              </p>
              <p className="text-center w-full flex justify-center text-gray-700">
                <RatingStar
                  value={testimonial.rating}
                  edit={false}
                  size={15}
                  activeColor="#ffd700"
                />
              </p>
              <p className="text-center text-gray-600">{testimonial.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
