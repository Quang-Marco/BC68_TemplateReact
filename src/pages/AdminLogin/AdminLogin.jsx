import React, { useContext } from "react";
import InputCustom from "../../components/Input/InputCustom";
import signinAnimation from "./../../assets/animation/signinAnimation.json";
import { useLottie } from "lottie-react";
import { useFormik } from "formik";
import { object, string } from "yup";
import { notiValidation } from "../../common/notiValidation";
import { authService } from "../../services/auth.service";
import { NotificationContext } from "../../App";
import { getLocalStorage, setLocalStorage } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setValueUser } from "../../redux/authSlice";
import { pathDefault } from "../../common/path";

const AdminLogin = () => {
  const options = {
    animationData: signinAnimation,
    loop: true,
  };
  const { View } = useLottie(options);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleNotification } = useContext(NotificationContext);
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log(values);
        authService
          .signIn(values)
          .then((res) => {
            console.log(res);
            if (res.data.content.user.role == "USER") {
              handleNotification("Bạn không được phép truy cập", "error");
              let viPham = getLocalStorage("viPham");
              if (!viPham) {
                setLocalStorage("viPham", 1);
              } else {
                viPham++;
                viPham == 3
                  ? (window.location.href = "https://google.com")
                  : setLocalStorage("viPham", viPham);
              }
            } else {
              setLocalStorage("user", res.data.content);
              dispatch(setValueUser(res.data.content));
              localStorage.removeItem("viPham");
              navigate(pathDefault.admin);
            }
          })
          .catch((err) => {
            console.log(err);
            handleNotification(err.response.data.content, "error");
          });
      },
      validationSchema: object({
        email: string()
          .required(notiValidation.empty)
          .email(notiValidation.email),
        password: string()
          .required(notiValidation.empty)
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            notiValidation.password
          ),
      }),
    });
  const hasErrorE = Boolean(errors.email && touched.email);
  const hasErrorP = Boolean(errors.password && touched.password);
  return (
    <>
      <div className="loginPage ">
        <div className="container ">
          <div className="loginPage_content h-screen  ">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:mx-32  mx-3 lg:h-full  rounded-lg lg:backdrop-blur-sm  backdrop-blur-lg  bg-green-700/10 relative">
              <div className="loginPage_img hidden lg:block">{View}</div>
              <div className=" md:hidden block">
                <img
                  className=""
                  src="https://kiemtienonlinehub.com/wp-content/uploads/2022/10/icons8-fiverr-500.png"
                  alt=""
                />
              </div>
              <div className="loginPage_form rounded-md bg-transparent">
                <form onSubmit={handleSubmit} className="space-y-5   ">
                  <h1 className="text-3xl font-semibold lg:font-bold lg:text-[#013A12] text-white lg:text-4xl text-center">
                    ADMIN LOGIN
                  </h1>
                  <div className="grid grid-cols-10 px-7 lg:px-5 relative w-full">
                    <InputCustom
                      classWrapper={`col-span-9 pr-10 ${
                        hasErrorE ? "pb-6" : ""
                      }`}
                      contentLabel="Email"
                      placeholder="Enter your email address"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors.email}
                      touched={touched.email}
                    />
                    <div
                      className={`absolute right-10 text-green-300 text-4xl transition-all duration-200 ease-in-out ${
                        hasErrorE
                          ? "top-1/2 -translate-y-3/4"
                          : "top-3/4 -translate-y-1/2"
                      }`}
                    >
                      <i className="fa-solid fa-user"></i>
                    </div>
                  </div>
                  <div className="grid grid-cols-10 px-7 lg:px-5 relative w-full">
                    <InputCustom
                      classWrapper={`col-span-9 pr-10 ${
                        hasErrorP ? "pb-6" : ""
                      }`}
                      contentLabel="Password"
                      placeholder="Enter your password"
                      name="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors.password}
                      touched={touched.password}
                    />
                    <div
                      className={`absolute right-10  text-green-300 text-4xl transition-all duration-200 ease-in-out ${
                        hasErrorP
                          ? "top-1/2 -translate-y-3/4"
                          : "top-3/4 -translate-y-1/2"
                      }`}
                    >
                      <i className="fa-solid fa-lock"></i>
                    </div>
                  </div>
                  <div className="text-center px-7 pt-3  space-y-3 lg:space-y-6 lg:pt-5 lg:px-5">
                    <button
                      type="submit"
                      className="inline-block text-2xl lg:text-xl w-full btnDn py-3 px-5  bg-black text-white rounded-md hover:bg-green-500 duration-300"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
