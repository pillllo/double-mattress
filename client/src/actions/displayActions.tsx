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
