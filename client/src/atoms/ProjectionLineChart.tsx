// import { PureComponent } from "react";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { State } from "../reducers/displayReducers";
type Props = {
  avgInc: number;
  avgExp: number;
  // futureTransac: Transaction[],
  balance: number;
};
type Data = {
  name: string;
  Balance: number;
  Income: number;
  Expenses: number;
};

export default function ProjectionLineChart({
  avgInc,
  avgExp,
  balance,
}: Props) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [data, setData] = useState<Data[]>([]);

  const incomesAvg = useSelector((state: State) => {
    let incomeAvg = 0;
    //@ts-ignore
    for (let el of state.displayCategories.incomes) {
      incomeAvg += el.amount;
    }
    return incomeAvg;
  });
  const expensesAvg = useSelector((state: State) => {
    let expenseAvg = 0;
    //@ts-ignore
    for (let el of state.displayCategories.expenses) {
      expenseAvg += el.amount;
    }
    return expenseAvg;
  });
  useEffect(() => {
    setData(createChartData());
  }, []);

  const createChartData = () => {
    return months.map((month, i) => {
      let dataBalance = balance + i * (avgInc - avgExp);
      return {
        name: month,
        Balance: dataBalance,
        Income: avgInc,
        Expenses: avgExp,
      };
    });
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={750}
        height={50}
        data={data}
        margin={{
          right: 60,
          left: 20,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Line
          type="monotone"
          dataKey="Income"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Balance" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Expenses" stroke="#009a9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
