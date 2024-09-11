import React, { useEffect, useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import FormSearch from "../FormSearch/FormSearch";
import IconLogoHeader from "../Icon/IconLogoHeader";
import Navbar from "../Navbar/Navbar";
import { pathDefault } from "../../common/path";
import { Button, Collapse, Drawer, Dropdown, Modal, Space, Tabs } from "antd";
import {
  DownOutlined,
  MenuUnfoldOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const explore = [
    {
      title: "Discover",
      content: "Inspiring projects made on Fiverr",
    },
    {
      title: "Community",
      content: "Connect with Fiverr’s team and community",
    },
    {
      title: "Guides",
      content: "In-depth guides covering business topics",
    },
    {
      title: "Podcast",
      content: "Inside tips from top business minds",
    },
    {
      title: "Learn",
      content: "Professional online courses, led by experts",
    },
    {
      title: "Blog",
      content: "News, information and community stories",
    },
    {
      title: "Logo Maker",
      content: "Create your logo instantly",
    },
  ];
  const languages = [
    "✔️ English",
    "Deutsch",
    "Español",
    "Français",
    "Português",
    "Italiano",
    "Nederlands",
    "Việt Nam",
  ];
  const currency = [
    {
      name: "Euro",
      symbol: "EUR - €",
    },
    {
      name: "British Pound",
      symbol: "GBP - £",
    },
    {
      name: "Australian Dollar",
      symbol: "AUD - A$",
    },
    {
      name: "Indian Rupee",
      symbol: "INR - ₹",
    },
  ];
  const renderItem = (content, classCustom = "") => (
    <p
      className={`pl-7 py-2 cursor-pointer text-base text-gray-600 hover:bg-gray-100 duration-300 ${classCustom}`}
    >
      {content}
    </p>
  );
  const itemsFiverrPro = [
    {
      key: "1",
      label: (
        <div className="flex gap-3 border rounded-lg p-5">
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/layout-service/hire-freelancer.e3fcf5a.svg"
            alt=""
          />
          <div>
            <h5 className="font-semibold text-base text-gray-700">
              I'm looking to hire
            </h5>
            <p className="font-medium text-gray-500">
              My team needs vetted freelance talent and a premium business
              solution.
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex gap-3 border rounded-lg p-5">
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/layout-service/iam-freelancer.6e3c275.svg"
            alt=""
          />
          <div>
            <h5 className="font-semibold text-base text-gray-700">
              I want to offer Pro services
            </h5>
            <p className="font-medium text-gray-500">
              I’d like to work on business projects as a Pro freelancer or
              agency.
            </p>
          </div>
        </div>
      ),
    },
  ];
  const itemsLanguage = [
    {
      key: "1",
      label: "Language",
      children: languages.map((item, index) =>
        renderItem(item, !index ? "pl-[1px]" : "")
      ),
    },
    {
      key: "2",
      label: "Currency",
      children: (
        <>
          <div className="cursor-pointer p-2 text-gray-600 hover:bg-gray-100 duration-300 flex items-center">
            ✔️
            <div className="ml-2">
              <p className="text-black text-base font-semibold">
                United States Dollar
              </p>
              <p className="text-base">USD - $</p>
            </div>
          </div>
          {currency.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer pl-9 py-2 text-gray-600 hover:bg-gray-100 duration-300"
            >
              <p className="text-black text-base font-semibold">{item.name}</p>
              <p className="text-base">{item.symbol}</p>
            </div>
          ))}
        </>
      ),
    },
  ];
  const itemsCollapse = [
    {
      key: "1",
      label: "Browse categories",
      children: listProducts.map((item) => renderItem(item.name)),
    },
    {
      key: "2",
      label: "Explore",
      children: explore.map((item) => renderItem(item.title)),
    },
    {
      key: "3",
      label: "Fiverr Pro",
      children: (
        <>
          {renderItem("I'm looking to hire")}
          {renderItem("I want to offer Pro services")}
        </>
      ),
    },
  ];

  const toggleDrawer = () => setOpen((prev) => !prev);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="bg-white py-5 font-medium border-b sticky top-0 z-10">
        <div className="container px-2">
          <div className="header_content flex items-center justify-between">
            <Button className="lg:hidden" onClick={toggleDrawer}>
              <MenuUnfoldOutlined />
            </Button>
            <Drawer
              title={
                <Link
                  to={pathDefault.register}
                  className={
                    "px-6 py-3 bg-black text-white rounded-md text-base font-semibold hover:text-white hover:opacity-80 duration-300"
                  }
                >
                  Join Fiverr
                </Link>
              }
              placement="left"
              onClose={toggleDrawer}
              open={open}
            >
              <Link
                to={pathDefault.login}
                className={
                  "block pl-4 py-3 rounded cursor-pointer text-base text-gray-600 hover:text-gray-600 hover:bg-gray-100 duration-300"
                }
              >
                Sign in
              </Link>
              <Collapse
                className="text-base"
                ghost
                expandIconPosition="end"
                items={itemsCollapse}
              />
              <h4 className="mt-10 ml-4 mb-4 text-base font-semibold">
                General
              </h4>
              <Link
                to={pathDefault.homePage}
                className={
                  "block pl-4 py-3 cursor-pointer text-base text-gray-600 hover:text-gray-600 hover:bg-gray-100 duration-300"
                }
              >
                Home
              </Link>
              <Collapse
                className="text-base"
                ghost
                expandIconPosition="end"
                items={itemsLanguage}
              />
            </Drawer>
            <div className="header_logo flex space-x-5">
              <Link to={pathDefault.homePage}>
                <IconLogoHeader />
              </Link>
              <FormSearch
                classWrapper={`lg:w-[470px] hidden lg:block ${
                  isScroll ? "visible" : "invisible"
                }`}
                classInput="rounded-md min-w-[400px]"
                classIcon="bg-black py-3 px-4"
                placeholder={"What service are you looking for today?"}
              />
            </div>
            <nav className="header_navigation space-x-4 hidden xl:block">
              <Dropdown
                menu={{
                  items: itemsFiverrPro,
                }}
                trigger={["click"]}
                className="cursor-pointer py-3 px-4 rounded-md hover:bg-gray-100 duration-300"
              >
                <a
                  className="font-semibold text-gray-700"
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    Fiverr Pro
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              <Dropdown
                menu={{
                  items: explore.map((item, index) => ({
                    key: index + 1,
                    label: (
                      <div>
                        <h5 className="font-semibold text-base text-gray-700">
                          {item.title}
                        </h5>
                        <p className="font-medium text-gray-500">
                          {item.content}
                        </p>
                      </div>
                    ),
                  })),
                }}
                trigger={["click"]}
                className="cursor-pointer py-3 px-4 rounded-md hover:bg-gray-100 duration-300"
              >
                <a
                  className="font-semibold text-gray-500"
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    Explore
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              <button
                onClick={toggleModal}
                className="font-semibold text-gray-500 hover:text-green-500 duration-300"
              >
                <span className="flex justify-between w-[74px]">
                  <GlobalOutlined /> English
                </span>
              </button>
              <Modal
                centered
                title="Select your preferences"
                footer={[
                  <Button key="ok" type="primary" onClick={toggleModal}>
                    OK
                  </Button>,
                ]}
                open={isModalOpen}
                onOk={toggleModal}
                onCancel={toggleModal}
              >
                <Tabs defaultActiveKey="1" items={itemsLanguage}></Tabs>
              </Modal>
              <Link className="font-semibold text-gray-500 hover:text-green-500 duration-300">
                Become a Seller
              </Link>
              <Link
                to={pathDefault.login}
                className={
                  "font-semibold text-gray-500 hover:text-green-500 duration-300"
                }
              >
                Sign in
              </Link>
            </nav>
            <Link
              to={pathDefault.register}
              className={
                "py-2 px-4 font-semibold rounded border border-green-600 text-green-600 hover:bg-green-600 hover:text-white duration-300"
              }
            >
              Join
            </Link>
          </div>
        </div>
      </header>
      {isScroll && <Navbar />}
    </>
  );
};

export default Header;
