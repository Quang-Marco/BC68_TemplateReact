import React, { useEffect, useState, useMemo, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { congViecService } from "../../services/congViec.service";
import { pathDefault } from "../../common/path";
import { Breadcrumb, Modal } from "antd";
import {
  ArrowRightOutlined,
  HomeOutlined,
  PlayCircleFilled,
} from "@ant-design/icons";

const ListJobPage = () => {
  const { listDetailsJobs } = useSelector((state) => state.congViecSlice);
  const [listJob, setListJob] = useState([]);
  const [listJobGroup, setListJobGroup] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParam] = useSearchParams();
  const tenCongViec = searchParam.get("tenCongViec");
  const idJob = searchParam.get("idJob");
  const idDetailsJob = searchParam.get("idDetails");
  const commonElements = useMemo(
    () => listDetailsJobs.find((item) => item.id == idJob),
    [idJob]
  );

  const showModal = () => setIsModalOpen(true);
  const videoRef = useRef(null);
  const handleCancel = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const fetchData = async () => {
    try {
      if (tenCongViec) {
        const res = await congViecService.layCongViecTheoTen(tenCongViec);
        setListJob(res.data.content);
      }
      if (idJob) {
        const res = await congViecService.layChiTietCongViec(idJob);
        setListJobGroup(res.data.content);
      }
      if (idDetailsJob) {
        const res = await congViecService.layCongViecTheoChiTietLoai(
          idDetailsJob
        );
        setListJob(res.data.content);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [tenCongViec, idJob, idDetailsJob]);

  const renderListJob = (jobs) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
      {jobs.map((item, index) => (
        <div key={index} className="border border-gray-300 rounded-xl">
          <img
            className="w-full rounded-xl"
            src={item.congViec?.hinhAnh}
            alt="hình ảnh công việc"
          />
          <div className="p-3 h-36 flex flex-col justify-between">
            <div className="flex space-x-3 items-center">
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
            <h3>{item.congViec?.tenCongViec}</h3>
            <div className="space-x-2">
              <i className="fa-solid fa-star text-yellow-500"></i>
              <span className="text-yellow-500">
                {item.congViec?.saoCongViec}
              </span>
              <span className="text-gray-400">({item.congViec?.danhGia})</span>
            </div>
          </div>
          <div className="flex items-center justify-between px-2 border-t border-t-gray-300">
            <i className="fa-solid fa-heart"></i>
            <div className="space-x-3">
              <span className="uppercase">Starting at</span>
              <span>{item.congViec?.giaTien}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Navbar />
      <section className="mt-10 lg:mt-20">
        <div className="container px-2">
          {tenCongViec && (
            <>
              <h2 className="text-xl sm:text-2xl lg:text-3xl">
                Result for{" "}
                <span className="font-semibold">"{tenCongViec}"</span>
              </h2>
              {renderListJob(listJob)}
            </>
          )}
          {idJob && commonElements && (
            <>
              <Breadcrumb
                items={[
                  {
                    title: (
                      <Link to={pathDefault.homePage}>
                        <HomeOutlined />
                      </Link>
                    ),
                  },
                  {
                    title: new Set(
                      listJobGroup.map((item) => item.tenLoaiCongViec)
                    ),
                  },
                ]}
              />
              <div
                style={{
                  background: `url(${commonElements.bgURL}) no-repeat center / cover`,
                }}
                className="h-60 rounded-lg flex flex-col items-center justify-center gap-3 mt-5"
              >
                <h2 className="text-2xl lg:text-3xl text-white font-semibold">
                  {commonElements.name}
                </h2>
                <p className="text-lg lg:text-xl text-white">
                  {commonElements.content}
                </p>
                <button
                  className="py-3 px-4 rounded-lg border border-white text-white hover:bg-white hover:text-black duration-300"
                  onClick={showModal}
                >
                  <PlayCircleFilled /> How Fiverr Works
                </button>
                <Modal
                  width={800}
                  centered
                  styles={{
                    content: {
                      padding: "0px",
                    },
                  }}
                  footer={null}
                  open={isModalOpen}
                  onCancel={handleCancel}
                >
                  <video
                    ref={videoRef}
                    className="rounded-lg h-80 sm:h-96 md:h-[440px] lg:h-[500px] w-full object-cover"
                    controls
                    autoPlay
                    poster="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/ef51b45f79342925d5268e0b2377eae8-1704717764992/thumbnail.png"
                    src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/e0f330e4c8d6e3bf843a3bd3164fa275-1706087048062/How%20Fiverr%20Works%20EN%20Subs%2016x9"
                  ></video>
                </Modal>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold mt-10 mb-5">
                Explore {commonElements.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {listJobGroup.flatMap((parent) =>
                  parent.dsNhomChiTietLoai.map((child, childIndex) => (
                    <div key={childIndex + 1}>
                      <img
                        className="rounded-xl lg:max-h-60 w-full"
                        src={child.hinhAnh}
                      />
                      <h4 className="text-xl font-semibold my-5">
                        {child.tenNhom}
                      </h4>
                      {child.dsChiTietLoai.map((subChild, subChildIndex) => (
                        <div key={subChildIndex + 1}>
                          <Link
                            to={`${pathDefault.listJob}?idDetails=${subChild.id}`}
                            className="text-gray-600 p-3 rounded-md cursor-pointer flex justify-between hover:bg-gray-100 duration-300"
                          >
                            {subChild.tenChiTiet} <ArrowRightOutlined />
                          </Link>
                        </div>
                      ))}
                    </div>
                  ))
                )}
              </div>
            </>
          )}
          {idDetailsJob && (
            <>
              <Breadcrumb
                items={[
                  {
                    title: (
                      <Link to={pathDefault.homePage}>
                        <HomeOutlined />
                      </Link>
                    ),
                  },
                  {
                    title: new Set(listJob.map((item) => item.tenLoaiCongViec)),
                  },
                  {
                    title: new Set(listJob.map((item) => item.tenChiTietLoai)),
                  },
                ]}
              />
              <h2 className="text-2xl lg:text-3xl font-semibold mt-5">
                {new Set(listJob.map((item) => item.tenChiTietLoai))}
              </h2>
              {renderListJob(listJob)}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ListJobPage;
