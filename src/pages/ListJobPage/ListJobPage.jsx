import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { congViecService } from "../../services/congViec.service";
import Navbar from "../../components/Navbar/Navbar";

const ListJobPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [listJob, setListJob] = useState([]);
  const renderListJob = () => {
    return (
      <div className="grid grid-cols-4 gap-5">
        {listJob.map((item, index) => {
          return (
            <div key={index} className="border border-gray-300">
              <img
                className="w-full"
                src={item.congViec.hinhAnh}
                alt="hình ảnh công việc"
              />
              <div className="flex space-x-3 items-center mt-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={item.avatar}
                  alt="avatar"
                />
                <div>
                  <h4>{item.tenNguoiTao}</h4>
                  <p>Level 2</p>
                </div>
              </div>
              <div>
                <h3>{item.congViec.tenCongViec}</h3>
              </div>
              <div className="space-x-2">
                <i className="fa-solid fa-star text-yellow-500"></i>
                <span className="text-yellow-500">
                  {item.congViec.saoCongViec}
                </span>
                <span className="text-gray-400">({item.congViec.danhGia})</span>
              </div>
              <div className="flex items-center justify-between border-t border-t-gray-300">
                <i className="fa-solid fa-heart"></i>
                <div className="space-x-3">
                  <span className="uppercase">Starting at</span>
                  <span>{item.congViec.giaTien}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const tenCongViec = searchParam.get("tenCongViec");
  useEffect(() => {
    congViecService
      .layCongViecTheoTen(tenCongViec)
      .then((res) => {
        console.log(res);
        setListJob(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tenCongViec]);

  return (
    <div>
      <Navbar />
      {renderListJob()}
    </div>
  );
};

export default ListJobPage;
