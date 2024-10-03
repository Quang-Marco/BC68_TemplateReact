import React, { useContext } from "react";
import FacebookLogin from "react-facebook-login";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/auth.service";
import { nguoiDungService } from "../services/nguoiDung.service";
import { setLocalStorage } from "../utils/utils";
import { NotificationContext } from "../App";
import { pathDefault } from "../common/path";
import { useDispatch } from "react-redux";
import { setValueUser } from "../redux/authSlice";

const LoginFacebook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleNotification } = useContext(NotificationContext);

  const responseFacebook = async (response) => {
    const { name, email } = response;
    const password = "Admin123@";
    const avatarUrl = response.picture.data.url;
    const userFacebook = { name, email, password };

    try {
      await authService.signUp(userFacebook);
    } catch (err) {
      if (err.response?.data?.content?.includes("Email đã tồn tại")) {
        console.log("Email đã tồn tại, tiếp tục đăng nhập...");
      } else {
        console.log(err);
        handleNotification("Registration failed", "error");
        return;
      }
    }

    try {
      const signInResponse = await authService.signIn({ email, password });
      const user = signInResponse.data.content;
      setLocalStorage("user", user);
      dispatch(setValueUser(user));
      handleNotification("Login successful!", "success");
      navigate(pathDefault.homePage);

      // Fetch avatar and upload it
      const avatarResponse = await fetch(avatarUrl);
      const blob = await avatarResponse.blob();

      const formData = new FormData();
      formData.append("formFile", blob, "avatar.jpg");

      // Gọi API upload avatar
      await nguoiDungService.uploadAvatar(user.token, formData);
      console.log("Avatar uploaded successfully!");
    } catch (err) {
      console.log("Error uploading avatar:", err);
      handleNotification(err.response.data.message || "Login failed", "error");
    }
  };
  return (
    <div>
      <FacebookLogin
        appId="836842291948348"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
};

export default LoginFacebook;
