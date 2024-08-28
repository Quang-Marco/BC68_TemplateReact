import React, { useContext, useEffect, useState } from "react";
import InputCustom from "../../components/Input/InputCustom";
import { Select } from "antd";
import { skillsService } from "../../services/skills.service";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { NotificationContext } from "../../App";
import { useSelector } from "react-redux";

const CreateUser = () => {
  const { user } = useSelector((state) => state.authSlice);
  const { handleNotification } = useContext(NotificationContext);
  const [listSkills, setListSkills] = useState([]);
  const [userValue, setUserValue] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    role: "",
    skill: [],
    certification: [],
  });
  const [step, setStep] = useState(1);
  const [isActive, setIsActive] = useState(true);
  const [uploadImage, setUploadImage] = useState(null);
  const [errorImage, setErrorImage] = useState("");

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setUserValue({
      ...userValue,
      [name]: value,
    });
  };

  const handleSubmitFormCreateUser = (e) => {
    e.preventDefault();
    console.log(userValue);
    nguoiDungService
      .postUser(userValue)
      .then((res) => {
        console.log(res);
        handleNotification("Tạo thành công", "success");
        setIsActive(false);
        // setTimeout(() => setStep(step + 1), 2000);
      })
      .catch((err) => {
        console.log(err);
        handleNotification(err.message, "error");
      });
  };

  const handleSubmitAvatar = (e) => {
    e.preventDefault();
    let formData = new FormData();
    if (uploadImage) {
      formData.append("formFile", uploadImage.img);
      nguoiDungService
        .uploadAvatar(user.token, formData)
        .then((res) => {
          console.log(res);
          handleNotification("Upload avatar thành công", "success");
        })
        .catch((err) => {
          console.log(err);
          handleNotification(err.message, "error");
        });
    }
  };

  const renderLayoutForm = () => {
    switch (step) {
      case 0:
        return (
          <form onSubmit={handleSubmitFormCreateUser} className="space-y-5">
            <InputCustom
              contentLabel="Name"
              name="name"
              onChange={handleChangeValue}
            />
            <InputCustom
              contentLabel="Email"
              name="email"
              onChange={handleChangeValue}
            />
            <InputCustom
              contentLabel="Phone"
              name="phone"
              onChange={handleChangeValue}
            />
            <InputCustom
              contentLabel="Password"
              type="password"
              name="password"
              onChange={handleChangeValue}
            />
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Ngày sinh
              </label>
              <input
                type="date"
                onChange={(e) => {
                  const valueDate = e.target.value
                    .split("-")
                    .reverse()
                    .join("/");
                  setUserValue({ ...userValue, birthday: valueDate });
                }}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Giới tính
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="gender"
                onChange={handleChangeValue}
              >
                <option value={true}>Nam</option>
                <option value={false}>Nữ</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Role
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="role"
                onChange={handleChangeValue}
              >
                <option value="ADMIN">ADMIN</option>
                <option value="USER">USER</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Chọn Skills
              </label>
              <Select
                mode="multiple"
                allowClear
                style={{
                  width: "100%",
                }}
                placeholder="Please select"
                options={listSkills}
                onChange={(value) => {
                  setUserValue({ ...userValue, skill: value });
                }}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Chọn Certification
              </label>
              <Select
                mode="tags"
                allowClear
                style={{
                  width: "100%",
                }}
                placeholder="Please select"
                onChange={(value) => {
                  setUserValue({ ...userValue, certification: value });
                }}
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2 bg-black text-white rounded-md w-full hover:bg-green-500 duration-300"
            >
              Submit
            </button>
          </form>
        );
        break;
      case 1:
        return (
          <div>
            <form onSubmit={handleSubmitAvatar} className="space-y-2">
              <h2>Upload hình ảnh cho người dùng</h2>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Avatar
                </label>
                <input
                  accept="image/png, image/jpeg"
                  type="file"
                  onChange={(e) => {
                    const img = e.target.files[0];
                    if (img) {
                      if (img.size > 1024 * 1024) {
                        setErrorImage("Vui lòng upload hình ảnh dưới 1MB");
                        return;
                      }
                      const imgURL = URL.createObjectURL(img);
                      setUploadImage({ img, imgURL });
                    }
                  }}
                />
              </div>
              <p className="text-red-500">{errorImage}</p>
              <img className="w-32" src={uploadImage?.imgURL} alt="avatar" />
              <button
                type="submit"
                className="py-2 px-5 bg-green-600 text-white rounded-md hover:bg-red-500 duration-300"
              >
                Upload hình ảnh
              </button>
              <button
                onClick={() => {
                  setUploadImage(null);
                }}
                className="py-2 px-5 ml-5 bg-black text-white rounded-md hover:bg-red-500 duration-300"
              >
                Chọn hình khác
              </button>
            </form>
          </div>
        );
        break;
    }
  };

  useEffect(() => {
    skillsService
      .getSkills()
      .then((res) => {
        console.log(res);
        const newListSkills = res.data.content.map((skill, index) => {
          return {
            label: skill.tenSkill,
            value: skill.tenSkill,
          };
        });
        setListSkills(newListSkills);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2 className="font-semibold text-3xl text-center mb-5">
        Form tạo người dùng trong hệ thống
      </h2>
      {renderLayoutForm()}
      <button
        disabled={isActive}
        onClick={() => {
          setStep(step + 1);
        }}
        className={`py-2 px-5 bg-black text-white rounded mt-5 duration-300 ${
          isActive ? "cursor-not-allowed bg-black/70" : "hover:bg-red-500"
        }`}
      >
        Chuyển tới bước tiếp theo
      </button>
    </div>
  );
};

export default CreateUser;