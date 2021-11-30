//@ts-nocheck
import { Transaction } from "../types/Transaction";

export type switchDisplay = {
  type: "SWITCH_DISPLAY";
};

export type getData={
  type: "GET_DATA";
  payload: Transaction[]
}

export type dateChange = {
  type:"DATE_CHANGE";
  payload: Date;
}
