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
export default function DashboardVisxPie() {
  const expenseTotalObject = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.dashboardData.categoryTotals;
  });
  const userData = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.userId;
  });
  const [active, setActive] = useState<PieTransaction | undefined>(undefined);

  const transactions: PieTransaction[] = [
    {
      name: "Rent",
      value: Number(expenseTotalObject["home"][userData]),
      color: "#DD6B20",
    },
    {
      name: "Bills",
      value: Number(expenseTotalObject["bills"][userData]),
      color: "#D69E2E",
    },
    {
      name: "Shopping",
      value: Number(expenseTotalObject["shopping"][userData]),
      color: "#38A169",
    },
    {
      name: "Entertainment",
      value: Number(expenseTotalObject["entertainment"][userData]),
      color: "#3182CE",
    },
    {
      name: "Eating Out",
      value: Number(expenseTotalObject["eatingOut"][userData]),
      color: "#805AD5",
    },
    {
      name: "Others",
      value: Number(expenseTotalObject["others"][userData]),
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
                {`$${active.value}`}
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
                {`$${transactions?.reduce(
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
