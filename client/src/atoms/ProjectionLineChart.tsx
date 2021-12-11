import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { ReduxState } from "../types/ReduxState";

export default function ProjectionLineChart() {
  const projectionData = useSelector((state: ReduxState) => {
    return state.displayCategories.projectionData;
  });

  const [chartData, setChartData] = useState<[any[], any[], any[]]>([
    [],
    [],
    [],
  ]);
  const thisMonth = useSelector((state: ReduxState) => {
    return state.displayCategories.projectionDate;
  }).getMonth();

  useEffect(() => {
    if (projectionData.length > 0) {
      setChartData(createChartData());
    }
  }, [projectionData]);

  const createChartData = (): [any[], any[], any[]] => {
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
    const updMonths = (ten: number): string[] => {
      let arr = [];
      for (let i = ten; i < 12; i++) {
        arr.push(months[i]);
      }
      for (let i = 0; i < ten; i++) {
        arr.push(months[i]);
      }
      return arr;
    };
    let savings: any[] = [];
    let savingsRate: any[] = [];
    projectionData.map((month) => {
      savings.push(Math.floor(month.savings.totalSinceJoining / 100));
      savingsRate.push(Math.floor(month.savings.monthlySavings / 100));
    });
    return [updMonths(thisMonth), savings, savingsRate];
  };

  const chartState = {
    options: {
      chart: {
        id: "basic-bar",
        foreColor: "#F8F8FF",
      },
      dataLabels:{
        enabled:false
      },
      theme:{
        palette:"palette1"
      },
      xaxis: {
        categories: chartData[0],
        labels: {
          style: {
            colors: "#F8F8FF",
          },
        },
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#008FFB",
          },
          labels: {
            style: {
              colors: "#008FFB",
            },
          },
          title: {
            text: "Savings",
            style: {
              color: "#008FFB",
            },
          },
          tooltip: {
            enabled: false,
          },
        },
        {
          seriesName: "Income",
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#00E396",
          },
          labels: {
            style: {
              colors: "#00E396",
            },
          },
          title: {
            text: "Savings Rates",
            style: {
              color: "#00E396",
            },
          },
        },
      ],
    },
    series: [
      {
        name: "Savings",
        data: chartData[1],
      },
      {
        name: "Savings Rate",
        data: chartData[2],
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Chart
        options={chartState.options}
        series={chartState.series}
        type="line"
        height={350}
      />
    </div>
  );
}
