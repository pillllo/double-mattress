import { combineReducers } from "redux";
import {
  switchDisplay,
  dataSwitchDisplay,
  getData,
  dashboardDateChange,
  projectionDateChange,
  getProjectionData,
  getDashboardData,
} from "../actions/displayActions";
import { State } from "../types/State";
const initialState: State = {
  userId: "f65f19ed-a0b0-465c-991f-037a7ac6353b",
  partnerId: "",
  mainUser: {},
  partnerUser: {},
  projectionData: [],
  dashboardData: {},
  switch: true,
  dataSwitch: false,
  projectionDate: new Date(),
  dashboardDate: new Date("October 17, 2021 03:24:00"),
};

const displayCategories = (
  state = initialState,
  action:
    | switchDisplay
    | getData
    | dashboardDateChange
    | projectionDateChange
    | dataSwitchDisplay
    | getDashboardData
    | getProjectionData
) => {
  switch (action.type) {
    case "GET_DASHBOARD_DATA": {
      return { ...state, dashboardData: action.payload };
    }
    case "GET_PROJECTION_DATA": {
      return { ...state, projectionData: action.payload };
    }
    case "SWITCH_DISPLAY": {
      return { ...state, switch: !state.switch };
    }
    case "DASHBOARD_DATE_CHANGE": {
      return { ...state, dashboardDate: action.payload };
    }
    case "PROJECTION_DATE_CHANGE": {
      return { ...state, projectionDate: action.payload };
    }
    case "DATASWITCH_DISPLAY": {
      return { ...state, dataSwitch: !state.dataSwitch };
    }
    default:
      return state;
  }
};
const reducers = combineReducers({ displayCategories });
export default reducers;
