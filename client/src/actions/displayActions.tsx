//@ts-nocheck
import { Transaction } from "../types/Transaction";

export type switchDisplay = {
  type: "SWITCH_DISPLAY";
};
export type dataSwitchDisplay = {
  type: "DATASWITCH_DISPLAY";
};
export type getData={
  type: "GET_DATA";
  payload: Transaction[]
}

export type dashboardDateChange = {
  type:"DASHBOARD_DATE_CHANGE";
  payload: Date;
}
export type projectionDateChange = {
  type:"PROJECTION_DATE_CHANGE";
  payload: Date;
}
export type getProjectionData = {
  type:"GET_PROJECTION_DATA";
  payload: any;
}
export type getDashboardData = {
  type:"GET_DASHBOARD_DATA";
  payload: any;
}

export type getUserData={
  type:"GET_USER_DATA";
  payload: any;
}

export type getUserId={
  type:"GET_USER_ID";
  payload: string;
}

export type notificationsAlert={
  type: "NEW_NOTIFICATION";
  payload: boolean;
}

export type  addNotifications={
  type: "ADD_NOTIFICATION";
  payload:any;
}