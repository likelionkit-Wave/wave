import React from "react";
import "../../styles/components/wave/WaveCp.css";
import { useNavigate } from "react-router-dom";

//편지 + 편지 설명
const Wavecp = ({ index, name, content, date }) => {
  const navigate = useNavigate();

  return (
    <div>
      {index % 3 == 1 ? (
        <div className="bottleLetter">
          <div className="letterInfo2">
            <div className="letterName">{name}</div>
            <div className="letterDate">{date}</div>
          </div>
          <div className="letterImg">
            {/* 이미지 클릭시 url 이동 + 정보 넘겨주기 */}
            <img
              src="/img/letter.png"
              onClick={() => {
                navigate(`/readwave/${index}`);
              }}
              alt="병"
            />
          </div>
        </div>
      ) : (
        <div className="bottleLetter">
          <div className="letterImg">
            <img
              src="/img/letter.png"
              onClick={() => {
                navigate(`/readwave/${index}`);
              }}
              alt="병"
            />
          </div>
          <div className="letterInfo">
            <div className="letterName">{name}</div>
            <div className="letterDate">{date}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wavecp;
