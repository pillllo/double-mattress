import { combineReducers } from "redux";
import {
  switchDisplay,
  dataSwitchDisplay,
  getData,
  dashboardDateChange,
  projectionDateChange,
  getProjectionData,
  getDashboardData,
  getUserData,
  getUserId,
  notificationsAlert,
  addNotifications,
  updateUserId,
  getPartnerData,
  getPartnerId,
} from "../actions/displayActions";
import { State } from "../types/State";
const initialState: State = {
  userId: "04981f24-931c-4cfc-af2c-c249f4bd3877",
  partnerId: "",
  mainUser: {},
  partnerUser: {},
  projectionData: [],
  dashboardData: {},
  switch: true,
  dataSwitch: false,
  projectionDate: new Date(),
  dashboardDate: new Date("October 17, 2021 03:24:00"),
  notificationAlert: false,
  notifications: [],
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
    | getUserId
    | getUserData
    | notificationsAlert
    | addNotifications
    | updateUserId
    | getPartnerId
    | getPartnerData
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
    case "NEW_NOTIFICATION": {
      return { ...state, notificationAlert: action.payload };
    }
    case "ADD_NOTIFICATION": {
      return { ...state, notifications: action.payload };
    }
    case "GET_USER_DATA": {
      return { ...state, mainUser: action.payload };
    }
    case "UPDATE_USER_ID": {
      return { ...state, userId: action.payload };
    }
    case "GET_PARTNER_DATA": {
      return { ...state, partnerUser: action.payload };
    }
    case "GET_PARTNER_ID": {
      return { ...state, partnerId: action.payload };
    }
    default:
      return state;
  }
};
const reducers = combineReducers({ displayCategories });
export default reducers;
