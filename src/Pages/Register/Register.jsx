import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="reg-box">
        <div className="reg-left">
          <form>
            <h1>Register</h1>
            <input type="text" placeholder="user name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="file" />
            <button>Register</button>
          </form>
        </div>
        <div className="reg-right">
          <h1>Discord Lite</h1>
          <span>
            Already have an account? <button>Login</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
