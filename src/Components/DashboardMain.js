import MoreButton from "./MoreButton";
import { Link } from "react-router-dom";
import Buildings from "../Assets/IMG/buildings.jpg";
export default function DashboardMain() {
  return (
    <div className="card-default dashboard-main-card flex-row">
      <div className="dashboard-main-left flex-column">
        <div className="dashboard-main-item flex-column">
          <span class="card-header">Freedom Plaza Development</span>
          <span className="card-text card-text-small">
            The Freedom Plaza Development...
          </span>
          <MoreButton />
        </div>
        <div className="dashboard-main-item flex-column">
          <span class="card-header">New Employees</span>
          <span className="card-text card-text-small">
            The group is always looking for new, young talent. And as su...
          </span>
          <MoreButton />
        </div>
        <div className="dashboard-main-item flex-column">
          <span class="card-header">Mr Tilahun on Covid-19</span>
          <span className="card-text card-text-small">
            The Covid-19 Pandemic has...
          </span>
          <MoreButton />
        </div>
      </div>
      <div className="dashboard-main-right flex-column">
        <div className="dashboard-main-right-nav flex-row">
          <Link to="/dashboard" className="dashboard-main-right-nav-item">
            News
          </Link>
          <Link to="/dashboard" className="dashboard-main-right-nav-item">
            Internal Affairs
          </Link>
          <Link to="/dashboard" className="dashboard-main-right-nav-item">
            Programmes
          </Link>
          <Link to="/dashboard" className="dashboard-main-right-nav-item">
            Messages
          </Link>
        </div>
        <img src={Buildings} alt="" className="dashboard-main-right-image" />
      </div>
    </div>
  );
}
