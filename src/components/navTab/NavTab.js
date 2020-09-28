import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

function NavTab(props) {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="files">Files</Link>
        </li>
        <li>
          <Link to="calendar">Calendar</Link>
        </li>
        <li>
          <Link to="inbox">Inbox</Link>
        </li>
        <li>
          <Link to="help">Help</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTab;
