<<<<<<< HEAD
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
=======
//@ts-ignore
import Chart from "react-apexcharts";
import './ProjectionLineChart.css'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ReduxState} from "../types/ReduxState";


export default function ProjectionLineChart() {
  const projectionData = useSelector((state: ReduxState) => {

    return state.displayCategories.projectionData;
  });

  const [chartData, setChartData] = useState<[any[],any[],any[]]>([[],[],[]]);
  const thisMonth = useSelector((state: ReduxState) => {

    return state.displayCategories.projectionDate;
  }).getMonth();

useEffect(()=>{

  if(projectionData.length>0){
     setChartData(createChartData())
  }
},[projectionData])


  const createChartData =  (): [any[],any[],any[]] => {
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
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
<<<<<<< HEAD
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
=======
      "Dec"
    ];
    console.log("MONTHS",months);
    const updMonths= (ten:number): string[]=>{
      let arr=[];
      for(let i=ten;i<12;i++){
        arr.push(months[i])
      }
      for(let i=0;i<ten;i++){
        arr.push(months[i])
      }
      return arr
    }
    let savings:any[]=[];
    let savingsRate:any[]=[];
    projectionData.map((month)=>{
      savings.push(Number((month.savings.totalSinceJoining+"").slice(0,6)))
      savingsRate.push(Number((month.savings.monthlySavings+"").slice(0,6)))
    })
    return [updMonths(thisMonth),savings,savingsRate]

  };
  console.log(chartData);
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d

  const chartState = {
    options: {
      chart: {
        id: "basic-bar",
<<<<<<< HEAD
        foreColor: "#F8F8FF",
      },
      dataLabels:{
        enabled:false
      },
      theme:{
        palette:"palette1"
=======
        foreColor:"#F8F8FF"
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      },
      xaxis: {
        categories: chartData[0],
        labels: {
          style: {
<<<<<<< HEAD
            colors: "#F8F8FF",
          },
=======
            colors: '#F8F8FF',
          }
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
        },
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
<<<<<<< HEAD
            color: "#008FFB",
          },
          labels: {
            style: {
              colors: "#008FFB",
            },
=======
            color: '#008FFB'
          },
          labels: {
            style: {
              colors: '#008FFB',
            }
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
          },
          title: {
            text: "Savings",
            style: {
<<<<<<< HEAD
              color: "#008FFB",
            },
          },
          tooltip: {
            enabled: false,
          },
        },
        {
          seriesName: "Income",
=======
              color: '#008FFB',
            }
          },
          tooltip: {
            enabled: true
          }
        },
        {
          seriesName: 'Income',
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
<<<<<<< HEAD
            color: "#00E396",
          },
          labels: {
            style: {
              colors: "#00E396",
            },
=======
            color: '#00E396'
          },
          labels: {
            style: {
              colors: '#00E396',
            }
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
          },
          title: {
            text: "Savings Rates",
            style: {
<<<<<<< HEAD
              color: "#00E396",
            },
=======
              color: '#00E396',
            }
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
          },
        },
      ],
    },
    series: [
      {
<<<<<<< HEAD
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
=======
        name:"Savings",
        data: chartData[1]
      },
       {
        name:"Savings Rate",
        data: chartData[2]
      }


    ]

  };

  return (

    <div style={{ width: '100%', height: "100%" }}>
       <Chart options={chartState.options} series={chartState.series} type="line" height={350} />


    </div>
  );
}

// <ResponsiveContainer width="100%" height="100%">
// <LineChart
//   width={750}
//   height={50}
//   data={chartData}
//   margin={{
//     right: 60,
//     left: 20,
//   }}
// >
//   <CartesianGrid strokeDasharray="1 1" />
//   <XAxis dataKey="name" />
//   <YAxis />
//   <Tooltip />
//   {/* <Legend /> */}
//   <Line
//     type="monotone"
//     dataKey="Savings"
//     stroke="#8884d8"
//     activeDot={{ r: 8 }}
//   />
//   <Line type="monotone" dataKey="SavingsRate" stroke="#82ca9d" />
// </LineChart>

// </ResponsiveContainer>
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
