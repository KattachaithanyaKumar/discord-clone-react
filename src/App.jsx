import React from "react";
import "./App.css";

import Background from "./components/Background/Background";

import Login from "./Pages/Login/Login";

const App = () => {
  return (
    <div className="app">
      <Background />
      <Login />
    </div>
  );
};

export default App;
