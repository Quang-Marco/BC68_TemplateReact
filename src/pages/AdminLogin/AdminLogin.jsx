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
import { useNavigate } from "react-router-dom";
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
        password: string().required(notiValidation.empty),
        //   .matches(
        //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        //     notiValidation.password
        //   ),
      }),
    });
  return (
    <div className="container">
      <div className="admin_login h-screen flex items-center">
        <div className="admin_login_animation w-1/2">{View}</div>
        <div className="admin_login_form w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1>Trang đăng nhập cho admin</h1>
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
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.password}
              touched={touched.password}
            />
            <div>
              <button
                type="submit"
                className="bg-black text-white py-2 px-5 rounded-lg inline-block w-full hover:bg-green-500 duration-300"
              >
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
