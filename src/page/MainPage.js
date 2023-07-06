import React from "react";
import "../styles/page/MainPage.css";

const MainPage = () => {
  return (
    <div className="mainWrapper">
      <div className="mainBg"></div>
      <div className="mainContainer">
        <div className="header">
          <h2 className="titleMessage">
            WAVE로 친구에게 안부를 받아보세요.
            <br />
            <br />
            함께한 추억들은 물결처럼 기억됩니다.
          </h2>
        </div>
        <img className="logoIcon" src="/img/logo.png" alt="로고"></img>
        <div className="loginSection">
          <p>다음 계정으로 로그인</p>
          <button className="mainBtn google">
            <img className="socialLogo" src="/img/google.svg"></img>Google로
            로그인
          </button>
          <button className="mainBtn kakao" disabled>
            <img className="socialLogo" src="/img/kakao.svg"></img>
            카카오 로그인
          </button>
          <p>
            로그인하면 <a href="">서비스 이용약관</a>과{" "}
            <a href="">개인정보처리방침</a>에 동의하게 됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
