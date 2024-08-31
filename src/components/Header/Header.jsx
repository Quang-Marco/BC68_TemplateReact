import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconLogoHeader from "../Icon/IconLogoHeader";
import { pathDefault } from "../../common/path";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import LinkCustom from "../LinkCustom/LinkCustom";
import "./header.scss";
import FormSearch from "../FormSearch/FormSearch";

const Header = () => {
  const renderItem = (title, content) => (
    <div>
      <h5 className="font-semibold text-base text-gray-700">{title}</h5>
      <p className="font-medium text-gray-500">{content}</p>
    </div>
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
          {renderItem(
            "I'm looking to hire",
            "My team needs vetted freelance talent and a premium business solution."
          )}
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
          {renderItem(
            "I want to offer Pro services",
            "I’d like to work on business projects as a Pro freelancer or agency."
          )}
        </div>
      ),
    },
  ];
  const itemsExplore = [
    {
      key: "1",
      label: renderItem("Discover", "Inspiring projects made on Fiverr"),
    },
    {
      key: "2",
      label: renderItem(
        "Community",
        "Connect with Fiverr’s team and community"
      ),
    },
    {
      key: "3",
      label: renderItem("Guides", "In-depth guides covering business topics"),
    },
    {
      key: "4",
      label: renderItem("Podcast", "Inside tips from top business minds"),
    },
    {
      key: "5",
      label: renderItem("Learn", "Professional online courses, led by experts"),
    },
    {
      key: "6",
      label: renderItem("Blog", "News, information and community stories"),
    },
    {
      key: "7",
      label: renderItem("Logo Maker", "Create your logo instantly"),
    },
  ];
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
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
    <header className="bg-white py-5 font-medium border-b sticky top-0 z-10">
      <div className="container px-2">
        <div className="header_content flex items-center justify-between">
          <div className="header_logo flex space-x-5">
            <Link to={pathDefault.homePage}>
              <IconLogoHeader />
            </Link>
            <FormSearch
              classWrapper={`w-[150px] lg:w-[470px] ${
                isScroll ? "invisible lg:visible" : "invisible"
              }`}
              placeholder={"What service are you looking for today?"}
              classInput="rounded-md min-w-[400px]"
            />
          </div>
          <nav className="header_navigation space-x-4 hidden lg:block">
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
                items: itemsExplore,
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
            <button className="font-semibold text-gray-500 hover:text-green-500 duration-300">
              <i class="fa-light fa-globe"></i> English
            </button>
            <a
              href="#"
              className="font-semibold text-gray-500 hover:text-green-500 duration-300"
            >
              Become a Seller
            </a>
            <LinkCustom
              content={"Sign in"}
              to={pathDefault.login}
              className={
                "font-semibold text-gray-500 hover:text-green-500 duration-300"
              }
            />
          </nav>
          <LinkCustom
            content="Join"
            to={pathDefault.register}
            className={
              "py-2 px-4 font-semibold border border-green-500 text-green-500 hover:bg-green-500 hover:text-white duration-300"
            }
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
