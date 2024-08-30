import React from "react";
import "./content.scss";
import { Carousel } from "antd";
import IconFiverrPro from "../Icon/IconFiverrPro";
import IconCheck from "../Icon/IconCheck";

const Content = () => {
  const renderService = (bgColor, content, imgURL) => (
    <div
      className={`border rounded-2xl p-3 shadow-lg cursor-pointer hover:opacity-90 duration-300 ${bgColor}`}
    >
      <p className="text-white text-lg font-bold m-3 h-14">{content}</p>
      <img className="rounded-xl" src={imgURL} />
    </div>
  );
  const renderSuccess = (imgURL, content) => (
    <div className="border rounded-2xl px-8 py-5 shadow-md cursor-pointer text-center flex flex-col justify-center items-center hover:shadow-xl duration-300">
      <img src={imgURL} />
      <p className="text-base font-semibold mt-3 h-12">{content}</p>
    </div>
  );
  return (
    <div>
      <section className="service pt-20">
        <div className="container">
          <div className="service_content">
            <h2 className="text-5xl font-medium text-gray-700 pb-10">
              Popular services
            </h2>
            <Carousel arrows dots={false} infinite={false}>
              <div>
                <div className="grid grid-cols-6 gap-5">
                  {renderService(
                    "bg-green-700",
                    "Website Development",
                    "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png"
                  )}
                  {renderService(
                    "bg-orange-600",
                    "Logo Design",
                    "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png"
                  )}
                  {renderService(
                    "bg-green-900",
                    "SEO",
                    "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png"
                  )}
                  {renderService(
                    "bg-pink-950",
                    "Architecture & Interior Design",
                    "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png"
                  )}
                  {renderService(
                    "bg-lime-700",
                    "Social Media Marketing",
                    "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/social-media-marketing.png"
                  )}
                  {renderService(
                    "bg-orange-950",
                    "Voice Over",
                    "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png"
                  )}
                </div>
              </div>
              <div>
                <div className="grid grid-cols-6 gap-5">
                  {renderService(
                    "bg-orange-950",
                    "Voice Over",
                    "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png"
                  )}
                  {renderService(
                    "bg-lime-900",
                    "Software Development",
                    "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/software-development.png"
                  )}
                  {renderService(
                    "bg-orange-800",
                    "Data Science & ML",
                    "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156495/data-science.png"
                  )}
                  {renderService(
                    "bg-lime-700",
                    "Product Photography",
                    "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156481/product-photography.png"
                  )}
                  {renderService(
                    "bg-green-700",
                    "E-Commerce Marketing",
                    "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156474/e-commerce.png"
                  )}
                  {renderService(
                    "bg-pink-700",
                    "Video Editing",
                    "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/video-editing.png"
                  )}
                </div>
              </div>
            </Carousel>
            <div className="mt-10 p-16 bg-blue-50 rounded-2xl grid grid-cols-2 gap-5 items-center">
              <div>
                <IconFiverrPro />
                <h2 className="my-10 text-5xl">
                  The{" "}
                  <span className="title_highlight text-green-500">
                    premium
                  </span>{" "}
                  freelance solution for businesses
                </h2>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <IconCheck />
                    <h5 className="font-bold text-lg mt-3">
                      Dedicated hiring experts
                    </h5>
                    <p className="text-sm">
                      Count on an account manager to find you the right talent
                      and see to your project’s every need.
                    </p>
                  </div>
                  <div>
                    <IconCheck />
                    <h5 className="font-bold text-lg mt-3">
                      Satisfaction guarantee
                    </h5>
                    <p className="text-sm">
                      Order confidently, with guaranteed refunds for
                      less-than-satisfactory deliveries.
                    </p>
                  </div>
                  <div>
                    <IconCheck />
                    <h5 className="font-bold text-lg mt-3">
                      Advanced management tools
                    </h5>
                    <p className="text-sm">
                      Seamlessly integrate freelancers into your team and
                      projects.
                    </p>
                  </div>
                  <div>
                    <IconCheck />
                    <h5 className="font-bold text-lg mt-3">
                      Flexible payment models
                    </h5>
                    <p className="text-sm">
                      Pay per project or opt for hourly rates to facilitate
                      longer-term collaboration.
                    </p>
                  </div>
                </div>
                <button className="bg-black text-white rounded-lg mt-10 py-3 px-5 hover:opacity-80 duration-300">
                  Try now
                </button>
              </div>
              <div>
                <img
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/2321104e0c585cceea525419551d3a7c-1721984733481/fiverr-pro.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="success pt-10">
        <div className="container">
          <div className="success_content">
            <h2 className="text-[40px] font-medium text-gray-700">
              What success on Fiverr looks like
            </h2>
            <p className="pt-5 pb-10 text-gray-500">
              Vontélle Eyewear turns to Fiverr freelancers to bring their vision
              to life.
            </p>
            <video
              className="rounded-xl h-[600px] w-full object-cover"
              autoPlay
              controls
              muted
              poster="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/ef51b45f79342925d5268e0b2377eae8-1704717764992/thumbnail.png"
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/4934b0c8f6441211d97f83585a7c9c00-1722433273322/Vontelle%20Cutdown-%20Breakthrough%20V5"
            ></video>
            <h3 className="py-10 text-3xl text-gray-700">
              Vontélle’s go-to services
            </h3>
            <div className="grid grid-cols-5 gap-5">
              {renderSuccess(
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666557/3D-Industrial-Design_2x.png",
                "3D Industrial Design"
              )}
              {renderSuccess(
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666557/3D-Industrial-Design_2x.png",
                "E-commerce 3D Website Development"
              )}
              {renderSuccess(
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666560/Email-Marketing_2x.png",
                "Email Marketing"
              )}
              {renderSuccess(
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666567/Press-Releases_2x.png",
                "Press Releases"
              )}
              {renderSuccess(
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666561/Logo-Design_2x.png",
                "Logo Design"
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
