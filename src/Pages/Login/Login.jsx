import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-box">
        <div className="login-left">
          <h1>Discord Lite</h1>
          <span>
            Don't have an account? <button>Sign in</button>
          </span>
        </div>
        <div className="login-right">
          <form>
            <h1>Login</h1>
            <input type="text" placeholder="user name" />
            <input type="password" placeholder="password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
