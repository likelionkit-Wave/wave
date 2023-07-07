import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../styles/page/AuthPage.css";

const AuthPage = () => {
  const [key, setKey] = useState("");
  const navigate = useNavigate();
  const handleGoogleCallback = () => {
    fetch(`/api/accounts/google/callback/${window.location.search}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Cookies.set("key", data.key, { expires: 3 });
        Cookies.set("email", data.email, { expires: 3 });
        Cookies.set("user_id", data.user_id, { expires: 3 });
        if (data.user_nickname == null) {
          navigate("/makewave");
        } else {
          Cookies.set("user_nickname", data.user_nickname, { expires: 3 });
          navigate(`/wave/${data.user_id}`);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (window.location.search != "") {
      handleGoogleCallback();
    }
  });

  return (
    <div className="authWrapper">
      <div className="authBg"></div>
      <div className="authContainer">
        <img className="logoIcon" src="/img/logo.png" alt="로고"></img>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="loginSection">
          <h2>로그인하는 중입니다...</h2>
          <p>
            잠시 후에도 로그인되지 않으면 <a href="/">여기를 눌러</a> 처음부터
            다시 진행해주세요.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
