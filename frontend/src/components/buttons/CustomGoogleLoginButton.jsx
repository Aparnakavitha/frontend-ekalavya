import React from "react";
import PropTypes from "prop-types";
import "./CustomGoogleLoginButton.css";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const clientId =
  "129038097874-1albul8aknf7348ljuhiro03sl8dhn43.apps.googleusercontent.com"; // Replace with your actual Google Client ID

const CustomGoogleLoginButton = ({ fullWidth }) => {
  const navigate = useNavigate();

  const handleLoginSuccess = async (credentialResponse) => {
    console.log("Credential Response:", credentialResponse);

    const accessToken = credentialResponse.access_token;
    console.log("Access Token:", accessToken);

    try {
      const userInfo = await fetchUserInfo(accessToken);
      await handleUserLogin(userInfo);
    } catch (error) {
      console.error("Error during login process:", error);
    }
  };

  const fetchUserInfo = async (accessToken) => {
    const response = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log("User Info Response:", response.data);
    return response.data;
  };

  const handleUserLogin = async (userInfo) => {
    const { email, name, picture, sub: participantId } = userInfo;
    console.log("Email:", email);
    console.log("Name:", name);
    console.log("Picture URL:", picture);
    console.log("Participant ID:", participantId);

    try {
      const response = await axios.post("https://ekalavya.tarento.com/login", {
        email,
      });
      const { roleId, userId } = response.data.responseData;
      console.log("API Response Role ID:", roleId);

      sessionStorage.setItem("role", roleId);
      sessionStorage.setItem("user_id", userId);

      handleLoginNavigation();
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleLoginNavigation = async () => {
    try {
      const roleId = await getRoleIdFromSessionStorage();
      console.log("Stored Role ID:", roleId);
  
      if (roleId !== null) {
        navigateBasedOnRole(roleId);
      } else {
        console.error("Role ID not found in sessionStorage");
      }
    } catch (error) {
      console.error("Error getting Role ID:", error);
    }
  };
  
  const getRoleIdFromSessionStorage = async () => {
    return new Promise((resolve, reject) => {
      try {
        const roleId = parseInt(sessionStorage.getItem("role"));
        if (isNaN(roleId)) {
          throw new Error("Invalid role ID stored in sessionStorage");
        }
        resolve(roleId);
      } catch (error) {
        reject(error);
      }
    });
  };
  
  const navigateBasedOnRole = (roleId) => {
    switch (roleId) {
      case 3:
        navigate(`/student/profile`);
        break;
      case 2:
        navigate(`/mentor/profile`);
        break;
      case 1:
        navigate("/admin/student");
        break;
      default:
        console.error("Unknown role ID:", roleId);
        break;
    }
  };
  

  const login = useGoogleLogin({
    clientId,
    onSuccess: handleLoginSuccess,
    onError: (error) => console.error("Login Failed:", error),
  });

  return (
    <button
      onClick={() => login()}
      className={`custom-google-login-button ${fullWidth ? "full-width" : ""}`}
    >
      Login
    </button>
  );
};

CustomGoogleLoginButton.propTypes = {
  fullWidth: PropTypes.bool,
};

CustomGoogleLoginButton.defaultProps = {
  fullWidth: false,
};

export default CustomGoogleLoginButton;
