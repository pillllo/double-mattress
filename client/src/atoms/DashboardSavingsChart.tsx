import { useState, useEffect } from "react";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";

import { AxisBottom, AxisLeft } from "@visx/axis";

type IProps = {
  type: string;
  savings: number;
  color: string;
};

export default function DashboardSavingsChart() {
  const data = [
    {
      type: "Savings Total",
      savings: 5000,
      color: "#DD6B20",
    },
    { type: "Monthly", savings: 500, color: "#D69E2E" },
    { type: "Monthly Avg.", savings: 450, color: "#38A169" },
  ];
  const width = 300;
  const height = 250;
  const x = (data: IProps) => data.type;
  const y = (data: IProps) => data.savings;

  const xScale = scaleBand({
    range: [0, width],
    round: true,
    domain: data.map(x),
    padding: 0.4,
  });
  const yScale = scaleLinear({
    range: [height, 0],
    round: true,
    domain: [0, Math.max(...data.map(y))],
  });
  const compose = (scale: any, accessor: any) => (data: any) =>
    scale(accessor(data));
  const xPoint = compose(xScale, x);
  const yPoint = compose(yScale, y);

  let highestNum: number = 0;
  for (let el of data) {
    if (el.savings > highestNum) {
      highestNum = el.savings;
    }
  }

  return (
    <svg width={width} height={height}>
      <Group>
        {data.map((d, i) => {
          const barHeight = height - yPoint(d);
          return (
            <Bar
              key={`bar-${i}`}
              x={xPoint(d)}
              y={height - barHeight}
              height={barHeight}
              width={xScale.bandwidth()}
              fill={d.color}
            />
          );
        })}
        <AxisBottom
          //   numTicks={data.length}
          top={height}
          scale={xScale}
        />
        <AxisLeft
          scale={yScale.nice()}
          numTicks={10}
          //   top={0}
          //   tickLabelProps={(e) => ({
          //     fill: "#ffeb3b",
          //     fontSize: 10,
          //     textAnchor: "end",
          //     x: -12,
          //     y: (yScale(e) ?? 0) + 3,
          //   })}
        />
      </Group>
    </svg>
  );
}
