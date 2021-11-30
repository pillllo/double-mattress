//@ts-nocheck
import { Transaction } from "../types/Transaction";

export type switchDisplay = {
  type: "SWITCH_DISPLAY";
  payload: boolean;
};

export type getData={
  type: "GET_DATA";
  paylod: Transaction[]
}
