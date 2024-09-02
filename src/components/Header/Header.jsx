import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconLogoHeader from "../Icon/IconLogoHeader";
import { pathDefault } from "../../common/path";
import LinkCustom from "../LinkCustom/LinkCustom";
import "./header.scss";
import FormSearch from "../FormSearch/FormSearch";
import {
  DownOutlined,
  MenuUnfoldOutlined,
  GlobalOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import { Button, Collapse, Drawer, Dropdown, Modal, Space, Tabs } from "antd";

const Header = () => {
  const renderLanguage = (content, classCustom) => (
    <p
      className={`pl-7 py-2 cursor-pointer text-base text-gray-600 hover:bg-gray-100 duration-300 ${classCustom}`}
    >
      {content}
    </p>
  );
  const renderCurrency = (name, content) => (
    <div className="cursor-pointer pl-8 py-2 text-gray-600 hover:bg-gray-100 duration-300">
      <p className="text-black text-base font-semibold">{name}</p>
      <p className="text-base">{content}</p>
    </div>
  );
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
  const itemsLanguage = [
    {
      key: "1",
      label: "Language",
      children: (
        <>
          <p className="p-2 cursor-pointer text-base text-gray-600 hover:bg-gray-100">
            <CheckCircleFilled /> English
          </p>
          {renderLanguage("Deutsch")}
          {renderLanguage("Español")}
          {renderLanguage("Français")}
          {renderLanguage("Português")}
          {renderLanguage("Italiano")}
          {renderLanguage("Nederlands")}
          {renderLanguage("Việt Nam")}
        </>
      ),
    },
    {
      key: "2",
      label: "Currency",
      children: (
        <>
          <div className="cursor-pointer p-2 text-gray-600 hover:bg-gray-100 flex">
            {<CheckCircleFilled />}
            <div className="ml-2">
              <p className="text-black text-base font-semibold">
                United States Dollar
              </p>
              <p className="text-base">USD - $</p>
            </div>
          </div>
          {renderCurrency("Euro", "EUR - €")}
          {renderCurrency("British Pound", "GBP - £")}
          {renderCurrency("Australian Dollar", "AUD - A$")}
          {renderCurrency("Indian Rupee", "INR - ₹")}
        </>
      ),
    },
  ];
  const itemsCollapse = [
    {
      key: "1",
      label: "Browse categories",
      children: (
        <>
          {renderLanguage("Programming & Tech")}
          {renderLanguage("Graphics & Design")}
          {renderLanguage("Digital Marketing")}
          {renderLanguage("Writing & Translation")}
          {renderLanguage("LearnVideo & Animation")}
          {renderLanguage("AI Services")}
          {renderLanguage("Music & Audio")}
          {renderLanguage("Business")}
          {renderLanguage("Consulting")}
        </>
      ),
    },
    {
      key: "2",
      label: "Explore",
      children: (
        <>
          {renderLanguage("Discover")}
          {renderLanguage("Community")}
          {renderLanguage("Guides")}
          {renderLanguage("Podcast")}
          {renderLanguage("Learn")}
          {renderLanguage("Blog")}
          {renderLanguage("Logo Maker")}
        </>
      ),
    },
    {
      key: "3",
      label: "Fiverr Pro",
      children: (
        <>
          {renderLanguage("I'm looking to hire")}
          {renderLanguage("I want to offer Pro services")}
        </>
      ),
    },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
          <Button onClick={showDrawer}>
            <MenuUnfoldOutlined />
          </Button>
          <Drawer
            title={
              <LinkCustom
                content="Join Fiverr"
                to={pathDefault.register}
                className={
                  "px-6 py-3 bg-black text-white rounded-md text-base font-semibold hover:text-white hover:opacity-80 duration-300"
                }
              />
            }
            placement="left"
            onClose={onClose}
            open={open}
          >
            <LinkCustom
              content={"Sign in"}
              to={pathDefault.login}
              className={
                "block pl-4 py-3 cursor-pointer text-base text-gray-600 hover:text-gray-600 hover:bg-gray-100 duration-300"
              }
            />
            <Collapse
              className="text-base"
              ghost
              expandIconPosition="end"
              items={itemsCollapse}
            />
            <h4 className="mt-10 ml-4 mb-4 text-base font-semibold">General</h4>
            <LinkCustom
              content={"Home"}
              to={pathDefault.homePage}
              className={
                "block pl-4 py-3 cursor-pointer text-base text-gray-600 hover:text-gray-600 hover:bg-gray-100 duration-300"
              }
            />
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
            <button
              onClick={showModal}
              className="font-semibold text-gray-500 hover:text-green-500 duration-300"
            >
              <GlobalOutlined /> English
            </button>
            <Modal
              centered
              title="Select your preferences"
              footer={[
                <Button key="ok" type="primary" onClick={handleOk}>
                  OK
                </Button>,
              ]}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Tabs defaultActiveKey="1" items={itemsLanguage}></Tabs>
            </Modal>
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
              "py-2 px-4 font-semibold border border-green-600 text-green-600 hover:bg-green-600 hover:text-white duration-300"
            }
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
