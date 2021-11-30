import { combineReducers } from "redux";
import { switchDisplay, getData, dateChange } from "../actions/displayActions";
import { Transaction } from "../types/Transaction";
export type State = {
  transactions: Transaction[] | [];
  incomes: Transaction[] | [];
  expenses: Transaction[] | [];
  switch: boolean;
  date: Date;
};

const initialState: State = {
  transactions: [],
  incomes: [],
  expenses: [],
  switch: true,
  date:new Date(),
};

const displayCategories = (
  state = initialState,
  action: switchDisplay | getData | dateChange
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
    case "DATE_CHANGE": {
      return{...state, date: action.payload}
    }
    default:
      return state;
  }
};
const reducers = combineReducers({ displayCategories });
export default reducers;
