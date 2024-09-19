import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs, getListJobs } from "../../redux/congViecSlice";

const ManagerJob = () => {
  const dispatch = useDispatch();
  const { listJobs, listAllJobs } = useSelector((state) => state.congViecSlice);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([dispatch(getListJobs()), dispatch(getAllJobs())]);
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (listJobs.length && listAllJobs.length) {
      const flattenData = () => {
        const flattenedData = [];
        listJobs.forEach((loaiCongViec) => {
          loaiCongViec.dsNhomChiTietLoai.forEach((nhomCongViec) => {
            nhomCongViec.dsChiTietLoai.forEach((chiTiet) => {
              flattenedData.push({
                key: chiTiet.id,
                tenLoaiCongViec: loaiCongViec.tenLoaiCongViec,
                tenNhom: nhomCongViec.tenNhom,
                tenChiTiet: chiTiet.tenChiTiet,
              });
            });
          });
        });
        const mergedData = flattenedData.map((item) => {
          const matchedJob = listAllJobs.find(
            (job) => job.maChiTietLoaiCongViec === item.key
          );
          if (matchedJob) {
            return {
              ...item,
              tenCongViec: matchedJob.tenCongViec,
              giaTien: matchedJob.giaTien,
              hinhAnh: matchedJob.hinhAnh,
            };
          }
          return item;
        });
        // console.log(mergedData);
        // console.log(flattenedData);
        setDataSource(mergedData);
      };
      flattenData();
    }
  }, [listJobs.length, listAllJobs.length]);

  const columns = [
    {
      title: "Type",
      dataIndex: "tenLoaiCongViec",
      key: "tenLoaiCongViec",
    },
    {
      title: "Group",
      dataIndex: "tenNhom",
      key: "tenNhom",
    },

    {
      title: "Branch",
      dataIndex: "tenChiTiet",
      key: "tenChiTiet",
    },
    {
      title: "Image",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (text) => (
        <img className="h-14" src={text} alt="hinhAnhCongViec" />
      ),
    },
    {
      title: "Job Name",
      dataIndex: "tenCongViec",
      key: "tenCongViec",
    },
    {
      title: "Salary",
      dataIndex: "giaTien",
      key: "giaTien",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button className="bg-red-500 text-white py-2 px-5 rounded-md hover:bg-red-500/80 duration-300">
            Remove
          </button>
          <button className="bg-yellow-500 text-white py-2 px-5 rounded-md hover:bg-yellow-500/80 duration-300">
            Edit info
          </button>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={dataSource} />;
};

export default ManagerJob;
