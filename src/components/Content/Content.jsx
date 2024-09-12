import React, { useRef, useState } from "react";
import "./content.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Carousel } from "antd";
import { Button, Modal } from "antd";
import ScrollToTop from "react-scroll-to-top";

const Content = () => {
  const contentStyle = {
    margin: 0,
    height: "340px",
    color: "#000",

    background: "#fff",
  };

  const videoRef = useRef(null);

  const handleCancel = (modal) => {
    if (videoRef.current) {
      videoRef.current.pause();
      // videoRef.current.currentTime = 0;
    }
    modal();
  };

  // const afterOpenChange = (open) => {
  //   if (open && videoRef.current) {
  //     videoRef.current.play();
  //   }
  // };

  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);

  const toggleModal1 = () => setIsModalOpen1((prev) => !prev);
  const toggleModal2 = () => setIsModalOpen2((prev) => !prev);
  const toggleModal3 = () => setIsModalOpen3((prev) => !prev);
  const toggleModal4 = () => setIsModalOpen4((prev) => !prev);

  const renderAbout = (
    imageAbout,
    name,
    coop,
    content,
    video,
    show,
    toggle
  ) => (
    <div className="carouselItem grid grid-cols-1 lg:grid-cols-2 gap-5">
      <Button
        className="item_left border-none  hover:cursor-pointer h-full relative"
        onClick={toggle}
      >
        <img className=" w-full h-full  rounded " src={imageAbout} />
      </Button>
      <Modal
        open={show}
        okButtonProps={{ style: { display: "none" } }}
        onCancel={() => handleCancel(toggle)}
        width={800}
        centered
        footer={null}
        styles={{
          content: {
            padding: "0px",
          },
        }}
      >
        <video
          ref={videoRef}
          style={{
            width: "100%",
            top: "20px",
            borderRadius: "5px",
            objectFit: "cover",
          }}
          controls
          autoPlay
        >
          <source src={video} type="video/mp4" />
        </video>
      </Modal>
      <div className="item_right ">
        <h5 className="text-[#74767e] relative font-normal md:flex text-xl pb-4  ">
          <p> {name} |</p>

          <span>
            <img
              className=" ml-12 lg:ml-3 md:items-center lg:absolute lg:-top-1 h-9  "
              src={coop}
              alt="Compony logo"
              loading="lazy"
            />
          </span>
        </h5>
        <p
          className="text-[#003912] font-medium text-3xl pb-7
           leading-10"
        >
          "{content}"
        </p>
      </div>
    </div>
  );
  const renderMadeImg = (madeImg, topic, by) => (
    <div className="card  rounded-lg mb-5 shadow hover:cursor-pointer">
      <img
        className="w-full h-full object-cover rounded-lg"
        src={madeImg}
        alt=""
      />

      <div className="info ">
        <div className="info_content pl-2 text-[14px] text-white  ">
          Featured in:
          <span className="font-semibold">{topic}</span>
          <br />
          by:
          <a className="font-semibold" target="_blank" href="#">
            {by}
          </a>
        </div>
        <div className="three_dot">
          <span className="cursor-pointer ">
            <button className="bg-transparent w-10 h-10 flex justify-center items-center hover:bg-white rounded-full">
              <span className="h-4 w-4 fill-white hover:fill-[#7C7E86] inline-block">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentFill"
                >
                  <circle cx="2" cy="2" r="2"></circle>
                  <circle cx="8" cy="2" r="2"></circle>
                  <circle cx="14" cy="2" r="2"></circle>
                </svg>
              </span>
            </button>
          </span>
        </div>
        <div className="heart absolute top-0 right-0">
          <button className="h-10 w-10 rounded-full bg-white opacity-0 hover:opacity-1">
            <div className="w-4 h-4 fill-white hover:fill-[#7C7E86] ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.325 2.00937C12.5188 0.490623 9.72813 0.718748 8 2.47812C6.27188 0.718748 3.48125 0.487498 1.675 2.00937C-0.674996 3.9875 -0.331246 7.2125 1.34375 8.92187L6.825 14.5062C7.1375 14.825 7.55625 15.0031 8 15.0031C8.44688 15.0031 8.8625 14.8281 9.175 14.5094L14.6563 8.925C16.3281 7.21562 16.6781 3.99062 14.325 2.00937ZM13.5875 7.86875L8.10625 13.4531C8.03125 13.5281 7.96875 13.5281 7.89375 13.4531L2.4125 7.86875C1.27188 6.70625 1.04063 4.50625 2.64063 3.15937C3.85625 2.1375 5.73125 2.29062 6.90625 3.4875L8 4.60312L9.09375 3.4875C10.275 2.28437 12.15 2.1375 13.3594 3.15625C14.9563 4.50312 14.7188 6.71562 13.5875 7.86875Z"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

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
  const guideArr = [
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/0c7c1b07050e6ea2a0901861b48b6264-1658846941284/side%20hustle.jpeg",
      content: "Start a side business",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/687d698a96f4eef875648319685ffeed-1687027332007/1685561103924-12profitableecommercebusinessideasyoucanstarttoday.jpg",
      content: "Ecommerce business Ideas",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/5907f56b0e099c84efe5f480840f43a2-1593446948907/home%20based%20online%20business-fiverr.jpg",
      content: "Start an online business and work from home",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/8b1dcc55f5c8582b04aee0b995ae5327-1683590934905/1682363178357-Howtobuildawebsitefromscratch.jpg",
      content: "Build a website from scratch",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/309ac0d5d01de83b832e421b316352a8-1690708285578/05%20-%20Article%20Cover.jpg",
      content: "Grow your business with AI",
    },
    {
      imgURL:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/10f680cb84a2f3ef4473ecfdede3a1ba-1593438129320/business%20logo%20design-fiverr%20guide.jpg",
      content: "Create a logo for your business",
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
            </Swiper>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-700 mt-10 lg:mt-20 mb-10">
              A whole world of freelance talent at your fingertips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              <div>
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/categories.72379ee.svg"
                  alt=""
                />
                <h3 className="text-2xl text-gray-700 lg:h-16 my-5">
                  Over 700 categories
                </h3>
                <p className="text-gray-500">
                  Get results from skilled freelancers from all over the world,
                  for every task, at any price point.
                </p>
              </div>
              <div>
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/handshake.287b5d3.svg"
                  alt=""
                />
                <h3 className="text-2xl text-gray-700 lg:h-16 my-5">
                  Clear, transparent pricing
                </h3>
                <p className="text-gray-500">
                  Pay per project or by the hour (Pro). Payments only get
                  released when you approve.
                </p>
              </div>
              <div>
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lightning.2cded3f.svg"
                  alt=""
                />
                <h3 className="text-2xl text-gray-700 lg:h-16 my-5">
                  Quality work done faster
                </h3>
                <p className="text-gray-500">
                  Filter to find the right freelancers quickly and get great
                  work delivered in no time, every time.
                </p>
              </div>
              <div>
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/support.660ad7f.svg"
                  alt=""
                />
                <h3 className="text-2xl text-gray-700 lg:h-16 my-5">
                  24/7 award-winning support
                </h3>
                <p className="text-gray-500">
                  Chat with our team to get your questions answered or resolve
                  any issues with your orders.
                </p>
              </div>
            </div>
            {/* <div className="mt-10 px-4 py-8 sm:px-8 lg:p-16 bg-blue-50 rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
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
            </div> */}
          </div>
        </div>
      </section>
      <section className="success pt-10 lg:pt-20">
        <div className="container px-2">
          <div className="success_content">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-700">
              What success on Fiverr looks like
            </h2>
            <p className="pt-5 pb-10 text-gray-500">
              Vontélle Eyewear turns to Fiverr freelancers to bring their vision
              to life.
            </p>
            <video
              className="rounded-xl h-80 sm:h-96 md:h-[480px] lg:h-[650px] w-full object-cover"
              autoPlay
              controls
              muted
              poster="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/ef51b45f79342925d5268e0b2377eae8-1704717764992/thumbnail.png"
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/e0f330e4c8d6e3bf843a3bd3164fa275-1706087048062/How%20Fiverr%20Works%20EN%20Subs%2016x9"
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
      <section className="fiverrPro ">
        <div className="container px-2">
          <div className="fiverPro_content grid grid-cols-1 xl:grid-cols-2 gap-5 bg-[#003912] md: rounded-xl text-white py-20 px-16">
            <div className="pro_left">
              <svg
                width="139"
                height="34"
                viewBox="0 0 139 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#fff">
                  <path d="M81.6463 13.1117H78.4949C76.4661 13.1117 75.3797 14.6592 75.3797 17.2363V26.5544H69.4034V13.1117H66.8677C64.839 13.1117 63.7526 14.6592 63.7526 17.2363V26.5544H57.7763V8.13963H63.7526V10.9393C64.7301 8.76575 66.0705 8.13963 68.063 8.13963H75.3797V10.9393C76.3572 8.76575 77.6976 8.13963 79.6901 8.13963H81.6463V13.1117ZM56.4721 18.7838H44.0103C44.3358 20.8466 45.6036 22.0251 47.7413 22.0251C49.3345 22.0251 50.4584 21.3621 50.8201 20.1836L56.1092 21.6942C54.8051 24.8986 51.5811 26.8508 47.7413 26.8508C41.2569 26.8508 38.2869 21.7311 38.2869 17.3482C38.2869 13.0391 40.8952 7.88251 47.3784 7.88251C54.2607 7.88251 56.5424 13.1129 56.5424 16.9804C56.5436 17.8267 56.5073 18.379 56.4721 18.7838ZM50.6761 15.2115C50.531 13.6283 49.4083 12.1547 47.3795 12.1547C45.4959 12.1547 44.3732 13.0022 44.0103 15.2115H50.6761ZM27.855 26.5556H33.1078L39.6636 8.13963H33.651L30.4633 18.8576L27.203 8.13963H21.2267L27.855 26.5556ZM3.3692 26.5556H9.3092V13.1117H14.96V26.5556H20.8649V8.13963H9.31037V6.99808C9.31037 5.74583 10.1802 4.9721 11.5557 4.9721H14.9612V0H10.577C6.26662 0 3.3692 2.689 3.3692 6.63026V8.14082H0V13.1129H3.3692V26.5556Z"></path>
                  <path d="M86.9869 34V8.15269H90.4697V10.8905C91.5467 9.06569 93.7371 7.85986 96.2505 7.85986C101.708 7.85986 104.832 11.8749 104.832 17.3517C104.832 22.8273 101.564 26.8436 96.0714 26.8436C93.6657 26.8436 91.5116 25.7116 90.4709 23.9594V33.9988H86.9869V34ZM101.313 17.3529C101.313 13.52 99.0871 10.9643 95.7471 10.9643C92.3721 10.9643 90.1817 13.52 90.1817 17.3529C90.1817 21.1859 92.3721 23.7415 95.7471 23.7415C99.0871 23.7415 101.313 21.1859 101.313 17.3529Z"></path>
                  <path d="M116.757 11.2189H114.136C110.834 11.2189 109.755 14.2127 109.755 18.2277V26.5519H106.274V8.15259H109.757V11.6939C110.582 9.24771 112.018 8.15259 114.568 8.15259H116.758V11.2189H116.757Z"></path>
                  <path d="M115.91 17.3529C115.91 11.8404 119.823 7.86108 125.245 7.86108C130.666 7.86108 134.543 11.8404 134.543 17.3529C134.543 22.8655 130.666 26.8448 125.245 26.8448C119.823 26.8436 115.91 22.8643 115.91 17.3529ZM130.988 17.3529C130.988 13.5926 128.655 10.9643 125.243 10.9643C121.797 10.9643 119.463 13.5926 119.463 17.3529C119.463 21.1133 121.796 23.7416 125.243 23.7416C128.655 23.7416 130.988 21.1121 130.988 17.3529Z"></path>
                  <path d="M139 24.5201V24.5629C139 25.814 138.003 26.8294 136.771 26.8294C135.541 26.8294 134.542 25.8152 134.542 24.5629V24.5201C134.542 23.269 135.539 22.2537 136.771 22.2537C138.001 22.2537 139 23.269 139 24.5201Z"></path>
                </g>
              </svg>
              <h3 className="text-2xl sm:text-3xl lg-text-4xl sm:leading-tight">
                New e-Commerce project management service
                <span className="font-bold"> made for your business</span>
              </h3>
              <p>
                An experienced e-Commerce project manager will plan, coordinate,
                and execute your project. Overseeing a team of e-Commerce
                experts, they'll handle everything from site building, design
                and content to optimization, marketing strategies, and UGC
                videos.
              </p>
              <p className="font-bold">To get started, you should have:</p>
              <ul>
                <li>
                  An e-Commerce project requiring expertise in various fields
                </li>
                <li>A budget exceeding $1000</li>
                <li>A desire to get things done, without the hassle</li>
              </ul>
              <button className="rounded-lg bg-[#E37627] px-6 py-3">
                Get started
              </button>
            </div>
            <div className="pro_right hidden lg:block">
              <img
                alt="Fiverr Pro freelancers"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d85c8f7113e7f18d6fca144840de5afa-1718619183018/X1.png"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="about ">
        <div className="container px-2">
          <div className="about_top  flex flex-col lg:py-10 lg:gap-10 ">
            <h2>What they're saying about Fiverr</h2>
            <div className="carousel_feetback ">
              <Carousel arrows dots={false} infinite={false}>
                <div style={contentStyle}>
                  {renderAbout(
                    "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg",
                    "Brighid Gannon (DNP, PMHNP-BC), Co-Founder",
                    "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lavender-logo-x2.3fff9e7.png",
                    "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world.",
                    "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi",
                    isModalOpen1,
                    toggleModal1
                  )}
                </div>
                <div style={contentStyle}>
                  <div>
                    {renderAbout(
                      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg",
                      "Kay Kim, Co-Founder",
                      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/rooted-logo-x2.7da3bc9.png",
                      "It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working.",
                      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw",
                      isModalOpen2,
                      toggleModal2
                    )}
                  </div>
                </div>

                <div style={contentStyle}>
                  {renderAbout(
                    "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg",
                    "Caitlin Tormey, Chief Commercial Officer",
                    "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/naadam-logo-x2.a79031d.png",
                    "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day.",
                    "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/plfa6gdjihpdvr10rchl",
                    isModalOpen3,
                    toggleModal3
                  )}
                </div>

                <div style={contentStyle}>
                  {renderAbout(
                    "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg",
                    "Tim and Dan Joo, Co-Founders",
                    "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/haerfest-logo-x2.934ab63.png",
                    "When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does.",
                    "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/bsncmkwya3nectkensun",
                    isModalOpen4,
                    toggleModal4
                  )}
                </div>
              </Carousel>
            </div>
          </div>
          <div className="about_logo py-10 grid grid-cols-1 lg:grid-cols-2 bg-[#FFF6F2] rounded-lg">
            <div className="logo_left ">
              <div className="logo_left_content flex flex-col  gap-4 md:gap-8 ">
                <svg
                  width="249"
                  height="34"
                  viewBox="0 0 249 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#222325">
                    <path d="M81.6,13.1h-3.1c-2,0-3.1,1.5-3.1,4.1v9.3h-6V13.1h-2.5c-2,0-3.1,1.5-3.1,4.1v9.3h-6V8.1h6v2.8 c1-2.2,2.3-2.8,4.3-2.8h7.3v2.8c1-2.2,2.3-2.8,4.3-2.8h2L81.6,13.1z M56.4,18.7H44c0.3,2.1,1.6,3.2,3.7,3.2 c1.6,0,2.7-0.7,3.1-1.8l5.3,1.5c-1.3,3.2-4.5,5.1-8.4,5.1c-6.5,0-9.5-5.1-9.5-9.5c0-4.3,2.6-9.4,9.1-9.4c6.9,0,9.2,5.2,9.2,9.1 C56.5,17.8,56.5,18.3,56.4,18.7z M50.7,15.2c-0.1-1.6-1.3-3-3.3-3c-1.9,0-3,0.8-3.4,3H50.7z M27.8,26.5H33l6.6-18.3h-6l-3.2,10.7 L27.2,8.1h-6L27.8,26.5z M3.4,26.5h5.9V13.1H15v13.4h5.9V8.1H9.3V7c0-1.2,0.9-2,2.2-2H15V0h-4.4C6.3,0,3.4,2.7,3.4,6.6v1.5H0v5 h3.4L3.4,26.5z"></path>
                    <path d="M88.4,0h3.5v26.6h-3.5V0z"></path>
                    <path d="M93.6,17.5c0-5.5,3.9-9.4,9.4-9.4c5.5,0,9.4,3.9,9.4,9.4s-3.9,9.4-9.4,9.4C97.5,26.9,93.6,23,93.6,17.5z M108.8,17.5c0-3.7-2.4-6.3-5.8-6.3c-3.5,0-5.8,2.6-5.8,6.3s2.4,6.3,5.8,6.3C106.4,23.8,108.8,21.2,108.8,17.5z"></path>
                    <path d="M130.1,28.3c0,3.3-2.1,5.7-5.6,5.7h-5.6c-3.8,0-5.8-2.2-5.8-5.4c0-1.5,0.8-2.9,1.9-3.7 c-0.9-0.7-1.4-1.6-1.4-2.8c0-1.5,0.9-2.5,2.2-3.8c-0.8-1-1.2-2.4-1.2-3.8c0-3.8,3-6.3,7-6.3c1,0,2,0.2,2.9,0.5l2.5-2.9l2.2,2 l-2.2,2.5c1,1.1,1.6,2.6,1.6,4.1c0,3.8-3,6.3-7,6.3c-1.3,0-2.5-0.3-3.5-0.7c-0.7,0.8-1,1.2-1,1.8c0,1,0.9,1.5,2,1.5h5.1 C127.6,23.3,130.1,24.9,130.1,28.3z M126.7,28.5c0-1.7-1.1-2.5-2.9-2.5h-4.2c-0.6,0-1.2,0-1.8-0.1c-0.9,0.7-1.2,1.6-1.2,2.6 c0,1.5,1,2.6,2.5,2.6h5.4C126.1,31.1,126.7,30,126.7,28.5z M117.9,14.4c0,2.2,1.7,3.5,3.7,3.5c2,0,3.7-1.3,3.7-3.5 c0-2.2-1.7-3.5-3.7-3.5C119.6,10.9,117.9,12.2,117.9,14.4z"></path>
                    <path d="M130.2,17.5c0-5.5,3.9-9.4,9.4-9.4c5.5,0,9.4,3.9,9.4,9.4s-3.9,9.4-9.4,9.4C134.2,26.9,130.2,23,130.2,17.5z M145.4,17.5c0-3.7-2.4-6.3-5.8-6.3c-3.5,0-5.8,2.6-5.8,6.3s2.4,6.3,5.8,6.3C143.1,23.8,145.4,21.2,145.4,17.5z"></path>
                    <path d="M155,8.4h3.5v3.3c0.8-2.1,2.7-3.5,5.4-3.5c3,0,5.2,1.3,5.9,3.7c0.7-2.1,3.1-3.7,5.9-3.7 c3.9,0,6.4,2.7,6.4,6.9v11.6h-3.5V16c0-2.9-1.5-4.8-3.9-4.8c-2.8,0-4.5,2-4.5,4.8v10.6h-3.5V16c0-2.9-1.5-4.8-3.8-4.8 c-2.8,0-4.5,2-4.5,4.8v10.6H155V8.4z"></path>
                    <path d="M199.3,14.7v11.9h-3.4v-3c-0.9,2-3.2,3.3-5.9,3.3c-3.7,0-6.2-2.3-6.2-5.5c0-3.7,2.4-5.9,7.1-5.9h3.9 c0.7,0,1.1-0.4,1.1-1v-0.1c0-2.2-2-3.6-4.5-3.6s-4.3,1.6-4.5,3.5h-3.2c0.3-3.6,3.5-6.3,7.6-6.3C195.9,8.1,199.3,10.7,199.3,14.7z M195.9,18.6v-0.5h-4.7c-2.8,0-3.9,1.2-3.9,3.3c0,1.6,1.5,2.8,3.4,2.8C193.9,24.1,195.9,22,195.9,18.6z"></path>
                    <path d="M207,17.9l-2.3,2.1v6.6h-3.5V0h3.5v15.6l8-7.2h4.5l-7.7,7.1l8.4,11.1h-4.3L207,17.9z"></path>
                    <path d="M243.2,11.4c-3.3,0-4.4,3-4.4,6.9v8.3h-3.5V8.4h3.5v3.5c0.8-2.4,2.3-3.5,4.8-3.5h2.2v3H243.2z"></path>
                    <path d="M230.4,20.7c-0.5,2.1-2.2,3.2-4.9,3.2c-3.2,0-5.4-2.4-5.7-5.8h13.9c0-0.3,0.1-0.9,0.1-1.4 c0-4.6-3-8.6-8.6-8.6c-5.6,0-8.8,4.2-8.8,9.3c0,5.1,3.5,9.5,9.2,9.5c4.1,0,7.2-2.1,8.2-5.3L230.4,20.7L230.4,20.7z M225.2,10.9 c3,0,4.9,1.8,5.1,4.6h-10.4C220.5,12.5,222.3,10.9,225.2,10.9z"></path>
                    <path d="M248.8,24.6L248.8,24.6c0,0.6-0.2,1.2-0.7,1.7c-0.4,0.4-1,0.7-1.6,0.7c-0.3,0-0.6-0.1-0.9-0.2 c-0.3-0.1-0.5-0.3-0.7-0.5c-0.2-0.2-0.4-0.5-0.5-0.7c-0.1-0.3-0.2-0.6-0.2-0.9v0c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.5,0.5-0.7 c0.2-0.2,0.5-0.4,0.7-0.5c0.3-0.1,0.6-0.2,0.9-0.2c0.6,0,1.2,0.2,1.6,0.7C248.6,23.4,248.8,24,248.8,24.6z"></path>
                  </g>
                </svg>

                <h2>
                  Make an incredible <br />
                  logo <span> in seconds</span>
                </h2>
                <h3>Pre-designed by top talent. Just add your touch.</h3>
                <a className="bg-black text-white px-4 py-2 w-52 rounded-md ">
                  Try Fiverr Logo Maker
                </a>
              </div>
            </div>
            <div className="logo_right ">
              <img
                alt="fiverr logo maker"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_460,dpr_1.0/v1/attachments/generic_asset/asset/55292bd34319d97ef4e9fd48d9f8758d-1704795769965/logo-maker-lohp.png"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="made  py-10">
        <div className="container px-2">
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl  lg:text-5xl md:text-4xl ">
              Made on Fiverr
            </h2>
            <div className="madeImg  ">
              <div className="columns-2 gap-5  lg:columns-3 xl:columns-4">
                {renderMadeImg(
                  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/2e957fdf499e4cf782c113b90604ad99-1725204152/3D-Mockup.jpg",
                  "Architecture & Interior Design",
                  " handeoner"
                )}
                {renderMadeImg(
                  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/12afb3156320a1e9560acd03c4465620-1722796241/R1-oak.jpg",
                  "Architecture & Interior Design",
                  " handeoner"
                )}
                {renderMadeImg(
                  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/4fb70c587400b9527b067d09777c1631-1723211625/1-min.png",
                  "Architecture & Interior Design",
                  " handeoner"
                )}
                {renderMadeImg(
                  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/c5fc570fd13e440fa01377fcfc6f3e6c-1724087375/View%205.jpg",
                  "Architecture & Interior Design",
                  " handeoner"
                )}
                {renderMadeImg(
                  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/1f414726af2358c66e3c5221b52f059a-1722426465/11.png",
                  "Architecture & Interior Design",
                  " handeoner"
                )}
                {renderMadeImg(
                  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/5b6c850df6175afcb07b912a8a01400c-1723423527/Medusa%20Cover%20Art%20%283000x3000%20JPG%29.jpg ",
                  "Architecture & Interior Design",
                  " handeoner"
                )}
                {renderMadeImg(
                  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/7cb22296adf815a118ae757bd1b7bdca-1721063501/GG_COFFEE%20TABLE_HR%202_FINAL.jpg",
                  "Architecture & Interior Design",
                  " handeoner"
                )}
                {renderMadeImg(
                  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/08eb565fdb7f4ea409464bca6be2c8fc-1721855239/thumbnail.png",
                  "Architecture & Interior Design",
                  " handeoner"
                )}
                {renderMadeImg(
                  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/4a81f86c63667a53faebf124f4647c14-1721428494/image_2024-07-08_10-33-49.png",
                  "Architecture & Interior Design",
                  " handeoner",
                  "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffw"
                )}
                {renderMadeImg(
                  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/11f2137d40e6c56ebafbbf650922d0f5-1720628869/5.jpg",
                  "Architecture & Interior Design",
                  " handeoner"
                )}
                {renderMadeImg(
                  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/a4d318e30b63073d385684f903ab1970-1720552623/Pomp%20and%20Parlour_design.jpg",
                  "Architecture & Interior Design",
                  " handeoner"
                )}
                {renderMadeImg(
                  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/c4a9150257b329d88fc63a7a01a9fd3a-1720529339/Rockband.JPEG.jpg",
                  "Architecture & Interior Design",
                  " handeoner"
                )}
                {renderMadeImg(
                  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/f969052079c4e70237a88acc9d5544c0-1722009968/view%203.png",
                  "Architecture & Interior Design",
                  " handeoner"
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="guide pb-16 sm:pb-20">
        <div className="container px-2  ">
          <div className="guide_title relative px-3 ">
            <div className="">
              <h3 className=" my-5">
                <p className="text-3xl lg:text-5xl">Guides to help you grow</p>
              </h3>
              <a
                className="block hover:underline hover:text-[#222325] absolute right-4 top-4 "
                href="#"
              >
                See more
              </a>
            </div>
          </div>
          <div className="guide_content lg:pt-10 pb-20">
            <Swiper
              modules={[Navigation, A11y]}
              navigation
              autoHeight={true}
              spaceBetween={5}
              breakpoints={{
                // 368: {
                //   slidesPerView: 1.5,
                // },
                // 524: {
                //   slidesPerView: ,
                // },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {guideArr.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className=" px-6 py-5 cursor-pointer  hover:cursor-pointer duration-300">
                    <img className="w-full h-full" src={item.imgURL} />
                    <p className="text-base font-semibold mt-3 h-12">
                      {item.content}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="guide_panner flex flex-col gap-10 bg-[#4D1727] rounded-xl  lg:pb-10  pt-12 pb-8 text-center my-10">
            <h2 className="text-white ">
              Freelance services at your
              <span className="text-[#FF7640]">fingertips!</span>
            </h2>
            <div>
              <button className="bg-white px-4 py-2 rounded-lg  text-xl font-medium">
                Join Fiverr
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop
        className="hover:bg-green-500 duration-300 flex items-center justify-center"
        width="16"
        height="16"
        smooth
      />
    </>
  );
};

export default Content;
