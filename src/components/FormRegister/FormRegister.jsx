import React, { useContext } from "react";
import InputCustom from "../Input/InputCustom";
import { DatePicker } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { notiValidation } from "../../common/notiValidation";
import { authService } from "../../services/auth.service";
import { NotificationContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { pathDefault } from "../../common/path";

const FormRegister = () => {
  const { handleNotification } = useContext(NotificationContext);
  const navigate = useNavigate();
  const {
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    values,
    setFieldValue,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: "",
    },
    onSubmit: (values) => {
      console.log(values);
      authService
        .signUp({
          ...values,
          gender: values.gender == "Nam" ? true : false,
        })
        .then((res) => {
          console.log(res);
          handleNotification(
            "Tạo tài khoản thành công, bạn sẽ được chuyển hướng đến trang đăng nhập",
            "success"
          );
          setTimeout(() => {
            navigate(pathDefault.login);
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          handleNotification(err.response.data.content, "error");
        });
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required(notiValidation.empty)
        .matches(/^[^\d0-9]*$/, "Please enter a name without numbers"),
      email: Yup.string()
        .required(notiValidation.empty)
        .email(notiValidation.email),
      password: Yup.string()
        .required(notiValidation.empty)
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          notiValidation.password
        ),
      phone: Yup.string()
        .required(notiValidation.empty)
        .matches(/^(0|\+84)[3|5|7|8|9][0-9]{8}$/, notiValidation.phone),
      birthday: Yup.string().required(notiValidation.empty),
      gender: Yup.string().required(notiValidation.empty),
    }),
  });
  return (
    <div className="flex items-center justify-center flex-col h-full ">
      <div className="container px-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-[#013A12] text-white">
          <Link
            className="hover:opacity-70 duration-300"
            to={pathDefault.homePage}
          >
            <i className="fa-solid fa-house"></i>
          </Link>{" "}
          REGISTER
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="lg:flex lg:flex-wrap  grid grid-cols-1 space-y-3 lg:space-y-0">
            <InputCustom
              contentLabel="Full name"
              name="name"
              placeholder="Enter your full name"
              classWrapper="lg:w-1/2 lg:p-3 w-full"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.name}
              touched={touched.name}
            />
            <InputCustom
              contentLabel="Email"
              name="email"
              placeholder="Enter your email address"
              classWrapper="lg:w-1/2 lg:p-3 w-full"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.email}
              touched={touched.email}
            />
            <InputCustom
              contentLabel="Password"
              name="password"
              placeholder="Enter your password"
              classWrapper="lg:w-full lg:p-3 w-full"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.password}
              touched={touched.password}
            />
            <InputCustom
              contentLabel="Phone number"
              name="phone"
              placeholder="Enter your phone number"
              classWrapper="lg:w-1/3 lg:p-3 w-full"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.phone}
              touched={touched.phone}
            />
            <div className="lg:w-1/3 lg:p-3 w-full">
              <label className="block mb-2 text-sm font-medium">
                Date of birth
              </label>
              <DatePicker
                className="w-full"
                format="DD-MM-YYYY"
                onChange={(date, dateString) => {
                  // DatePicker của AntDesign ko có thuộc tính name nên mới phải setFieldValue
                  setFieldValue("birthday", dateString);
                }}
              />
              {errors.birthday && touched.birthday && (
                <p className="text-red-500 mt-2">{errors.birthday}</p>
              )}
            </div>
            <div className="lg:w-1/3 lg:p-3 w-full">
              <label className="block mb-2 text-sm font-medium">Gender</label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="gender"
                value={values.gender}
                onChange={handleChange}
              >
                <option value="">Gender</option>
                <option value="Nam">Male</option>
                <option value="Nữ">Female</option>
              </select>
              {errors.gender && touched.gender && (
                <p className="text-red-500 mt-2">{errors.gender}</p>
              )}
            </div>
            <div className="w-full m-3 text-center">
              <button
                type="submit"
                className="lg:py-3 lg:px-6 mt-2 lg:mt-0 w-3/4 py-4 px-5 text-2xl lg:text-xl bg-black text-white  lg:w-full duration-300"
              >
                Register
              </button>
              <div className="text-white lg:text-xl mt-5">
                Have an account?{" "}
                <Link
                  to={pathDefault.login}
                  className="text-blue-700 font-bold lg:font-medium hover:underline"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
