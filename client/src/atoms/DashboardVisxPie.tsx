import { useState, useEffect } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import { Transaction, PieTransaction } from "../types/Transaction";
import dataObject from "../MockData";
/*
 Abandon hope all ye who enter here
*/
export default function DashboardVisxPie() {
  const [transact, setTransact] = useState<PieTransaction[]>();
  const [active, setActive] = useState<PieTransaction | undefined>(undefined);
  const width = 250;
  const half = width / 2;

  function transactionCreation(transactionData: Transaction[]) {
    const transactions: PieTransaction[] = [
      {
        name: "Rent",
        value: 500,
        color: "#DD6B20",
      },
      {
        name: "Bills",
        value: 9500,
        color: "#D69E2E",
      },
      {
        name: "Shopping",
        value: 90000,
        color: "#38A169",
      },
      {
        name: "Entertainment",
        value: 55000,
        color: "#3182CE",
      },
      {
        name: "Eating Out",
        value: 100000,
        color: "#805AD5",
      },
      {
        name: "Others",
        value: 48000,
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
