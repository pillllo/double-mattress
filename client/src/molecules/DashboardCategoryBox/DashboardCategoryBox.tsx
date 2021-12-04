import { DashboardCategory } from "../../atoms/index";
import { Transaction } from "../../types/Transaction";
import { useSelector } from "react-redux";
import "./DashboardCategoryBox.css";
import { Flex, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { ReduxState } from "../../types/ReduxState";

export default function DashboardCategoryBox() {
  const dashboardData = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.dashboardData;
  });

  const switchDisp = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.switch;
  });

  const incomes = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.dashboardData.typeTotals.salary;
  });

  const expenses = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.dashboardData.categoryTotals;
  });

  const transactions = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.dashboardData.transactions;
  });
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    console.log("EXPENSES", expenses, "income", incomes);
    const userId = "0652eb0d-2152-4535-a97b-b65173a1aa59";

    const categoryArr = switchDisp
      ? [
          "Home",
          "Bills and Services",
          "Shopping",
          "Entertainment",
          "Eating Out",
          "Others",
        ]
      : ["Salary"];
    // const transactions = switchDisp ? expenses : incomes;
    const newCategories = categoryArr.map((category, i) => {
      const categoryTypeCheck = switchDisp
        ? ["home", "bills", "shopping", "entertainment", "eatingOut", "others"]
        : ["salary"];
      let totalCategory = 0;

      const transactionsFiltered = transactions.filter(
        (transac: Transaction) => {
          console.log(transac);
          if (transac.category === categoryArr[i]) {
            totalCategory += transac.amount;
            return true;
          }
          return false;
        }
      );
      console.log(category, totalCategory);

      return (
        <DashboardCategory
          key={i}
          title={category}
          currency={"eur"}
          price={totalCategory}
          transactionList={transactionsFiltered}
        />
      );
    });
    setCategories(newCategories);
  }, [dashboardData]);

  // return <div className="category-box">{categories}</div>;
  return (
    <Flex align="center" direction="column" h="35vh" w="90vw" overflowY="auto">
      {categories}
    </Flex>
  );
}
