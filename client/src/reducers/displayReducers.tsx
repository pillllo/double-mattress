import { combineReducers } from "redux";
import { switchDisplay } from "../actions/displayActions";

export const displayReducers = (
  state: boolean = true,
  action: switchDisplay
) => {
  switch (action.type) {
    case "SWITCH_DISPLAY":
      return !state;

    default:
      return state;
  }
};

const reducers = combineReducers({});
export default reducers;
