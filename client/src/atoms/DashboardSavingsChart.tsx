//@ts-nocheck
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
  const [savingsPieData, setPData] = useState<any[]>();

  const dashboardData = useSelector((state: ReduxState) => {
    return state.displayCategories.dashboardData;
  });

  useEffect(() => {
    const data = [
      {
        type: "Savings Total",
        //@ts-ignore
        savings: 500,
        color: "#DD6B20",
      },
      { type: "Monthly", savings: 500, color: "#D69E2E" },
      { type: "Monthly Avg.", savings: 450, color: "#38A169" },
    ];

    if (dashboardData?.savings) {
      console.log(dashboardData);
      data[0].savings = dashboardData.savings.totalSinceJoining;
      data[1].savings = dashboardData.savings.currentMonth;
    }
    setPData(data);
  }, [dashboardData]);

  if (dashboardData.length) {
    const width = 450;
    const height = 215;
    const getType = (data: IProps) => data.type;
    const getValue = (data: IProps) => data.savings;

    const xScale = scaleBand({
      range: [0, width],
      domain: savingsPieData.map(getType),
      padding: 0.4,
    });
    const yScale = scaleLinear({
      range: [height, 0],
      domain: [0, Math.max(...savingsPieData.map(getValue))],
    });
    const compose = (scale: any, accessor: any) => (data: any) =>
      scale(accessor(savingsPieData));
    const xPoint = compose(xScale, getType);
    const yPoint = compose(yScale, getValue);

    let highestNum: number = 0;
    for (let el of savingsPieData) {
      if (el.savings > highestNum) {
        highestNum = el.savings;
      }
    }

    return savingsPieData.length ? (
      <svg width={450} height={250}>
        <Group left={40} top={10}>
          {savingsPieData.map((datapoint) => {
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
      <h1>Shit bruhg</h1>
    );
  }
  return <h1>Eat a dick</h1>;
}
