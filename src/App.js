import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import FilesScreen from "./screens/files";
import CalendarScreen from "./screens/calendar";
import InboxScreen from "./screens/inbox";
import HelpScreen from "./screens/help";
import NavTab from "./components/navTab";
import { calendarRoute, filesRoute, helpRoute, inboxRoute } from "./routes";
import "./app.scss";

function App() {
  return (
    <Router>
      <div className="template">
        <NavTab />
        <div className="main-block">
          <Switch>
            <Route path={filesRoute} component={FilesScreen} />
            <Route path={calendarRoute} component={CalendarScreen} />
            <Route path={inboxRoute} component={InboxScreen} />
            <Route path={helpRoute} component={HelpScreen} />
            <Route path={filesRoute} exact component={FilesScreen} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
