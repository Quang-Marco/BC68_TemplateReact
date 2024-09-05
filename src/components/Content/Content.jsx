import React from "react";
import "./content.scss";
import IconFiverrPro from "../Icon/IconFiverrPro";
import IconCheck from "../Icon/IconCheck";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Content = () => {
  const service = [
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png",
      content: "Website Development",
      color: "bg-green-700",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png",
      content: "Logo Design",
      color: "bg-orange-600",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png",
      content: "SEO",
      color: "bg-green-900",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png",
      content: "Architecture & Interior Design",
      color: "bg-pink-950",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/social-media-marketing.png",
      content: "Social Media Marketing",
      color: "bg-lime-700",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png",
      content: "Voice Over",
      color: "bg-orange-950",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/software-development.png",
      content: "Software Development",
      color: "bg-lime-900",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156495/data-science.png",
      content: "Data Science & ML",
      color: "bg-orange-800",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156481/product-photography.png",
      content: "Product Photography",
      color: "bg-lime-700",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156474/e-commerce.png",
      content: "E-Commerce Marketing",
      color: "bg-green-700",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/video-editing.png",
      content: "Video Editing",
      color: "bg-pink-700",
    },
  ];
  const success = [
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666557/3D-Industrial-Design_2x.png",
      content: "3D Industrial Design",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666565/E-commerce-Website-Development_2x.png",
      content: "E-commerce Website Development",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666560/Email-Marketing_2x.png",
      content: "Email Marketing",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666567/Press-Releases_2x.png",
      content: "Press Releases",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666561/Logo-Design_2x.png",
      content: "Logo Design",
    },
  ];
  return (
    <>
      <section className="service pt-10 lg:pt-20">
        <div className="container px-2">
          <div className="service_content">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-700 pb-10">
              Popular services
            </h2>
            <Swiper
              modules={[Navigation, A11y]}
              navigation
              breakpoints={{
                368: {
                  slidesPerView: 2.5,
                  spaceBetween: 10,
                },
                524: {
                  slidesPerView: 3.5,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
              }}
            >
              {service.map((item, index) => (
                <SwiperSlide key={index + 1}>
                  <div
                    className={`border rounded-2xl p-1 sm:p-2 lg:p-3 shadow-lg cursor-pointer hover:opacity-90 duration-300 ${item.color}`}
                  >
                    <p className="text-white text-sm lg:text-lg font-bold m-2 lg:m-3 h-10 lg:h-14">
                      {item.content}
                    </p>
                    <img
                      className="rounded-md lg:rounded-xl"
                      src={item.imgURL}
                    />
                  </div>
                </SwiperSlide>
              ))}
              {/* <SwiperSlide>
                {renderService(
                  "bg-green-700",
                  "Website Development",
                  "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png"
                )}
              </SwiperSlide>
              <SwiperSlide>
                {renderService(
                  "bg-orange-600",
                  "Logo Design",
                  "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png"
                )}
              </SwiperSlide>
              <SwiperSlide>
                {renderService(
                  "bg-green-900",
                  "SEO",
                  "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png"
                )}
              </SwiperSlide>
              <SwiperSlide>
                {renderService(
                  "bg-pink-950",
                  "Architecture & Interior Design",
                  "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png"
                )}
              </SwiperSlide>
              <SwiperSlide>
                {renderService(
                  "bg-lime-700",
                  "Social Media Marketing",
                  "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/social-media-marketing.png"
                )}
              </SwiperSlide>
              <SwiperSlide>
                {renderService(
                  "bg-orange-950",
                  "Voice Over",
                  "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png"
                )}
              </SwiperSlide>
              <SwiperSlide>
                {renderService(
                  "bg-lime-900",
                  "Software Development",
                  "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/software-development.png"
                )}
              </SwiperSlide>
              <SwiperSlide>
                {renderService(
                  "bg-orange-800",
                  "Data Science & ML",
                  "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156495/data-science.png"
                )}
              </SwiperSlide>
              <SwiperSlide>
                {renderService(
                  "bg-lime-700",
                  "Product Photography",
                  "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156481/product-photography.png"
                )}
              </SwiperSlide>
              <SwiperSlide>
                {renderService(
                  "bg-green-700",
                  "E-Commerce Marketing",
                  "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156474/e-commerce.png"
                )}
              </SwiperSlide>
              <SwiperSlide>
                {renderService(
                  "bg-pink-700",
                  "Video Editing",
                  "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/video-editing.png"
                )}
              </SwiperSlide> */}
            </Swiper>
            <div className="mt-10 px-4 py-8 sm:px-8 lg:p-16 bg-blue-50 rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
              <div>
                <IconFiverrPro />
                <h2 className="my-10 text-3xl sm:text-4xl lg:text-5xl">
                  The{" "}
                  <span className="title_highlight text-green-500">
                    premium
                  </span>{" "}
                  freelance solution for businesses
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              <div className="hidden lg:block">
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
        <div className="container px-2">
          <div className="success_content">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-medium text-gray-700">
              What success on Fiverr looks like
            </h2>
            <p className="pt-5 pb-10 text-gray-500">
              Vontélle Eyewear turns to Fiverr freelancers to bring their vision
              to life.
            </p>
            <video
              className="rounded-xl h-80 sm:h-96 md:h-[480px] lg:h-[600px] w-full object-cover"
              autoPlay
              controls
              muted
              poster="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/ef51b45f79342925d5268e0b2377eae8-1704717764992/thumbnail.png"
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/4934b0c8f6441211d97f83585a7c9c00-1722433273322/Vontelle%20Cutdown-%20Breakthrough%20V5"
            ></video>
            <h3 className="py-10 text-2xl lg:text-3xl text-gray-700">
              Vontélle’s go-to services
            </h3>
            <Swiper
              modules={[Navigation, A11y]}
              navigation
              spaceBetween={20}
              breakpoints={{
                368: {
                  slidesPerView: 1.5,
                },
                524: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
            >
              {success.map((item, index) => (
                <SwiperSlide key={index + 1}>
                  <div className="border rounded-2xl px-6 py-5 shadow-sm cursor-pointer text-center flex flex-col justify-center items-center hover:shadow-xl duration-300">
                    <img src={item.imgURL} />
                    <p className="text-base font-semibold mt-3 h-12">
                      {item.content}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
