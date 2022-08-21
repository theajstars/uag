import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Components/Auth/Login";
import Dashboard from "./Components/User/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      {/* <Route path="/" element={<App />}></Route> */}
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
    {/* <App /> */}
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
