import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-left">
          <form>
            <h1>Login</h1>
            <input type="text" placeholder="user name" />
            <input type="password" placeholder="password" />
            <button>Login</button>
          </form>
          <pre>
            Don't have an account ? <button>Register</button>
          </pre>
        </div>
        <div className="login-right"></div>
      </div>
    </div>
  );
};

export default Login;
