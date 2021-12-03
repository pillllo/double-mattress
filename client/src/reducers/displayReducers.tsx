import { combineReducers } from "redux";
import { switchDisplay,dataSwitchDisplay, getData, dashboardDateChange,projectionDateChange,getProjectionData,getDashboardData } from "../actions/displayActions";
import {State} from "../types/State"


const initialState: State = {
  userId: "4c436f3d-f505-4e9f-b8b4-1c6c7e1d5713",
  partnerId:"",
  projectionData: [],
  dashboardData:{},
  switch: true,
  dataSwitch: true,
  projectionDate:new Date(),
  dashboardDate: new Date(),
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
      return {...state, dashboardData:action.payload}
    }
    case "GET_PROJECTION_DATA":{
      return {...state, projectionData:action.payload}
    }
    case "SWITCH_DISPLAY": {
      return { ...state, switch: !state.switch };
    }
    case "DASHBOARD_DATE_CHANGE": {
      return{...state, dashboardDate: action.payload}
    }
    case "PROJECTION_DATE_CHANGE": {
      return{...state, projectionDate: action.payload}
    }
    case "DATASWITCH_DISPLAY": {
      return { ...state, switch: !state.switch };
    }
    default:
      return state;
  }
};
const reducers = combineReducers({ displayCategories });
export default reducers;
