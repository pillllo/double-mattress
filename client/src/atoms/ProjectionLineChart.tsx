//@ts-nocheck
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

type Data = {
  name: string;
  Balance: number;
  Income: number;
  Expenses: number;
};

export default function ProjectionLineChart() {
  const projectionData = useSelector((state: State) => {
    //@ts-ignore
    //@ts-ignore
    return state.displayCategories.projectionData;
  });
  const months = [
    ["Jan",projectionData["0"]],
    ["Feb",projectionData["1"]],
    ["Mar",projectionData["2"]],
    ["Apr",projectionData["3"]],
    ["May",projectionData["4"]],
    ["Jun",projectionData["5"]],
    ["Jul",projectionData["6"]],
    ["Aug",projectionData["7"]],
    ["Sep",projectionData["8"]],
    ["Oct",projectionData["9"]],
    ["Nov",projectionData["10"]],
    ["Dec",projectionData["11"]],
  ];
  const [chartData, setChartData] = useState<Data[]>([]);


  const now = useSelector((state: State) => {
    //@ts-ignore
    //@ts-ignore
    return state.displayCategories.projectionDate;
  }).getMonth();

  const projectionData= useSelector((state:any)=>{
    return state.displayCategories.projectionData
  })

  useEffect(() => {
    setChartData(createChartData())
  }, [now]);



  const updMonths= (ten:number): any[][]=>{
    let arr=[];
    for(let i=ten;i<12;i++){
      arr.push(months[i])
    }
    for(let i=0;i<ten;i++){
      arr.push(months[i])
    }
    return arr
  }


  const createChartData = () => {


    return updMonths(now).map((month, i) => {

      return {
        name: month[0],
        Savings: month[1].Savings,
        SavingsRate: (month[1].typeAverages.income-month[1].typeAverages.expenses),
      };
    });
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={750}
        height={50}
        data={chartData}
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
          dataKey="Savings"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="SavingsRate" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
