import React from "react";
import { ResponsiveBar } from "@nivo/bar";

let data = [
    {
      "country": "AD",
      "hot dog": 161,
      "hot dogColor": "hsl(299, 70%, 50%)",
      "burger": 17,
      "burgerColor": "hsl(152, 70%, 50%)",
      "sandwich": 91,
      "sandwichColor": "hsl(177, 70%, 50%)",
      "kebab": 3,
      "kebabColor": "hsl(172, 70%, 50%)",
      "fries": 135,
      "friesColor": "hsl(171, 70%, 50%)",
      "donut": 124,
      "donutColor": "hsl(290, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 91,
      "hot dogColor": "hsl(281, 70%, 50%)",
      "burger": 145,
      "burgerColor": "hsl(275, 70%, 50%)",
      "sandwich": 168,
      "sandwichColor": "hsl(40, 70%, 50%)",
      "kebab": 153,
      "kebabColor": "hsl(304, 70%, 50%)",
      "fries": 126,
      "friesColor": "hsl(174, 70%, 50%)",
      "donut": 189,
      "donutColor": "hsl(142, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 121,
      "hot dogColor": "hsl(60, 70%, 50%)",
      "burger": 112,
      "burgerColor": "hsl(101, 70%, 50%)",
      "sandwich": 83,
      "sandwichColor": "hsl(1, 70%, 50%)",
      "kebab": 34,
      "kebabColor": "hsl(142, 70%, 50%)",
      "fries": 123,
      "friesColor": "hsl(74, 70%, 50%)",
      "donut": 80,
      "donutColor": "hsl(298, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 138,
      "hot dogColor": "hsl(356, 70%, 50%)",
      "burger": 51,
      "burgerColor": "hsl(77, 70%, 50%)",
      "sandwich": 158,
      "sandwichColor": "hsl(359, 70%, 50%)",
      "kebab": 161,
      "kebabColor": "hsl(176, 70%, 50%)",
      "fries": 55,
      "friesColor": "hsl(81, 70%, 50%)",
      "donut": 81,
      "donutColor": "hsl(306, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 146,
      "hot dogColor": "hsl(22, 70%, 50%)",
      "burger": 36,
      "burgerColor": "hsl(339, 70%, 50%)",
      "sandwich": 175,
      "sandwichColor": "hsl(282, 70%, 50%)",
      "kebab": 106,
      "kebabColor": "hsl(163, 70%, 50%)",
      "fries": 185,
      "friesColor": "hsl(105, 70%, 50%)",
      "donut": 12,
      "donutColor": "hsl(72, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 115,
      "hot dogColor": "hsl(323, 70%, 50%)",
      "burger": 142,
      "burgerColor": "hsl(232, 70%, 50%)",
      "sandwich": 168,
      "sandwichColor": "hsl(162, 70%, 50%)",
      "kebab": 62,
      "kebabColor": "hsl(33, 70%, 50%)",
      "fries": 70,
      "friesColor": "hsl(3, 70%, 50%)",
      "donut": 15,
      "donutColor": "hsl(84, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 11,
      "hot dogColor": "hsl(164, 70%, 50%)",
      "burger": 95,
      "burgerColor": "hsl(38, 70%, 50%)",
      "sandwich": 115,
      "sandwichColor": "hsl(25, 70%, 50%)",
      "kebab": 38,
      "kebabColor": "hsl(133, 70%, 50%)",
      "fries": 164,
      "friesColor": "hsl(87, 70%, 50%)",
      "donut": 131,
      "donutColor": "hsl(51, 70%, 50%)"
    }
  ];

data = data.sort((a, b) => a.value - b.value);

const theme = {
  labels: { text: { fontSize: 11 } },
  axis: {
    ticks: { text: { fontSize: 11, fill: "grey" } }
  }
};

const App = () => (
  <div
    style={{ width: "90%", height: "15em", float: "left", overflowY: "auto" }}
  >
    <ResponsiveBar
      height={150}
      layout="horizontal"
      margin={{
        top: 5,
        right: 5,
        bottom: 5,
        left: 35
      }}
      data={data}
      indexBy={_index => _index.value + ""}
      keys={["value"]}
      colors={["#cce4f2"]}
      colorBy="indexValue"
      groupMode="grouped"
      enableGridX={false}
      enableGridY={false}
      borderRadius={1}
      label={_label => _label.data.id}
      padding={0.2}
      labelFormat={d => <tspan x={40}>{d}</tspan>}
      axisLeft={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0
      }}
      axisBottom={null}
      labelTextColor="black"
      motionStiffness={170}
      motionDamping={26}
      theme={theme}
    />
  </div>
);

render(<App />, document.getElementById("root"));