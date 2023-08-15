import React, { useState } from "react";
import "./sidebar.scss";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoMdHome, IoMdPerson, IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={`sidebar ${isSidebarOpen ? "" : "expand"}`}>
      <div className="toggle-button-container">
        <Button
          variant="outline-dark"
          className="toggle-button"
          onClick={toggleSidebar}
        >
          &#9776;
        </Button>
      </div>
      <ul className="flex-column ps-0">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <IoMdHome className="nav-icon" /> <span> Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <IoMdPerson className="nav-icon" /> <span>About</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link">
            <IoMdSettings className="nav-icon" /> <span>Services</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
