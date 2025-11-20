import { PieChart, Pie, Tooltip } from "recharts";

const data = [
  { name: "Critical", value: 8 },
  { name: "High", value: 14 },
  { name: "Medium", value: 20 },
  { name: "Low", value: 10 },
];

export default function StatusChart() {
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#4ade80"
        label
      />
      <Tooltip />
    </PieChart>
  );
}
