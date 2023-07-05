import React from "react";
import "../styles/page/VisitPage.css";

const VisitPage = () => {
  return (
    <div className="VisitContainer">
      <div className="visit">
        <div className="Name">
          <h3>홍길동</h3>의 바다
        </div>
        <div className="visitImg">
          <div className="larusImg">
            <img src="/img/larus.png" className="Larus" alt="갈매기"></img>
          </div>
          <div className="writeBtn">
            <button
              onClick={() => {
                window.location.href = "/writewave";
              }}
            >
              <img src="/img/letterWrite.png" alt="편지 쓰기 이미지" />
              편지 쓰기
            </button>
          </div>
          <div className="message">
            보내진 편지는 바다 주인만
            <br />
            읽을 수 있어요.
          </div>
          <div className="makeBtn">
            <button
              onClick={() => {
                window.location.href = "/";
              }}
            >
              내 우체통도 만들기!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitPage;
