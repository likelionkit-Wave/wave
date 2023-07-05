import React, { useState } from "react";
import "../styles/page/MakePage.css";

const MakePage = () => {
  const [mailbox, setMailbox] = useState("");

  return (
    <div className="makeWrapper">
      <div className="makeBg"></div>
      <div className="makeContainer">
        <div className="header">
          <h2 className="titleMessage">누구의 바다인가요?</h2>
        </div>
        <div className="content">
          <img
            className="actionIcon"
            src="/img/island.svg"
            alt="바다 만들기"
          ></img>
          <div className="inputContainer">
            <input
              className="inputField"
              type="text"
              placeholder="누군가"
              defaultValue={mailbox}
              onChange={(e) => setMailbox(e.target.value)}
            ></input>
            <span>의 바다</span>
          </div>
          <button className="createBtn">만들기</button>
        </div>
      </div>
    </div>
  );
};

export default MakePage;
