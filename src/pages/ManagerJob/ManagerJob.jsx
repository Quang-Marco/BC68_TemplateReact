import React, { useContext, useEffect, useState } from "react";
import { Modal, Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";

const ManagerJob = () => {
  const { listJobs } = useSelector((state) => state.congViecSlice);
  console.log(listJobs);
  const columns = [
    {
      title: "Mã loại công việc",
      dataIndex: "maLoaiCongViec",
      key: "maLoaiCongViec",
    },
    {
      title: "Mã chi tiết loại",
      dataIndex: "maChiTietLoai",
      key: "maChiTietLoai",
    },

    {
      title: "Mã công việc",
      dataIndex: "maCongViec",
      key: "maCogViec",
    },
    {
      title: "Tên công việc",
      dataIndex: "tenCongViec",
      key: "tenCongViec",
    },
    {
      title: "Mức lương",
      dataIndex: "giaTien",
      key: "giaTien",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button className="bg-red-500 text-white py-2 px-5 rounded-md hover:bg-red-500/80 duration-300">
            Xóa
          </button>
          <button className="bg-yellow-500 text-white py-2 px-5 rounded-md hover:bg-yellow-500/80 duration-300">
            Sửa
          </button>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={listJobs} />;
};

export default ManagerJob;
