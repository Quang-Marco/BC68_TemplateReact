import React, { useEffect, useState, useMemo, useRef, useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { congViecService } from "../../services/congViec.service";
import { useSelector } from "react-redux";
import { pathDefault } from "../../common/path";
import { NotificationContext } from "../../App";
import { Breadcrumb, Card, Modal } from "antd";
import {
  ArrowRightOutlined,
  HomeOutlined,
  PlayCircleFilled,
  LikeOutlined,
  DislikeOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const ListJobPage = () => {
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();
  const { handleNotification } = useContext(NotificationContext);
  const listDetailsJobs = [
    {
      id: 1,
      bgURL:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/509f310d48d17eafe768a87f78d10af8-1688626459703/G_D-%20Desktop%20banner.png",
      name: t("listDetailsJobs.graphicsDesign.name"),
      content: t("listDetailsJobs.graphicsDesign.content"),
    },
    {
      id: 2,
      bgURL:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/0426b6ab656cedb4697336a530541d50-1688626333573/Digital%20Marketing-%20Desktop%20banner.png",
      name: t("listDetailsJobs.digitalMarketing.name"),
      content: t("listDetailsJobs.digitalMarketing.content"),
    },
    {
      id: 3,
      bgURL:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/6de5a002b40043ab739b6382daf94e37-1688626851418/W_T-%20Desktop%20banner.png",
      name: t("listDetailsJobs.writingTranslation.name"),
      content: t("listDetailsJobs.writingTranslation.content"),
    },
    {
      id: 4,
      bgURL:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/c5be9e1ff7a9c16910688aa6b7b5ffee-1688626700100/V_A-%20Desktop%20banner.png",
      name: t("listDetailsJobs.videoAnimation.name"),
      content: t("listDetailsJobs.videoAnimation.content"),
    },
    {
      id: 5,
      bgURL:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/509f310d48d17eafe768a87f78d10af8-1688626492933/M_A-%20Desktop%20banner.png",
      name: t("listDetailsJobs.musicAudio.name"),
      content: t("listDetailsJobs.musicAudio.content"),
    },
    {
      id: 1594,
      bgURL:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/509f310d48d17eafe768a87f78d10af8-1688626476769/Lifestyle-%20Desktop%20banner.png",
      name: t("listDetailsJobs.consulting.name"),
      content: t("listDetailsJobs.consulting.content"),
    },
    {
      id: 1595,
      bgURL:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/67119574fcb6178f7b270ef6e50d2ff5-1689143601915/Programming%20_%20Tech-%20desktop.png",
      name: t("listDetailsJobs.programmingTech.name"),
      content: t("listDetailsJobs.programmingTech.content"),
    },
    {
      id: 1596,
      bgURL:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/ef04c627fc0b8106e68dcf33fb4b4311-1688626107192/Business-%20Desktop%20banner.png",
      name: t("listDetailsJobs.business.name"),
      content: t("listDetailsJobs.business.content"),
    },
    {
      id: 1597,
      bgURL:
        "https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F3586cc12543444efa04361e4939185c1",
      name: t("listDetailsJobs.aiServices.name"),
      content: t("listDetailsJobs.aiServices.content"),
    },
  ];

  const [valueComment, setValueComment] = useState("");
  const [listJob, setListJob] = useState([]);
  const [listComment, setListComment] = useState([]);
  const [listJobGroup, setListJobGroup] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParam, setSearchParam] = useSearchParams();
  const tenCongViec = searchParam.get("tenCongViec");
  const maLoaiCongViec = searchParam.get("maLoaiCongViec");
  const maChiTietLoai = searchParam.get("maChiTietLoai");
  const maCongViec = searchParam.get("maCongViec");
  const commonElements = useMemo(
    () => listDetailsJobs.find((item) => item.id == maLoaiCongViec),
    [maLoaiCongViec]
  );

  const videoRef = useRef(null);
  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      // videoRef.current.currentTime = 0;
    }
  };

  const getCurrentDateTime = () => {
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, "0"); // Ngày
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Tháng
    const year = currentDate.getFullYear(); // Năm

    const hours = String(currentDate.getHours()).padStart(2, "0"); // Giờ
    const minutes = String(currentDate.getMinutes()).padStart(2, "0"); // Phút
    const seconds = String(currentDate.getSeconds()).padStart(2, "0"); // Giây

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      const token = user.token;
      const data = {
        maCongViec: maCongViec,
        maNguoiBinhLuan: user.user.id,
        noiDung: valueComment,
        ngayBinhLuan: getCurrentDateTime(),
        saoBinhLuan: 100,
      };
      congViecService
        .postBinhLuanCongViec(data, token)
        .then((res) => {
          console.log(res);
          setValueComment("");
          handleNotification(res.data.message, "success");
        })
        .catch((err) => console.log(err));
    } else {
      handleNotification(
        "Please log in to comment, redirecting to login page",
        "error"
      );
      setTimeout(() => {
        navigate(pathDefault.login);
      }, 3000);
    }
  };

  const fetchData = async () => {
    try {
      if (tenCongViec) {
        const res = await congViecService.layCongViecTheoTen(tenCongViec);
        setListJob(res.data.content);
      }
      if (maLoaiCongViec) {
        const res = await congViecService.layChiTietCongViec(maLoaiCongViec);
        setListJobGroup(res.data.content);
      }
      if (maChiTietLoai) {
        const res = await congViecService.layCongViecTheoChiTietLoai(
          maChiTietLoai
        );
        setListJob(res.data.content);
      }
      if (maCongViec) {
        const resJob = await congViecService.layCongViecChiTiet(maCongViec);
        setListJob(resJob.data.content);
        const resComment = await congViecService.layBinhLuanCongViec(
          maCongViec
        );
        setListComment(resComment.data.content);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const [offsetBottom, setOffsetBottom] = useState(0);
  const [activeTabKey, setActiveTabKey] = useState("tab1");
  const onTab1Change = (key) => {
    setActiveTabKey(key);
  };
  const tabList = [
    {
      key: "tab1",
      tab: <div className="w-20 md:w-44 lg:w-24 text-center">Basic</div>,
    },
    {
      key: "tab2",
      tab: <div className="w-20 md:w-44 lg:w-24 text-center">Standard</div>,
    },
    {
      key: "tab3",
      tab: <div className="w-20 md:w-44 lg:w-24 text-center">Premium</div>,
    },
  ];
  const contentList = {
    tab1: listJob.map((item, index) => (
      <div key={index + 1}>
        <p className="text-2xl font-bold">${item.congViec.giaTien}</p>
        <p className="text-base">
          Save up to 20% with{" "}
          <Link
            to={pathDefault.register}
            className="text-green-600 font-semibold"
          >
            Subscribe to Save
          </Link>
        </p>
        <p className="text-base my-5">
          <span className="font-bold">Basic Package</span> 2 initial concept for
          Logo design + unlimited revision + High Res file.
        </p>
        <div className="flex justify-between">
          <p className="mr-4">
            <ClockCircleOutlined /> 3-day delivery
          </p>
          <p>
            <i className="fa-regular fa-arrows-rotate-reverse"></i> Unlimited
            Revisions
          </p>
        </div>
        <button className="w-full py-3 mt-5 font-semibold rounded-lg text-white bg-black hover:opacity-70 duration-300">
          Continue
        </button>
      </div>
    )),
    tab2: listJob.map((item, index) => (
      <div key={index + 1}>
        <p className="text-2xl font-bold">${item.congViec.giaTien * 2}</p>
        <p className="text-base">
          Save up to 20% with{" "}
          <Link
            to={pathDefault.register}
            className="text-green-600 font-semibold"
          >
            Subscribe to Save
          </Link>
        </p>
        <p className="text-base my-5">
          <span className="font-bold">Stardard Package</span> 3 initial concept
          for logo design + unlimited revision + All Source files
        </p>
        <div className="flex justify-between">
          <p className="mr-4">
            <ClockCircleOutlined /> 3-day delivery
          </p>
          <p>
            <i className="fa-regular fa-arrows-rotate-reverse"></i> Unlimited
            Revisions
          </p>
        </div>
        <button className="w-full py-3 mt-5 font-semibold rounded-lg text-white bg-black hover:opacity-70 duration-300">
          Continue
        </button>
      </div>
    )),
    tab3: listJob.map((item, index) => (
      <div key={index + 1}>
        <p className="text-2xl font-bold">${item.congViec.giaTien * 3}</p>
        <p className="text-base">
          Save up to 20% with{" "}
          <Link
            to={pathDefault.register}
            className="text-green-600 font-semibold"
          >
            Subscribe to Save
          </Link>
        </p>
        <p className="text-base my-5">
          <span className="font-bold">Premium Package</span> 5 initial concept
          for logo design + unlimited revision + All Source files + Stationery
        </p>
        <div className="flex justify-between">
          <p className="mr-4">
            <ClockCircleOutlined /> 3-day delivery
          </p>
          <p>
            <i className="fa-regular fa-arrows-rotate-reverse"></i> Unlimited
            Revisions
          </p>
        </div>
        <button className="w-full py-3 mt-5 font-semibold rounded-lg text-white bg-black hover:opacity-70 duration-300">
          Continue
        </button>
      </div>
    )),
  };

  const renderListJob = (jobs) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
      {jobs.map((item, index) => (
        <Link key={index} to={`${pathDefault.listJob}?maCongViec=${item.id}`}>
          <div className="border border-gray-300 cursor-pointer rounded-xl hover:shadow-xl duration-300">
            <img
              className="w-full rounded-t-xl"
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
                  <h4 className="capitalize">{item.tenNguoiTao}</h4>
                  <p>Level 2</p>
                </div>
              </div>
              <h3>{item.congViec?.tenCongViec}</h3>
              <div className="space-x-2">
                <i className="fa-solid fa-star text-yellow-500"></i>
                <span className="text-yellow-500 font-semibold">
                  {item.congViec?.saoCongViec}
                </span>
                <span className="text-gray-500">
                  ({item.congViec?.danhGia})
                </span>
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
        </Link>
      ))}
    </div>
  );

  useEffect(() => {
    fetchData();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [tenCongViec, maLoaiCongViec, maChiTietLoai, maCongViec]);

  useEffect(() => {
    fetchData();
  }, [listComment]);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".footer");
      const footerTop = footer.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Tính toán vị trí giữa màn hình
      const componentHeight = 420; // Chiều cao component, tùy chỉnh theo thực tế
      const componentCenter = scrollTop + windowHeight / 2;

      // Nếu cạnh dưới của component gần chạm tới footer, đẩy nó lên
      if (componentCenter + componentHeight / 2 >= footerTop) {
        setOffsetBottom(componentCenter + componentHeight / 2 - footerTop + 20); // Thêm khoảng cách 20px với footer
      } else {
        setOffsetBottom(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

          {maLoaiCongViec && commonElements && (
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

              {listJobGroup.map((parent, parentIndex) => (
                <div key={parentIndex + 1}>
                  <h3 className="text-2xl lg:text-3xl font-semibold mt-10 mb-5">
                    Explore {parent.tenLoaiCongViec}
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
                          {child.dsChiTietLoai.map(
                            (subChild, subChildIndex) => (
                              <div key={subChildIndex + 1}>
                                <Link
                                  to={`${pathDefault.listJob}?maChiTietLoai=${subChild.id}`}
                                  className="text-gray-600 p-3 rounded-md cursor-pointer flex justify-between hover:bg-gray-100 duration-300"
                                >
                                  {subChild.tenChiTiet} <ArrowRightOutlined />
                                </Link>
                              </div>
                            )
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </>
          )}

          {maChiTietLoai && (
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

          {maCongViec && (
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

              {listJob.map((item, index) => (
                <div
                  key={index + 1}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-5"
                >
                  <div className="lg:col-span-2 lg:mr-10 xl:mr-32">
                    <h3 className="text-2xl lg:text-3xl font-semibold mt-5 lg:mt-10 mb-5">
                      {item.congViec.tenCongViec}
                    </h3>
                    <div className="flex space-x-3 items-center mb-5">
                      <img
                        className="w-16 h-16 rounded-full"
                        src={item.avatar}
                        alt="avatar"
                      />
                      <div className="space-y-1">
                        <div className="flex space-x-4">
                          <h4 className="capitalize text-lg font-semibold">
                            {item.tenNguoiTao}
                          </h4>
                          <span className="text-gray-300">|</span>
                          <p className="bg-orange-200 px-2 rounded space-x-1">
                            <span className="text-sm font-semibold">
                              Top Rated
                            </span>
                            <i className="fa-sharp fa-solid fa-diamond text-xs"></i>
                            <i className="fa-sharp fa-solid fa-diamond text-xs"></i>
                            <i className="fa-sharp fa-solid fa-diamond text-xs"></i>
                          </p>
                        </div>
                        <div className="flex space-x-4">
                          <span className="text-yellow-500 font-semibold">
                            <i className="fa-solid fa-star text-yellow-500"></i>{" "}
                            {item.congViec?.saoCongViec}{" "}
                            <span className="text-gray-500">
                              ({item.congViec.danhGia})
                            </span>
                          </span>
                          <span className="text-gray-300">|</span>
                          <p className="text-gray-500">7 orders in queue</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl cursor-pointer overflow-hidden">
                      <img
                        className="w-full rounded-xl hover:scale-105 duration-300"
                        src={item.congViec.hinhAnh}
                        alt="hình ảnh công việc"
                      />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-semibold mt-10 mb-5">
                      About this gig
                    </h3>
                    <div className="space-y-4">
                      <p className="text-gray-700">{item.congViec.moTa}</p>
                      <p className="text-gray-700">
                        As a native English Speaker, I provide Excellent
                        communication and promptness throughout the design
                        process.
                      </p>
                      <p className="text-gray-700">
                        If you have any questions or would like a custom quote
                        and free consultation, Please do not hesitate to reach
                        me out.
                      </p>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-semibold mt-10 mb-5">
                      Get to know{" "}
                      <span className="capitalize">{item.tenNguoiTao}</span>
                    </h3>
                    <div className="flex space-x-3 items-center mb-5">
                      <img
                        className="w-16 h-16 rounded-full"
                        src={item.avatar}
                        alt="avatar"
                      />
                      <div className="space-y-1">
                        <div className="flex space-x-4">
                          <h4 className="capitalize text-lg font-semibold">
                            {item.tenNguoiTao}
                          </h4>
                          <span className="text-gray-300">|</span>
                          <p className="bg-orange-200 px-2 rounded space-x-1">
                            <span className="text-sm font-semibold">
                              Top Rated
                            </span>
                            <i className="fa-sharp fa-solid fa-diamond text-xs"></i>
                            <i className="fa-sharp fa-solid fa-diamond text-xs"></i>
                            <i className="fa-sharp fa-solid fa-diamond text-xs"></i>
                          </p>
                        </div>
                        <div className="flex space-x-4">
                          <span className="text-yellow-500 font-semibold">
                            <i className="fa-solid fa-star text-yellow-500"></i>{" "}
                            {item.congViec?.saoCongViec}{" "}
                            <span className="text-gray-500">
                              ({item.congViec.danhGia})
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="px-5 py-2 mb-5 font-semibold bg-white border border-black rounded-md hover:text-white hover:bg-black duration-300">
                      Contact me
                    </button>
                    <div className="p-7 rounded-md border">
                      <div className="grid grid-cols-2 gap-5 pb-5 border-b">
                        <div>
                          <h5 className="text-gray-700">From</h5>
                          <p className="font-semibold">United States</p>
                        </div>
                        <div>
                          <h5 className="text-gray-700">Member since</h5>
                          <p className="font-semibold">Apr 2023</p>
                        </div>
                        <div>
                          <h5 className="text-gray-700">Avg. response time</h5>
                          <p className="font-semibold">1 hour</p>
                        </div>
                        <div>
                          <h5 className="text-gray-700">Last delivery</h5>
                          <p className="font-semibold">About 14 minutes</p>
                        </div>
                        <div>
                          <h5 className="text-gray-700">Languages</h5>
                          <p className="font-semibold">English</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mt-5">{item.congViec.moTa}</p>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-semibold mt-5 lg:mt-10 mb-5">
                      Reviews
                    </h3>

                    {/* Comment */}
                    {listComment.map((cmt, cmtIndex) => (
                      <div key={cmtIndex}>
                        <div className="p-7 rounded-md border space-y-5">
                          <div className="flex items-center space-x-3 pb-5 border-b">
                            <img
                              className="w-12 h-12 rounded-full"
                              src={cmt.avatar}
                              alt="avatar"
                            />
                            <h4 className="capitalize text-lg font-semibold">
                              {cmt.tenNguoiBinhLuan}
                            </h4>
                            <div className="flex space-x-4">
                              <span className="text-yellow-500 font-semibold">
                                <i className="fa-solid fa-star text-yellow-500"></i>{" "}
                                {cmt.saoBinhLuan}{" "}
                              </span>
                            </div>
                          </div>
                          <p className="">{cmt.noiDung}</p>
                          <div className="flex space-x-5 lg:space-x-10">
                            <div>
                              <h5 className="font-semibold">Up to $50</h5>
                              <p className="text-gray-700">Price</p>
                            </div>
                            <div>
                              <h5 className="font-semibold">
                                {cmt.ngayBinhLuan}
                              </h5>
                              <p className="text-gray-700">Duration</p>
                            </div>
                          </div>
                        </div>
                        <div className="font-semibold flex space-x-3 ml-5 mt-2 mb-5 sm:mb-10 lg:mb-20">
                          <p>Helpful?</p>
                          <button className="focus:text-green-600">
                            <LikeOutlined /> Yes
                          </button>
                          <button className="focus:text-red-600">
                            <DislikeOutlined /> No
                          </button>
                        </div>
                      </div>
                    ))}

                    {/* Form post comment */}
                    <form onSubmit={handleSubmit}>
                      <div className="flex">
                        <img
                          className="w-12 h-12 rounded-full mr-2"
                          src={user?.user.avatar}
                          alt="avatar"
                        />
                        <textarea
                          className="h-32 w-full p-3 border"
                          placeholder="Leave a recommendations here"
                          value={valueComment}
                          onChange={(e) => {
                            setValueComment(e.target.value);
                          }}
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-5 py-2 mt-5 rounded-lg text-white bg-green-600 hover:opacity-70 duration-300"
                      >
                        Add comment
                      </button>
                    </form>
                  </div>

                  {/* Card */}
                  <div
                    className="lg:fixed lg:right-14 xl:right-28 lg:-translate-y-1/2 lg:w-80 xl:w-[450px]"
                    style={{ top: `calc(50% - ${offsetBottom}px)` }}
                  >
                    <Card
                      tabList={tabList}
                      activeTabKey={activeTabKey}
                      onTabChange={onTab1Change}
                    >
                      {contentList[activeTabKey]}
                    </Card>
                    <div className="px-7">
                      <button className="w-full py-2 mt-10 font-semibold bg-white border border-black rounded-md hover:text-white hover:bg-black duration-300">
                        Contact me
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ListJobPage;
