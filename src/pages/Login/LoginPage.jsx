import React, { useContext } from "react";
import signinAnimation from "./../../assets/animation/signinAnimation.json";
import InputCustom from "../../components/Input/InputCustom";
import "./loginPage.scss";
import { useLottie } from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";
import { notiValidation } from "../../common/notiValidation";
import { authService } from "../../services/auth.service";
import { NotificationContext } from "../../App";
import { setLocalStorage } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { setValueUser } from "../../redux/authSlice";
import { pathDefault } from "../../common/path";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleNotification } = useContext(NotificationContext);
  const options = {
    animationData: signinAnimation,
    loop: true,
  };
  const { View } = useLottie(options);
  const {
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      // console.log(values);
      try {
        const result = await authService.signIn(values);
        console.log(result);
        setLocalStorage("user", result.data.content);
        dispatch(setValueUser(result.data.content));
        handleNotification(
          "Đăng nhập thành công, bạn sẽ được chuyển hướng về trang chủ",
          "success"
        );
        setTimeout(() => {
          navigate("/admin");
        }, 3000);
      } catch (err) {
        console.log(err);
        handleNotification(err.response.data.content, "error");
      }
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
      <div className="loginPage">
        <div className="container ">
          <div className="loginPage_content h-screen">
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
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold lg:font-bold lg:text-[#013A12] text-white text-center">
                    <Link
                      className="hover:opacity-70 duration-300"
                      to={pathDefault.homePage}
                    >
                      <i className="fa-solid fa-house"></i>
                    </Link>{" "}
                    LOGIN
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
                  <div className="text-center px-7 pt-3 space-y-3 lg:space-y-6 lg:pt-5 lg:px-5">
                    <button
                      type="submit"
                      className="inline-block text-2xl lg:text-xl w-full btnDn py-3 px-5  bg-black text-white rounded-md hover:bg-green-500 duration-300"
                    >
                      Login
                    </button>
                    <div className="text-white lg:text-xl mt-5">
                      No account yet?{" "}
                      <Link
                        to={pathDefault.register}
                        className="text-blue-700 font-bold lg:font-medium hover:underline duration-300"
                      >
                        Register
                      </Link>
                    </div>
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

export default LoginPage;
