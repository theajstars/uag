import Navbar from "../Navbar";
import "../../Assets/CSS/all.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

import Profile from "../Profile";
import Meetings from "../Meetings";
import TodoList from "../TodoList";
import DashboardMain from "../DashboardMain";
import DirectMessages from "../DirectMessages";
import Documents from "../Documents";
import Notices from "../Notices";
import Events from "../Events";
import DatePicker from "../DatePicker";

function Dashboard() {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  useEffect(() => {
    navigate(token ? "/dashboard" : "/login", { replace: true });
  }, []);
  return (
    <>
      <Navbar />
      {/* <Container maxWidth="xl"> */}
      <div className="app-container">
        <div className="grid-item">
          <Profile />
          <Meetings />
          <TodoList />
        </div>
        <div className="grid-item">
          <DashboardMain />
          <div className="flex-row dm-documents-row">
            <DirectMessages />
            <Documents />
          </div>
        </div>
        <div className="grid-item grid-item-last">
          <Notices />
          <Events />
          <DatePicker />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
