import React, { useContext, useEffect, useState } from "react";
import { Modal, Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getValueUserApi, updateUser } from "../../redux/nguoiDungSlice";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { NotificationContext } from "../../App";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputCustom from "../../components/Input/InputCustom";
import { notiValidation } from "../../common/notiValidation";

const ManagerUser = () => {
  const awaitContext = useContext(NotificationContext);

  if (!awaitContext) {
    console.error("undefined");
    return null;
  }

  const { handleNotification } = useContext(NotificationContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { listUsers } = useSelector((state) => state.nguoiDungSlice);

  const {
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    values,
    setFieldValue,
    setValues,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      id: "",
      name: "",
      email: "",
      phone: "",
      birthday: "",
      gender: "",
      role: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setIsModalOpen(false);
      nguoiDungService
        .updateUser(values.id, values)
        .then((res) => {
          console.log(res);
          handleNotification("Updated successfully!", "success");
          dispatch(updateUser());
          dispatch(getValueUserApi());
        })
        .catch((err) => {
          console.log(err);
          handleNotification("Update failed!", "error");
        });
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required(notiValidation.empty)
        .matches(/^[^\d0-9]*$/, "Vui lòng nhập tên không chứa số"),
      email: Yup.string()
        .required(notiValidation.empty)
        .email(notiValidation.email),
      phone: Yup.string()
        .required(notiValidation.empty)
        .matches(/^(0|\+84)[3|5|7|8|9][0-9]{8}$/, notiValidation.phone),
      birthday: Yup.string().required(notiValidation.empty),
      gender: Yup.string().required(notiValidation.empty),
    }),
  });

  const showModal = (userId) => {
    setIsModalOpen(true);
    nguoiDungService
      .getUserById(userId)
      .then((res) => {
        console.log(res);
        setValues(res.data.content);
        const birthdayConvert = new Date(res.data.content.birthday)
          .toISOString()
          .split("T")[0];
        setFieldValue("birthday", birthdayConvert);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (text) => <img className="h-14" src={text} alt="avatar" />,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (text) => (
        <Tag color={text ? "blue" : "cyan"}>{text ? "Male" : "Female"}</Tag>
      ),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text) => (
        <Tag color={text == "ADMIN" ? "geekblue-inverse" : "lime-inverse"}>
          {text}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            onClick={() => {
              nguoiDungService
                .deleteUser(record.id)
                .then((res) => {
                  console.log(res);
                  handleNotification(res.data.message, "success");
                  dispatch(getValueUserApi());
                })
                .catch((err) => {
                  console.log(err);
                  handleNotification(
                    err.response.data.message || err.response.data.content,
                    "error"
                  );
                  dispatch(getValueUserApi());
                });
            }}
            className="bg-red-500 text-white py-2 px-5 rounded-md hover:bg-red-500/80 duration-300"
          >
            Delete
          </button>
          <button
            onClick={() => {
              showModal(record.id);
            }}
            className="bg-yellow-500 text-white py-2 px-5 rounded-md hover:bg-yellow-500/80 duration-300"
          >
            Edit Info
          </button>
          <Modal
            title="User Information"
            centered
            open={isModalOpen}
            onOk={handleSubmit}
            onCancel={handleCancel}
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <InputCustom
                contentLabel={"ID"}
                name="id"
                value={values.id}
                disabled
              />

              <InputCustom
                contentLabel={"Name"}
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.name}
                touched={touched.name}
              />

              <InputCustom
                contentLabel={"Email"}
                value={values.email}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.email}
                touched={touched.email}
              />

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Date of birth
                </label>
                <input
                  type="date"
                  name="birthday"
                  value={values.birthday}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Gender
                </label>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                >
                  <option value={true}>Male</option>
                  <option value={false}>Female</option>
                </select>
                {errors.gender && touched.gender && (
                  <p className="text-red-500 mt-2">{errors.gender}</p>
                )}
              </div>

              <InputCustom
                contentLabel={"Phone number"}
                value={values.phone}
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.phone}
                touched={touched.phone}
              />

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Role
                </label>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  name="role"
                  value={values.role}
                  onChange={handleChange}
                >
                  <option value="ADMIN">ADMIN</option>
                  <option value="USER">USER</option>
                </select>
                {errors.role && touched.role && (
                  <p className="text-red-500 mt-2">{errors.role}</p>
                )}
              </div>
            </form>
          </Modal>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getValueUserApi());
  }, []);

  return <Table columns={columns} dataSource={listUsers} />;
};
export default ManagerUser;
