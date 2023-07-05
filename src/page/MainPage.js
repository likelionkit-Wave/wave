import React from "react";
import "../styles/page/MainPage.css";

const MainPage = () => {
  return (
    <div className="mainWrapper">
      <div className="mainBg"></div>
      <div className="mainContainer">
        <div className="header">
          <h2 className="titleMessage">
            문득 떠오른 누군가에게 한 장 편지를...
          </h2>
        </div>
        <div className="content">
          <img className="logoIcon" src="" alt="로고"></img>
          <div className="buttonGroup">
            <p>다음 계정으로 로그인</p>
            <button className="mainBtn google">
              <img className="socialLogo" src="/img/google.svg"></img>Google로
              로그인
            </button>
            <button className="mainBtn kakao" disabled>
              <img className="socialLogo" src="/img/kakao.svg"></img>
              카카오 로그인
            </button>
          </div>
          <div className="textContainer">
            <p>
              로그인하면 <a href="">서비스 이용약관</a>과{" "}
              <a href="">개인정보처리방침</a>에 동의하게 됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
