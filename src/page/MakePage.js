import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "../styles/page/MakePage.css";

const MakePage = ({ mailbox, setMailbox }) => {
  const navigate = useNavigate();

  const makeNickname = () => {
    const data = {
      data: {
        nickname: mailbox,
      },
      headers: {
        key: Cookies.get("key"),
      },
    };
    axios
      .put(
        "/api/accounts/crud/nickname/",
        {
          nickname: mailbox,
        },
        {
          headers: {
            key: Cookies.get("key"),
          },
        }
      )
      .then((response) =>
        Cookies.set("user_nickname", response.data.nickname, { expires: 3 })
      );
    navigate(`/wave/${Cookies.get("user_id")}/${mailbox}`);
  };

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
              maxLength="10"
            ></input>
            <p>
              의 바다
              <span className="limitIndicator">{10 - mailbox.length}자</span>
            </p>
          </div>
          <button className="createBtn" onClick={makeNickname}>
            만들기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakePage;
