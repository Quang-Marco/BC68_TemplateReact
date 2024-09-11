import React, { useContext } from "react";
import signinAnimation from "./../../assets/animation/signinAnimation.json";
import InputCustom from "../../components/Input/InputCustom";
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
  return (
    <>
      <div className="container px-2">
        <div className="loginPage_content grid grid-cols-1 lg:grid-cols-2 items-center h-screen">
          <div className="loginPage_img">{View}</div>
          <div className="loginPage_form">
            <form onSubmit={handleSubmit} className="space-y-5">
              <h1 className="text-3xl lg:text-4xl font-medium text-center">
                Giao diện đăng nhập
              </h1>
              <InputCustom
                contentLabel="Email"
                placeholder="Vui lòng nhập email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.email}
                touched={touched.email}
              />
              <InputCustom
                contentLabel="Mật khẩu"
                placeholder="Vui lòng nhập mật khẩu"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.password}
                touched={touched.password}
              />
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block w-full py-3 px-5 bg-black text-white rounded-md hover:bg-green-500 duration-300"
                >
                  Đăng nhập
                </button>
                <Link
                  to={pathDefault.register}
                  className="text-blue-600 inline-block mt-5 hover:underline duration-300"
                >
                  Chưa có tài khoản? Nhấn vào đây để đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
