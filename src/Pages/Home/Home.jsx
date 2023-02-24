import React, { useState } from "react";
import "./home.css";

import {BsFillMoonFill} from "react-icons/bs"
import {BsFillSunFill} from "react-icons/bs"

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState("dark");

  const themeSwap = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <div className="home">
      <div className="home-container" id={theme}>
        <div className="home-left">
          <div className="chat-list">
            <div className="profile" onClick={() => {
                  setToggle(!toggle);
                }}>
              <p>user</p>
            </div>
          </div>
          <div className="theme">
            {theme === "dark" ? <BsFillMoonFill onClick={themeSwap}/> : <BsFillSunFill onClick={themeSwap}/>}
          </div>
        </div>
        <div className="home-right">
          <div className="chat">
            <form className="chat-left">
              <h2>@ User</h2>
              <div className="chat-box">
                <p>test</p>
              </div>
              <input type="text" placeholder="Type a message" />
            </form>
            {toggle && <div className="chat-right"></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
