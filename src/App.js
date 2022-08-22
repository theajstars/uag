import "./Assets/CSS/all.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

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
