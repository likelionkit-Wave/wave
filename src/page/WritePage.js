import React, { useState } from "react";
import "../styles/page/WritePage.css";

const WritePage = () => {
  const [member, setMember] = useState({
    name: "홍길동",
  });
  const [text, setText] = useState({
    title: "",
    content: "",
    writer: "",
  });

  return (
    <div className="writeContainer">
      <span className="writeHeader">
        <p>{member.name}</p>
        <p>님에게 보낼 편지</p>
      </span>
      <div className="letter">
        <span className="close">✕</span>
        <input
          className="title"
          value={text.title}
          onChange={(e) => {
            setText({
              title: e.target.value,
              content: text.content,
              writer: text.writer,
            });
          }}
          placeholder="제목을 입력해주세요 ..."
        ></input>
        <textarea
          className="note"
          value={text.content}
          onChange={(e) => {
            setText({
              title: text.title,
              content: e.target.value,
              writer: text.writer,
            });
          }}
          maxLength="140"
        ></textarea>
        <p className="limit">{text.content.length} / 140</p>
        <span className="writer">
          <p>From.</p>
          <input
            value={text.writer}
            onChange={(e) => {
              setText({
                title: text.title,
                content: text.content,
                writer: e.target.value,
              });
            }}
            placeholder="보내는 이"
          ></input>
        </span>
      </div>
      <p className="notice">이름을 적지 않으면 익명으로 작성돼요.</p>
      <button className="submitBtn">📤ㅤ편지 보내기</button>
    </div>
  );
};

export default WritePage;
