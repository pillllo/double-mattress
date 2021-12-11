<<<<<<< HEAD
import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import { useSelector } from "react-redux";
import { ReduxState } from "../types/ReduxState";

import { PieTransaction } from "../types/Transaction";
import { DashboardCategoryTotals } from "../types/DashboardTypes";

=======
import { useState, useEffect } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import { Transaction, PieTransaction } from "../types/Transaction";

import { useSelector } from "react-redux";
import { ReduxState } from "../types/ReduxState";
/*
 Abandon hope all ye who enter here
*/
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
export default function DashboardVisxPie() {
  const expenseTotalObject = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.dashboardData.categoryTotals;
  });
<<<<<<< HEAD
  const userId = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.userId;
  });
  const partnerId = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.partnerId;
  });
  const [active, setActive] = useState<PieTransaction | undefined>(undefined);

  function arcCalculator(expenses: DashboardCategoryTotals, cat: string) {
    //@ts-ignore
    let value = expenses[cat][userId] / 100;
    if (partnerId) {
      value =
        //@ts-ignore
        expenses[cat][userId] / 100 +
        //@ts-ignore
        expenses[cat][partnerId] / 100;
      return Math.floor(value);
    }
    return Math.floor(value);
  }

  const transactions: PieTransaction[] = [
    {
      name: "Rent",
      value: arcCalculator(expenseTotalObject, "home"),
=======
  const userData = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.userId;
  });
  const [active, setActive] = useState<PieTransaction | undefined>(undefined);

  const transactions: PieTransaction[] = [
    {
      name: "Rent",
      value: Number(expenseTotalObject["home"][userData]),
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      color: "#DD6B20",
    },
    {
      name: "Bills",
<<<<<<< HEAD
      value: arcCalculator(expenseTotalObject, "bills"),
=======
      value: Number(expenseTotalObject["bills"][userData]),
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      color: "#D69E2E",
    },
    {
      name: "Shopping",
<<<<<<< HEAD
      value: arcCalculator(expenseTotalObject, "shopping"),
=======
      value: Number(expenseTotalObject["shopping"][userData]),
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      color: "#38A169",
    },
    {
      name: "Entertainment",
<<<<<<< HEAD
      value: arcCalculator(expenseTotalObject, "entertainment"),
=======
      value: Number(expenseTotalObject["entertainment"][userData]),
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      color: "#3182CE",
    },
    {
      name: "Eating Out",
<<<<<<< HEAD
      value: arcCalculator(expenseTotalObject, "eatingOut"),
=======
      value: Number(expenseTotalObject["eatingOut"][userData]),
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      color: "#805AD5",
    },
    {
      name: "Others",
<<<<<<< HEAD
      value: arcCalculator(expenseTotalObject, "others"),
=======
      value: Number(expenseTotalObject["others"][userData]),
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      color: "#D53F8C",
    },
  ];

  const width = 250;
  const half = width / 2;

  return (
    <main>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={transactions}
            pieValue={(data) => data.value}
            outerRadius={half}
            innerRadius={({ data }) => {
              const size = active && active.name === data.name ? 20 : 10;
              return half - size;
            }}
            padAngle={0.01}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                const hmm: any = pie.path(arc);
                return (
                  <g
                    key={arc.data.name}
                    onMouseEnter={() => setActive(arc.data)}
                    onMouseLeave={() => setActive(undefined)}
                  >
                    <path d={hmm} fill={arc.data.color}></path>
                  </g>
                );
              });
            }}
          </Pie>

          {active ? (
            <>
              <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
<<<<<<< HEAD
                {`€${active.value}`}
=======
                {`$${active.value}`}
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
              </Text>

              <Text
                textAnchor="middle"
                fill={active.color}
                fontSize={20}
                dy={20}
              >
                {`${active.name}`}
              </Text>
            </>
          ) : (
            <>
              <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
<<<<<<< HEAD
                {`€${transactions?.reduce(
=======
                {`$${transactions?.reduce(
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
                  (acc, transaction) => acc + transaction.value,
                  0
                )}`}
              </Text>

              <Text textAnchor="middle" fill="#aaa" fontSize={20} dy={20}>
                {`Total Expenses`}
              </Text>
            </>
          )}
        </Group>
      </svg>
    </main>
  );
}
