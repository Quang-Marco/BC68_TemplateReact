import React, { useEffect, useState } from "react";
import "./banner.scss";
import { DownOutlined } from "@ant-design/icons";
import FormSearch from "../FormSearch/FormSearch";
import useResponsive from "../../hooks/useResponsive";

const Banner = () => {
  const listProducts = [
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming-tech-thin.56382a2.svg",
      name: "Programming & Tech",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design-thin.ff38893.svg",
      name: "Graphics & Design",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/digital-marketing-thin.68edb44.svg",
      name: "Digital Marketing",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation-thin.fd3699b.svg",
      name: "Writing & Translation",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation-thin.9d3f24d.svg",
      name: "Video & Animation",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/ai-services-thin.104f389.svg",
      name: "AI Services",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio-thin.43a9801.svg",
      name: "Music & Audio",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business-thin.885e68e.svg",
      name: "Business",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/consulting-thin.d5547ff.svg",
      name: "Consulting",
    },
  ];
  const listBrands = [
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.ff37dd3.svg",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.e74f4d9.svg",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.b310314.svg",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pg.22fca85.svg",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.d398de5.svg",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/payoneer.7c1170d.svg",
    },
  ];

  const [visibleProducts, setVisibleProducts] = useState(9);
  const handleShowMore = () => {
    setVisibleProducts((prev) => prev + 6);
  };
  const { isMobile, isTablet, isDesktop } = useResponsive();

  useEffect(() => {
    if (isDesktop) {
      setVisibleProducts(8);
    } else if (isTablet) {
      setVisibleProducts(6);
    } else if (isMobile) {
      setVisibleProducts(3);
    } else {
      setVisibleProducts(9);
    }
  }, [isMobile, isTablet, isDesktop]);

  return (
    <section className="banner">
      <div className="container lg:px-2">
        <div className="banner_content md:rounded-2xl md:mt-10 mb-5 h-72 md:h-96 xl:h-[500px] flex flex-col justify-around items-center">
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
            {listBrands.map((item, index) => (
              <img
                key={index + 1}
                className="opacity-50"
                src={item.imgURL}
              ></img>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 gap-4">
          {listProducts.slice(0, visibleProducts).map((product, index) => (
            <div
              key={index + 1}
              className="border rounded-2xl p-3 lg:p-5 shadow-lg cursor-pointer hover:bg-cyan-100 duration-300"
            >
              <img src={product.imgURL} />
              <p className="text-sm font-semibold mt-3">{product.name}</p>
            </div>
          ))}
        </div>
        {visibleProducts < listProducts.length && (
          <div
            onClick={handleShowMore}
            className="text-center font-semibold py-2 mt-3 rounded-md cursor-pointer hover:bg-gray-100 duration-300"
          >
            View {9 - visibleProducts} more <DownOutlined />
          </div>
        )}
      </div>
    </section>
  );
};

export default Banner;
