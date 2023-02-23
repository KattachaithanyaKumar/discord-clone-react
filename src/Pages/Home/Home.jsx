import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState("dark");
  return (
    <div className="home">
      <div className="home-container" id={theme}>
        <div className="home-left">
          <div className="chat-list">
            <div className="profile">
              <p>user</p>
              <button
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                click me
              </button>
            </div>
          </div>
          <div className="theme">
            <button>theme switch</button>
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
