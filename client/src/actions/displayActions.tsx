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
  type:"DASHBOARDDATE_CHANGE";
  payload: Date;
}
export type projectionDateChange = {
  type:"PROJECTIONDATE_CHANGE";
  payload: Date;
}
