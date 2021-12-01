import { combineReducers } from "redux";
import { switchDisplay,dataSwitchDisplay, getData, dashboardDateChange,projectionDateChange } from "../actions/displayActions";
import { Transaction } from "../types/Transaction";
export type State = {
  transactions: Transaction[] | [];
  incomes: Transaction[] | [];
  expenses: Transaction[] | [];
  switch: boolean;
  dataSwitch:boolean;
  projectionDate: Date;
  dashboardDate: Date;
};

const initialState: State = {
  transactions: [],
  incomes: [],
  expenses: [],
  switch: true,
  dataSwitch: true,
  projectionDate:new Date(),
  dashboardDate: new Date()
};

const displayCategories = (
  state = initialState,
  action: switchDisplay | getData | dashboardDateChange| projectionDateChange|dataSwitchDisplay
) => {
  switch (action.type) {
    case "GET_DATA": {
      const expenses = action.payload.filter(
        (transac) => transac.transactionType === "expense"
      );
      const incomes = action.payload.filter(
        (transac) => transac.transactionType === "income"
      );
      return {
        ...state,
        transactions: action.payload,
        incomes: incomes,
        expenses: expenses,
      };
    }
    case "SWITCH_DISPLAY": {
      return { ...state, switch: !state.switch };
    }
    case "DASHBOARDDATE_CHANGE": {
      return{...state, date: action.payload}
    }
    case "PROJECTIONDATE_CHANGE": {
      return{...state, date: action.payload}
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
