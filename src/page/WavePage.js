import React, { useState } from "react";
import "../styles/page/WavePage.css";
import WaveCp from "../components/wave/WaveCp.js";
import { CopyToClipboard } from "react-copy-to-clipboard/src";

//(주인이름, url) and List = (보낸이, 편지글, 날짜)
const WavePage = ({ List }) => {
  const [showUrl, setShowUrl] = useState(false);
  const [translateX, setTranslateX] = useState(0);

  //url 페이지
  const openUrl = () => {
    setShowUrl(true);
  };

  const closeUrl = () => {
    setShowUrl(false);
  };

  //url 복사
  const copyUrl = () => {
    alert("클립보드에 복사되었습니다.");
  };

  const pageCount = Math.ceil(List.length / 3); //생성할 페이지 수

  //이동 버튼 동작
  const moveRight = () => {
    translateX == (pageCount - 1) * -365
      ? setTranslateX((prevTranslateX) => prevTranslateX)
      : setTranslateX((prevTranslateX) => prevTranslateX - 365);
  };

  const moveLeft = () => {
    translateX == 0
      ? setTranslateX((prevTranslateX) => prevTranslateX)
      : setTranslateX((prevTranslateX) => prevTranslateX + 365);
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
            <div
              className="Letter"
              style={{ transform: `translateX(${translateX}px)` }}
            >
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
                    <CopyToClipboard
                      text="aaa" //url 작성
                    >
                      <button className="copyBtn" onClick={copyUrl}>
                        복사하기
                      </button>
                    </CopyToClipboard>
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
    <div className="WaveContainer" style={{ width: `${100 * pageCount}%` }}>
      {addPage()}
    </div>
  );
};

export default WavePage;
