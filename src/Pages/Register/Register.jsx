import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="register-container">
        <div className="reg-left"></div>
        <div className="reg-right">
          <form>
            <h1>Register</h1>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="user name" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="re-enter password" />
            <button>Register</button>
          </form>
          <pre>
            Already have an account? <button>Login</button>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Register;
