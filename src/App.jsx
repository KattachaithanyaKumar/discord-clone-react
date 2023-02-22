import React from "react";
import "./App.css";

import Background from "./components/Background/Background";
import Home from "./Pages/Home/Home";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

const App = () => {
  return (
    <div className="app">
      <Background />
      {/* <Login />
      <Register /> */}
      <Home />
    </div>
  );
};

export default App;
