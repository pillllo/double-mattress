import { useState, useEffect } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import { User, PieUser } from "../types/User";
import dataObject from "../MockData";
/*
 Abandon hope all ye who enter here
*/
export default function DashboardVisxPie() {
  const [transact, setTransact] = useState<PieUser[]>();
  const [active, setActive] = useState<PieUser | undefined>(undefined);
  const width = 250;
  const half = width / 2;

  function transactionCreation(transactionData: User[]) {
    const transactions: PieUser[] = [
      {
        name: `${transactionData[0].firstName}`,
        value: 150000,
        color: "#E53E3E",
      },
      {
        name: `${transactionData[1].firstName}`,
        value: 200000,
        color: "#DD6B20",
      }
    ];

    setTransact(() => transactions);
  }

  useEffect(() => {
    transactionCreation(dataObject.mockUser); // Can't import outside src folder
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