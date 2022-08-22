import { Container, Grid } from "@mui/material";
import Navbar from "./Components/Navbar";
import "./Assets/CSS/all.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import Profile from "./Components/Profile";
import Meetings from "./Components/Meetings";
import TodoList from "./Components/TodoList";
import DashboardMain from "./Components/DashboardMain";
import DirectMessages from "./Components/DirectMessages";
import Documents from "./Components/Documents";
import Notices from "./Components/Notices";
import Events from "./Components/Events";
import DatePicker from "./Components/DatePicker";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

function App() {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  useEffect(() => {
    navigate(token ? "/dashboard" : "/login", { replace: true });
  }, []);
  return <></>;
}

export default App;
