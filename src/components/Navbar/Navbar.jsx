import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { getListJobs } from "../../redux/congViecSlice";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { pathDefault } from "../../common/path";

const Navbar = () => {
  const dispatch = useDispatch();
  const { listJobs } = useSelector((state) => state.congViecSlice);

  useEffect(() => {
    dispatch(getListJobs());
  }, []);

  return (
    <section className="bg-white w-screen border-b fixed top-[89px] pt-3 z-10 hidden lg:block">
      <div className="container">
        <div className="flex justify-between gap-4">
          {listJobs.slice(0, 9).map((parent, parentIndex) => (
            <Dropdown
              key={parentIndex + 1}
              menu={{
                items: parent.dsNhomChiTietLoai.map((child, childIndex) => ({
                  key: `${parentIndex + 1}-${childIndex + 1}`,
                  type: "group",
                  label: child.tenNhom,
                  children: child.dsChiTietLoai.map(
                    (subchild, subchildIndex) => ({
                      key: `${parentIndex + 1}-${
                        childIndex + 1
                      }-${subchildIndex}`,
                      label: (
                        <Link
                          to={`${pathDefault.listJob}?maChiTietLoai=${subchild.id}`}
                        >
                          {subchild.tenChiTiet}
                        </Link>
                      ),
                    })
                  ),
                })),
              }}
              className="text-gray-600 cursor-pointer pb-2 border-b-[3px] border-white duration-300"
            >
              <Space>
                <Link
                  className="hover:text-gray-500"
                  to={`${pathDefault.listJob}?maLoaiCongViec=${parent.id}`}
                >
                  {parent.tenLoaiCongViec}
                </Link>
              </Space>
            </Dropdown>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
