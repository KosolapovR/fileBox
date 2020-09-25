import { applyMiddleware, combineReducers, createStore } from "redux";
import { logger } from "redux-logger";

import FilesReducer from "./files";
import CalendarReducer from "./calendar";
import InboxReducer from "./inbox";
import HelpReducer from "./help";

export const configureStore = () => {
  const rootReducer = combineReducers({
    FilesReducer,
    CalendarReducer,
    InboxReducer,
    HelpReducer,
  });
  return createStore(rootReducer, applyMiddleware(logger));
};
