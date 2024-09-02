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
      {isScroll && (
        <section className="bg-white w-screen border-b fixed top-[85px] pt-3 z-10 hidden lg:block">
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
        </section>
      )}
    </>
  );
};

export default Navbar;
