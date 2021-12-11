<<<<<<< HEAD
import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import { useSelector } from "react-redux";

import { PieUser } from "../types/User";
import { ReduxState } from "../types/ReduxState";

=======
import { useState, useEffect } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import { User, PieUser } from "../types/User";
import dataObject from "../MockData";
import { ReduxState } from "../types/ReduxState";
import { useSelector } from "react-redux";

/*
 Abandon hope all ye who enter here
*/
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
export default function DashboardVisxPie() {
  const [active, setActive] = useState<PieUser | undefined>(undefined);
  const width = 250;
  const half = width / 2;

<<<<<<< HEAD
  const userId = useSelector((state: ReduxState) => {
    return state.displayCategories.userId;
  });
  const partnerId = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.partnerId;
  });
  const income = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.dashboardData.typeTotals;
  });
  const firstName = useSelector(
    //@ts-ignore
    (state: ReduxState) => state.displayCategories.mainUser.firstName
  );
  const partnerFirstName = useSelector(
    //@ts-ignore
    (state: ReduxState) => state.displayCategories.partnerUser?.firstName
  );

  function arcCalculator(user: string, cat: string) {
    if (!user) {
      return 0;
    }
    //@ts-ignore
    let value = income[cat][user] / 100;
    return Math.floor(value);
  }

  const transactions: PieUser[] = [
    {
      name: `${firstName} - Salary`,
      value: arcCalculator(userId, "salary"),
      color: "#E53E3E",
    },
    {
      name: `${firstName} - Other Income`,
      value: arcCalculator(userId, "otherIncome"),
      color: "#D69E2E",
    },
    {
      name: `${partnerFirstName} - Salary`,
      value: arcCalculator(partnerId, "salary"),
      color: "#DD6B20",
    },
    {
      name: `${partnerFirstName} - Other Income`,
      value: arcCalculator(partnerId, "otherIncome"),
=======
  const userData = useSelector((state: ReduxState) => {
    return state.displayCategories.userId;
  });
  const income = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.dashboardData?.typeTotals;
  });

  const transactions: PieUser[] = [
    {
      name: "David - Salary",
      value: income.salary[userData],
      color: "#E53E3E",
    },
    {
      name: "David - Other Income",
      value: income.otherIncome[userData],
      color: "#D69E2E",
    },
    {
      name: "Davina - Salary",
      value: 200000,
      color: "#DD6B20",
    },
    {
      name: "Davina - Other Income",
      value: 200000,
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      color: "#805AD5",
    },
  ];

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
