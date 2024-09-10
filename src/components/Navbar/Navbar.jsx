import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Space } from "antd";
import { getListJobs } from "../../redux/congViecSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { listJobs } = useSelector((state) => state.congViecSlice);
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

  useEffect(() => {
    dispatch(getListJobs());
  }, []);

  return (
    <>
      {isScroll && (
        <section className="bg-white w-screen border-b fixed top-[85px] pt-3 z-10 hidden lg:block">
          <div className="container">
            <div className="flex justify-between gap-4">
              {listJobs.slice(0, 9).map((parent, parentIndex) => (
                <Dropdown
                  key={parentIndex + 1}
                  menu={{
                    items: parent.dsNhomChiTietLoai.map(
                      (child, childIndex) => ({
                        key: `${parentIndex + 1}-${childIndex + 1}`,
                        type: "group",
                        label: child.tenNhom,
                        children: child.dsChiTietLoai.map(
                          (subchild, subchildIndex) => ({
                            key: `${parentIndex + 1}-${
                              childIndex + 1
                            }-${subchildIndex}`,
                            label: subchild.tenChiTiet,
                          })
                        ),
                      })
                    ),
                  }}
                  className="text-gray-600 cursor-pointer pb-2 border-b-[3px] border-white duration-300"
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>{parent.tenLoaiCongViec}</Space>
                  </a>
                </Dropdown>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Navbar;
