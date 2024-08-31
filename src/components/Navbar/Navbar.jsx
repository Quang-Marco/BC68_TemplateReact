import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Dropdown, Space } from "antd";

const Navbar = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];
  const renderJob = (imgURL, content) => (
    <div className="border rounded-2xl p-3 lg:p-5 shadow-lg cursor-pointer hover:bg-cyan-100 duration-300">
      <img src={imgURL} />
      <p className="text-sm font-semibold mt-3">{content}</p>
    </div>
  );
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="navbar">
        <div className="container px-2">
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
      <div
        className={`bg-white w-screen border-b fixed top-[84px] pt-3 z-10 ${
          isScroll ? "hidden lg:block" : "hidden"
        }`}
      >
        <div className="container">
          <div className="flex justify-between gap-4">
            <Dropdown
              menu={{
                items,
              }}
              className="text-gray-600 cursor-pointer pb-2 border-b-[3px] border-white duration-300"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>Programming & Tech</Space>
              </a>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              className="text-gray-600 cursor-pointer pb-2 border-b-[3px] border-white duration-300"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>Graphics & Design</Space>
              </a>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              className="text-gray-600 cursor-pointer pb-2 border-b-[3px] border-white duration-300"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>Digital Marketing</Space>
              </a>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              className="text-gray-600 cursor-pointer pb-2 border-b-[3px] border-white duration-300"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>Writing & Translation</Space>
              </a>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              className="text-gray-600 cursor-pointer pb-2 border-b-[3px] border-white duration-300"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>Video & Animation</Space>
              </a>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              className="text-gray-600 cursor-pointer pb-2 border-b-[3px] border-white duration-300"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>AI Services</Space>
              </a>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              className="text-gray-600 cursor-pointer pb-2 border-b-[3px] border-white duration-300"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>Music & Audio</Space>
              </a>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              className="text-gray-600 cursor-pointer pb-2 border-b-[3px] border-white duration-300"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>Business</Space>
              </a>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              className="text-gray-600 cursor-pointer pb-2 border-b-[3px] border-white duration-300"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>Consulting</Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
