<<<<<<< HEAD
import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { DashboardCategory } from "../../atoms/index";
import { Transaction } from "../../types/Transaction";
import "./DashboardCategoryBox.css";
=======
import { DashboardCategory } from "../../atoms/index";
import { Transaction } from "../../types/Transaction";
import { useSelector } from "react-redux";
import "./DashboardCategoryBox.css";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
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

<<<<<<< HEAD
=======
  const incomes = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.dashboardData.typeTotals.salary;
  });

  const expenses = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.dashboardData.categoryTotals;
  });

>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
  const transactions = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.dashboardData.transactions;
  });
<<<<<<< HEAD
  const [categories, setCategories] = useState<JSX.Element[]>([]);
=======
  const [categories, setCategories] = useState<any[]>([]);
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d

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
<<<<<<< HEAD
          price={totalCategory / 100}
=======
          price={totalCategory}
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
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
