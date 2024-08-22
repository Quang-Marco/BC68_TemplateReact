import React from "react";
import { Link } from "react-router-dom";
import IconLogoHeader from "../Icon/IconLogoHeader";
import { pathDefault } from "../../common/path";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import LinkCustom from "../LinkCustom/LinkCustom";
import "./header.scss";
import FormSearch from "../FormSearch/FormSearch";

const Header = () => {
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
      icon: <SmileOutlined />,
      disabled: true,
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
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];
  return (
    <header className="py-5 font-medium">
      <div className="container">
        <div className="header_content flex items-center justify-between">
          <div className="header_logo flex space-x-5">
            <Link to={pathDefault.homePage}>
              <IconLogoHeader />
            </Link>
            <FormSearch />
          </div>
          <nav className="header_navigation space-x-5">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
              className="cursor-pointer py-3 px-4 rounded-md hover:bg-gray-100 duration-300"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Explore
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <button className="hover:text-green-600 duration-300">
              English
            </button>
            <a href="#" className="hover:text-green-600 duration-300">
              Become a Seller
            </a>
            <LinkCustom
              content={"Đăng nhập"}
              to={pathDefault.login}
              className={
                "border border-green-600 text-green-600 hover:bg-green-600 hover:text-white duration-300"
              }
            />
            <LinkCustom
              content="Đăng ký"
              to={pathDefault.register}
              className={
                "border border-green-600 bg-green-600 text-white hover:bg-white hover:text-green-600 duration-300"
              }
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
