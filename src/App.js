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

function App() {
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

export default App;
