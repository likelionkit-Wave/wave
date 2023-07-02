import React, { useState, useRef } from "react";
import "../styles/page/WavePage.css";
import WaveCp from "../components/wave/WaveCp.js";

//(주인이름, url) and List = (보낸이, 편지글, 날짜)
const WavePage = ({ List }) => {
  const [showUrl, setShowUrl] = useState(false);
  const scrollContainerRef = useRef(null);

  const openUrl = () => {
    setShowUrl(true);
  };

  const closeUrl = () => {
    setShowUrl(false);
  };

  //모바일 지원 X => 다른 방법 or 사용자가 직접 복사
  const copyUrl = () => {
    const url = "aa"; //url 작성
    navigator.clipboard.writeText(url);
    alert("복사 되었습니다");
  };

  const pageCount = Math.ceil(List.length / 3); //생성할 페이지 수

  //페이지 오른쪽 왼쪽 이동
  const moveRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: 365,
        behavior: "smooth",
      });
    }
  };

  const moveLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: -365,
        behavior: "smooth",
      });
    }
  };

  //페이지 생성
  const addPage = () => {
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
      const startIndex = i * 3;
      const endIndex = (i + 1) * 3;

      const pageItems = List.slice(startIndex, endIndex).map((e, index) => (
        <WaveCp
          index={startIndex + index}
          name={e.name}
          content={e.content}
          date={e.date}
        />
      ));

      const page = (
        <div className="Wave">
          <div className="Name">
            <h4>홍길동</h4>의 바다
          </div>
          <div className="waveImg">
            <img src="/img/dol.png" className="dolImg" alt="돌고래"></img>
            <img src="/img/boat.png" className="boatImg" alt="보트"></img>
            <img src="/img/tube.png" className="tubeImg" alt="튜브"></img>
            <div className="Letter">
              <button onClick={moveLeft} className="leftBtn"></button>
              {/* 편지 띄우기 */}
              {pageItems}
              <button onClick={moveRight} className="rightBtn"></button>
            </div>
            <div className="Share">
              <button className="shareBtn" onClick={openUrl}>
                <img src="/img/share.png" alt="공유하기 이미지" />
                공유하기
              </button>
              {showUrl && (
                <div className="urlPage">
                  <div className="url">생성한 URL 주소</div>
                  <div className="urlBtn">
                    <button className="copyBtn" onClick={copyUrl}>
                      복사하기
                    </button>
                    <button className="backBtn" onClick={closeUrl}>
                      뒤로가기
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
      pages.push(page);
    }
    return pages;
  };

  return (
    <div
      className="WaveContainer"
      style={{ width: `${100 * pageCount}%` }}
      ref={scrollContainerRef}
    >
      {addPage()}
    </div>
  );
};

export default WavePage;
