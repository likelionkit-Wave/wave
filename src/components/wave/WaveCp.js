import React from "react";

const Wavecp = ({ index, name, content, date }) => {
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
                window.location.href = "";
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
                window.location.href = "";
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
