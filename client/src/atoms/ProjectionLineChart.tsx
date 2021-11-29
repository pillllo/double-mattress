import React, { PureComponent } from 'react';
import { useState,useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Transaction} from "../types/Transaction";
type Props={
  avgInc: number,
  avgExp:number,
  // futureTransac: Transaction[],
  balance:number
}
type Data={
  name:string,
  Balance:number,
  Income:number,
  Expenses:number
}


export default function ProjectionLineChart({avgInc,avgExp,balance}:Props) {
  const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  const [data, setData] = useState<Data[]>([]);
  const createChartData= ()=>{

   return months.map((month,i)=>{

    let dataBalance=balance+(i*(avgInc-avgExp));
    return {
      name:month,
      Balance: dataBalance,
      Income: avgInc,
      Expenses: avgExp
    }
    })
  }
  useEffect(() => {
    setData(createChartData())
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={1000}
          height={100}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Income" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Balance" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Expenses" stroke="#009a9d" />
        </LineChart>
      </ResponsiveContainer>
  )
}
