import React from "react";
import "./banner.scss";
import FormSearch from "../FormSearch/FormSearch";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container lg:px-4">
        <div className="banner_content rounded-2xl md:mt-10 mb-5 h-80 md:h-96 xl:h-[500px] flex flex-col justify-around items-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center w-[334px] md:w-[534px] lg:w-2/3 pt-5 lg:pt-28">
            Scale your professional workforce with{" "}
            <i className="title_highlight font-semibold">freelancers</i>
          </h1>
          <FormSearch
            classWrapper=""
            placeholder={"Search for any service..."}
            classInput="py-2 rounded-xl min-w-[350px] sm:min-w-[500px] lg:min-w-[650px]"
          />
          <div className="banner_social space-x-10 pt-5 hidden lg:flex">
            <span className="font-semibold text-white opacity-50">
              Trusted by:
            </span>
            <img
              className="opacity-50"
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.ff37dd3.svg"
              alt="Meta"
            />
            <img
              className="opacity-50"
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.e74f4d9.svg"
              alt="Google"
            />
            <img
              className="opacity-50"
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.b310314.svg"
              alt="Netflix"
            />
            <img
              className="opacity-50"
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pg.22fca85.svg"
              alt="P&G"
            />
            <img
              className="opacity-50"
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.d398de5.svg"
              alt="Paypal"
            />
            <img
              className="opacity-50"
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/payoneer.7c1170d.svg"
              alt="Payoneer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
