import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Transaction, PieTransaction } from "../types/Transaction";
import { User, PieUser } from "../types/User";
import dataObject from "../MockData";

function DashboardPieChart() {
  const [transact, setTransact] = useState<PieTransaction[]>();
  const [couple, setCouple] = useState<PieUser[]>();

  function userCreation(coupleData: User[]) {
    const coupleArr: PieUser[] = [];
    for (let i = 0; i < coupleData.length; i++) {
      const single = {
        name: coupleData[i].firstName,
        value: 500,
      };
      coupleArr.push(single);
    }
    setCouple(() => coupleArr);
  }

  function transactionCreation(transactionData: Transaction[]) {
    const transactions: PieTransaction[] = [
      {
        name: "Income",
        value: 0,
      },
      {
        name: "Rent",
        value: 0,
      },
      {
        name: "Bills",
        value: 0,
      },
      {
        name: "Shopping",
        value: 0,
      },
      {
        name: "Entertainment",
        value: 0,
      },
      {
        name: "Eating Out",
        value: 0,
      },
      {
        name: "Others",
        value: 0,
      },
    ];
    const finishedTransactions: PieTransaction[] = [];

    for (let category of transactions) {
      for (let unit of transactionData) {
        if (category.name === unit.category) {
          category.value += unit.amount;
        }
      }
      if (category.value) {
        finishedTransactions.push(category);
      }
    }
    console.log("huh?", transactions);
    setTransact(() => finishedTransactions);
  }
  let renderLabel = function (entry: PieTransaction) {
    return `${entry.name} - ${entry.value}`;
  };

  useEffect(() => {
    userCreation(dataObject.mockUser); // Can't import outside src folder
    transactionCreation(dataObject.mockTransactions); // Can't import outside src folder
  }, []);

  return (
    <Flex w="100%" h="300">
      <ResponsiveContainer>
        <PieChart>
          {/* <Pie
            data={couple}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={30}
            fill="#8884d8"
            // label={renderLabel}
            label
          /> */}
          <Pie
            data={transact}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label={renderLabel}
          >
            <Cell key={`cell-0`} fill="#E53E3E" />
            <Cell key={`cell-1`} fill="#DD6B20" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Flex>
  );
}

export default DashboardPieChart;
