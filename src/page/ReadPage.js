import React, { useState } from "react";
import "../styles/page/ReadPage.css";
import { useNavigate, useParams } from "react-router-dom";

const ReadPage = ({ List }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [member, setMember] = useState({
    name: "홍길동",
  });

  const letter = List[Number(id)];

  return (
    <div className="readContainer">
      <span className="readHeader">
        <p>{member.name}</p>
        <p>의 바다</p>
      </span>
      <div className="background">
        <div className="readLetter">
          <span
            onClick={() => {
              navigate(-1);
            }}
            className="close"
          >
            ✕
          </span>
          <p className="readCreateDate">{letter.date}</p>
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
