//@ts-nocheck
<<<<<<< HEAD
import {ProjectionApiResponse} from "../types/ApiResponses"
=======
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
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
<<<<<<< HEAD
  payload: ProjectionApiResponse;
=======
  payload: any;
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
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
<<<<<<< HEAD
}
export type updateUserId={
  type: "UPDATE_USER_ID";
  payload: any;
}
export type getPartnerId={
  type: "GET_PARTNER_ID";
  payload: any;
}
export type getPartnerData={
  type: "GET_PARTNER_DATA";
  payload: any;
=======
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
}