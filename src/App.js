import React from "react";
import {
  Switch,
  Route,
  withRouter,
  BrowserRouter as Router,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import FilesScreen from "./screens/files";
import CalendarScreen from "./screens/calendar";
import InboxScreen from "./screens/inbox";
import HelpScreen from "./screens/help";
import NavTab from "./components/navTab";
import { calendarRoute, filesRoute, helpRoute, inboxRoute } from "./routes";

import "./app.scss";

function App({ location }) {
  return (
    <div className="template">
      <NavTab />
      <div className="main">
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames="main"
          >
            <section className="route-section">
              <Switch location={location}>
                <Route path={filesRoute} component={FilesScreen} />
                <Route path={calendarRoute} component={CalendarScreen} />
                <Route path={inboxRoute} component={InboxScreen} />
                <Route path={helpRoute} component={HelpScreen} />
                <Route path={filesRoute} exact component={FilesScreen} />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default withRouter(App);
