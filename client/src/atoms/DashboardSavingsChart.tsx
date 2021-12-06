import { useState, useEffect } from "react";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";
import { useSelector } from "react-redux";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { ReduxState } from "../types/ReduxState";
type IProps = {
  type: string;
  savings: number;
  color: string;
};
export default function DashboardSavingsChart() {
  const dashboardData = useSelector((state: ReduxState) => {
    return state.displayCategories.dashboardData;
  });

  const data = [
    {
      type: "Savings Total",
      //@ts-ignore
      savings: dashboardData.savings.totalSinceJoining,
      color: "#DD6B20",
    },
    {
      type: "Monthly",
      //@ts-ignore
      savings: dashboardData.savings.currentMonth,
      color: "#D69E2E",
    },
    { type: "Monthly Avg.", savings: 350000, color: "#38A169" },
  ];

  const width = 450;
  const height = 215;
  const getType = (data: IProps) => data.type;
  const getValue = (data: IProps) => data.savings;

  const xScale = scaleBand({
    range: [0, width],
    domain: data.map(getType),
    padding: 0.4,
  });
  const yScale = scaleLinear({
    range: [height, 0],
    domain: [0, Math.max(...data.map(getValue))],
  });
  const compose = (scale: any, accessor: any) => (data: any) =>
    scale(accessor(data));
  const xPoint = compose(xScale, getType);
  const yPoint = compose(yScale, getValue);

  let highestNum: number = 0;
  for (let el of data) {
    if (el.savings > highestNum) {
      highestNum = el.savings;
    }
  }

  return data.length ? (
    <svg width={450} height={250}>
      <Group left={40} top={10}>
        {data.map((datapoint) => {
          const barHeight = height - yPoint(datapoint);
          const type = getType(datapoint);
          return (
            <Bar
              key={`bar-${type}`}
              x={xPoint(datapoint)}
              y={height - barHeight}
              height={barHeight}
              width={xScale.bandwidth()}
              fill={datapoint.color}
            />
          );
        })}
        <AxisBottom
          numTicks={data.length}
          top={height}
          scale={xScale}
          tickLabelProps={(e) => ({
            fill: "#eee",
            textAnchor: "middle",
            y: 22.5,
          })}
        />
        <AxisLeft
          scale={yScale}
          numTicks={5}
          top={0}
          tickLabelProps={(e) => ({
            fill: "#eee",
            fontSize: 12,
            textAnchor: "end",
            x: -12,
            y: (yScale(e) ?? 0) + 3,
          })}
        />
      </Group>
    </svg>
  ) : (
    <h1>404</h1>
  );
}
