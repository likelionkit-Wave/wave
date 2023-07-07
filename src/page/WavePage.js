import React, { useEffect, useState } from "react";
import "../styles/page/WavePage.css";
import "../styles/page/VisitPage.css";
import WaveCp from "../components/wave/WaveCp.js";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import Cookies from "js-cookie";
import axios from "axios";
import { useParams } from "react-router-dom";

//(주인이름, url) and List = (보낸이, 편지글, 날짜)
const WavePage = () => {
  const [showUrl, setShowUrl] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [list, setList] = useState([]);

  const parms = useParams();
  console.log(parms);

  useEffect(() => {
    Cookies.get("user_id")
      ? axios
          .get(`/api/message/shorts_list/${Cookies.get("user_id")}`)
          .then((res) => setList(res.data))
      : axios
          .get(`/api/message/shorts_list/${parms.id}`)
          .then((res) => console.log(res));
  }, []);

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

  const pageCount = list.length == 0 ? 1 : Math.ceil(list.length / 3); //생성할 페이지 수

  //이동 버튼 동작
  const moveRight = () => {
    translateX == (pageCount - 1) * -390
      ? setTranslateX((prevTranslateX) => prevTranslateX)
      : setTranslateX((prevTranslateX) => prevTranslateX - 390);
  };

  const moveLeft = () => {
    translateX == 0
      ? setTranslateX((prevTranslateX) => prevTranslateX)
      : setTranslateX((prevTranslateX) => prevTranslateX + 390);
  };

  //페이지 생성
  const addPage = () => {
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
      const startIndex = i * 3;
      const endIndex = (i + 1) * 3;

      const pageItems = list
        .slice(startIndex, endIndex)
        .map((e, index) => (
          <WaveCp
            index={startIndex + index}
            name={e.name}
            content={e.content}
            date={e.date}
            title={e.title}
          />
        ));

      const page = (
        <div className="Wave">
          <div className="Name">
            <h4>{Cookies.get("user_nickname")}</h4>의 바다
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
                  <div className="url">{window.location.href}</div>
                  <div className="urlBtn">
                    <CopyToClipboard
                      text={window.location.href} //url
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
      {Cookies.get("user_id") ? (
        addPage()
      ) : (
        <div className="VisitContainer">
          <div className="visit">
            <div className="Name">
              <h3>{parms.name}</h3>의 바다
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
      )}
    </div>
  );
};

export default WavePage;
