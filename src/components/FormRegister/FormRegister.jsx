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
        .matches(/^[a-zA-Z\s-]+$/, "Vui lòng nhập tên không chứa số"),
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
      <h1 className="text-3xl lg:text-4xl font-bold lg:font-medium text-center lg:text-[#013A12] text-white">
        ĐĂNG KÝ TÀI KHOẢN
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="lg:flex lg:flex-wrap  grid grid-cols-1 space-y-3 lg:space-y-0">
          <InputCustom
            contentLabel="Họ tên"
            name="name"
            placeholder="Vui lòng nhập họ tên"
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
            placeholder="Vui lòng nhập email"
            classWrapper="lg:w-1/2 lg:p-3 w-full"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.email}
            touched={touched.email}
          />
          <InputCustom
            contentLabel="Mật khẩu"
            name="password"
            placeholder="Vui lòng nhập mật khẩu"
            classWrapper="lg:w-full lg:p-3 w-full"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.password}
            touched={touched.password}
          />
          <InputCustom
            contentLabel="Số điện thoại"
            name="phone"
            placeholder="Vui lòng nhập số điện thoại"
            classWrapper="lg:w-1/3 lg:p-3 w-full"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.phone}
            touched={touched.phone}
          />
          <div className="lg:w-1/3 lg:p-3 w-full">
            <label className="block mb-2 text-sm font-medium text-white ">
              Ngày sinh
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
            <label className="block mb-2 text-sm font-medium text-white">
              Vui lòng chọn giới tính
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="gender"
              value={values.gender}
              onChange={handleChange}
            >
              <option value="">Vui lòng chọn giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
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
              Đăng ký
            </button>
            <Link
              to={pathDefault.login}
              className="text-blue-600 lg:text-xl font-bold lg:font-medium text-sm inline-block mt-5 hover:underline"
            >
              Đã có tài khoản? Nhấn vào đây để đăng nhập
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
