import { DashboardCategory } from "../../atoms/index";
import { Transaction } from "../../types/Transaction";
import { useSelector } from "react-redux";
import "./DashboardCategoryBox.css";
import { Flex } from "@chakra-ui/react";
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
    const categoryArr = switchDisp
      ? [
          "Home",
          "Bills and Services",
          "Shopping",
          "Entertainment",
          "Eating Out",
          "Others",
        ]
      : ["Salary", "Other Income"];
    const newCategories = categoryArr.map((category, i) => {
      let totalCategory = 0;

      const transactionsFiltered = transactions.filter(
        (transac: Transaction) => {
          if (transac.category === categoryArr[i]) {
            totalCategory += transac.amount;
            return true;
          }
          return false;
        }
      );

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
  }, [switchDisp, dashboardData]);

  return (
    <Flex align="center" direction="column" h="35vh" w="90vw" overflowY="auto">
      {categories}
    </Flex>
  );
}
