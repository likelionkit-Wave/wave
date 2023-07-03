import React, { useState } from "react";
import "../styles/page/ReadPage.css";

const ReadPage = () => {
  const [member, setMember] = useState({
    name: "홍길동",
  });

  const [letter, setLetter] = useState({
    name: "김철수",
    title: "애국가",
    content:
      "동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려 강산 대한 사람, 대한으로 길이 보전하세. 동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려 강산 대한 사람, 대한으로 길이 보전하세.",
    createDate: "2023.06.26",
  });

  return (
    <div className="readContainer">
      <span className="readHeader">
        <p>{member.name}</p>
        <p>의 바다</p>
      </span>
      <div className="background">
        <div className="readLetter">
          <span className="close">✕</span>
          <p className="readCreateDate">{letter.createDate}</p>
          <p className="title">{letter.title}</p>
          <textarea readOnly className="note" value={letter.content}></textarea>
          <span className="readWriter">
            <p>From.</p>
            <p>{letter.name}</p>
          </span>
          <button className="deleteLetterBtn">삭제</button>
        </div>
      </div>
    </div>
  );
};

export default ReadPage;
