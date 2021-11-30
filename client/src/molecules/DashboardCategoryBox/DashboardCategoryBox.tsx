import { DashboardCategory } from "../../atoms/index";
import { Transaction } from "../../types/Transaction";
import { useDispatch, useSelector } from "react-redux";
import "./DashboardCategoryBox.css";
import { State } from "../../reducers/displayReducers";

export default function DashboardCategoryBox() {
  const switchDisp = useSelector((state: State) => {
    //@ts-ignore
    return state.displayCategories.switch;
  });

  const incomes = useSelector((state: State) => {
    //@ts-ignore
    return state.displayCategories.incomes;
  });

  const expenses = useSelector((state: State) => {
    //@ts-ignore
    return state.displayCategories.expenses;
  });

  const categoryArr = switchDisp
    ? ["Rent", "Utilites", "Shopping", "Entertainment", "Eating Out", "Others"]
    : ["Salary"];

  const transactions = switchDisp ? expenses : incomes;

  const categories = categoryArr.map((category) => {
    console.log(category, transactions);
    let totalCategory = 0;
    const transactionsFiltered = transactions.filter((transac: Transaction) => {
      if (transac.category === category) {
        totalCategory += transac.amount;
        return true;
      }
      return false;
    });
    return (
      <DashboardCategory
        title={category}
        currency={"eur"}
        price={totalCategory}
        transactionList={transactionsFiltered}
      />
    );
  });

  return <div className="category-box">{categories}</div>;
}
