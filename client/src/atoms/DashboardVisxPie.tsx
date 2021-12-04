import { useState, useEffect } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import { Transaction, PieTransaction } from "../types/Transaction";
import dataObject from "../MockData";
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

  const [transact, setTransact] = useState<PieTransaction[]>();
  const [active, setActive] = useState<PieTransaction | undefined>(undefined);
  const width = 250;
  const half = width / 2;
  const userId = "0652eb0d-2152-4535-a97b-b65173a1aa59";

  function transactionCreation(transactionData: Transaction[]) {
    const transactions: PieTransaction[] = [
      {
        name: "Rent",
        value: Number(expenseTotalObject["home"][userId]),
        color: "#DD6B20",
      },
      {
        name: "Bills",
        value: Number(expenseTotalObject["bills"][userId]),
        color: "#D69E2E",
      },
      {
        name: "Shopping",
        value: Number(expenseTotalObject["shopping"][userId]),
        color: "#38A169",
      },
      {
        name: "Entertainment",
        value: Number(expenseTotalObject["entertainment"][userId]),
        color: "#3182CE",
      },
      {
        name: "Eating Out",
        value: Number(expenseTotalObject["eatingOut"][userId]),
        color: "#805AD5",
      },
      {
        name: "Others",
        value: Number(expenseTotalObject["others"][userId]),
        color: "#D53F8C",
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
    setTransact(() => finishedTransactions);
  }

  useEffect(() => {
    transactionCreation(dataObject.mockTransactions); // Can't import outside src folder
    console.log(expenseTotalObject);
    console.log(expenseTotalObject["bills"]);
  }, []);

  return (
    <main>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={transact}
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
                {`$${transact?.reduce(
                  (acc, transact) => acc + transact.value,
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
