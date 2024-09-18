import React, { useContext, useEffect, useRef, useState } from "react";
import InputCustom from "../../components/Input/InputCustom";
import { Select } from "antd";
import { skillsService } from "../../services/skills.service";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { NotificationContext } from "../../App";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { pathDefault } from "../../common/path";
import "./createUser.scss";

const CreateUser = () => {
  const { user } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();
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
  const [step, setStep] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [uploadImage, setUploadImage] = useState(null);
  const [errorImage, setErrorImage] = useState("");
  const inputFileRef = useRef(null);
  const [errors, setErrors] = useState({});

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setUserValue({
      ...userValue,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!userValue.name.trim()) {
      formErrors.name = "This field cannot be left blank";
    }
    if (!userValue.email.trim()) {
      formErrors.email = "This field cannot be left blank";
    }
    if (!userValue.phone.trim()) {
      formErrors.phone = "This field cannot be left blank";
    }
    if (!userValue.password.trim()) {
      formErrors.password = "This field cannot be left blank";
    }
    if (!userValue.birthday.trim()) {
      formErrors.birthday = "This field cannot be left blank";
    }
    if (!userValue.role.trim()) {
      formErrors.role = "This field cannot be left blank";
    }
    return formErrors;
  };

  const handleSubmitFormCreateUser = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      console.log(userValue);
      nguoiDungService
        .postUser(userValue)
        .then((res) => {
          console.log(res);
          handleNotification("Add successfully", "success");
          setIsActive(false);
        })
        .catch((err) => {
          console.log(err);
          handleNotification(err.message, "error");
        });
    }
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
          handleNotification("Upload avatar successfully", "success");
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
          <form
            onSubmit={handleSubmitFormCreateUser}
            className="formCreateUser space-y-5"
          >
            <InputCustom
              contentLabel="Name"
              name="name"
              onChange={handleChangeValue}
              value={userValue.name}
            />
            {errors.name && (
              <p className="italic text-red-500 text-sm">*{errors.name}</p>
            )}
            <InputCustom
              contentLabel="Email"
              name="email"
              onChange={handleChangeValue}
              value={userValue.email}
            />
            {errors.email && (
              <p className="italic text-red-500 text-sm">*{errors.email}</p>
            )}
            <InputCustom
              contentLabel="Phone"
              name="phone"
              onChange={handleChangeValue}
              value={userValue.phone}
            />
            {errors.phone && (
              <p className="italic text-red-500 text-sm">*{errors.phone}</p>
            )}
            <InputCustom
              contentLabel="Password"
              type="password"
              name="password"
              onChange={handleChangeValue}
              value={userValue.password}
            />
            {errors.password && (
              <p className="italic text-red-500 text-sm">*{errors.password}</p>
            )}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Date of birth
              </label>
              <input
                type="date"
                onChange={(e) => {
                  setUserValue({ ...userValue, birthday: e.target.value });
                }}
                value={userValue.birthday}
              />
              {errors.birthday && (
                <p className="italic mt-20 text-red-500 text-sm">
                  *{errors.birthday}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Gender
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
                value={userValue.role}
              >
                <option value="ADMIN">ADMIN</option>
                <option value="USER">USER</option>
              </select>
              {errors.role && (
                <p className="italic mt-20 text-red-500 text-sm">
                  *{errors.role}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Select skills
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
                Select Certification
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
              className="px-5 py-2 bg-black text-white rounded-md w-full hover:bg-black/70 duration-300"
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
              <h2 className="text-2xl">Upload new avatar</h2>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Choose an image
                </label>
                <input
                  accept="image/png, image/jpeg"
                  type="file"
                  ref={inputFileRef}
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
              {uploadImage ? (
                <img className="w-32" src={uploadImage?.imgURL} alt="avatar" />
              ) : null}
              <button
                type="submit"
                className="py-2 px-5 bg-green-700 text-white rounded-md hover:bg-green-600 duration-300"
              >
                Upload
              </button>
              <button
                onClick={() => {
                  setUploadImage(null);
                  setErrorImage("");
                  inputFileRef.current.value = "";
                }}
                className="py-2 px-5 ml-5 bg-red-600 text-white rounded-md hover:bg-red-500 duration-300"
              >
                Delete
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
        Create new account
      </h2>
      {renderLayoutForm()}
      {step !== 1 ? (
        <button
          disabled={isActive}
          onClick={() => {
            setStep(step + 1);
          }}
          className={`py-2 px-5 bg-blue-600 text-white rounded mt-5 duration-300 ${
            isActive ? "cursor-not-allowed bg-blue-600/70" : "hover:bg-blue-800"
          }`}
        >
          Next step
        </button>
      ) : (
        <button
          onClick={() => {
            navigate(pathDefault.admin);
          }}
          className="py-2 px-5 bg-black text-white rounded-md mt-5"
        >
          Back to Admin
        </button>
      )}
    </div>
  );
};

export default CreateUser;
