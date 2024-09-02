import React from "react";
import "./banner.scss";
import FormSearch from "../FormSearch/FormSearch";

const Banner = () => {
  const renderJob = (imgURL, content) => (
    <div className="border rounded-2xl p-3 lg:p-5 shadow-lg cursor-pointer hover:bg-cyan-100 duration-300">
      <img src={imgURL} />
      <p className="text-sm font-semibold mt-3">{content}</p>
    </div>
  );
  return (
    <section className="banner">
      <div className="container lg:px-2">
        <div className="banner_content rounded-2xl md:mt-10 mb-5 h-72 md:h-96 xl:h-[500px] flex flex-col justify-around items-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center w-[334px] md:w-[534px] lg:w-2/3 pt-5 lg:pt-28">
            Scale your professional workforce with{" "}
            <i className="title_highlight font-semibold">freelancers</i>
          </h1>
          <FormSearch
            classWrapper=""
            classIcon="p-3 mr-2 rounded-lg bg-green-800"
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
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 gap-4">
          {renderJob(
            "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming-tech-thin.56382a2.svg",
            "Programming & Tech"
          )}
          {renderJob(
            "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design-thin.ff38893.svg",
            "Graphics & Design"
          )}
          {renderJob(
            "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/digital-marketing-thin.68edb44.svg",
            "Digital Marketing"
          )}
          {renderJob(
            "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation-thin.fd3699b.svg",
            "Writing & Translation"
          )}
          {renderJob(
            "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation-thin.9d3f24d.svg",
            "Video & Animation"
          )}
          {renderJob(
            "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/ai-services-thin.104f389.svg",
            "AI Services"
          )}
          {renderJob(
            "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio-thin.43a9801.svg",
            "Music & Audio"
          )}
          {renderJob(
            "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business-thin.885e68e.svg",
            "Business"
          )}
          {renderJob(
            "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/consulting-thin.d5547ff.svg",
            "Consulting"
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
