import {
  Chart as ChartJS, ArcElement, Tooltip, CategoryScale, ChartData,
} from 'chart.js';

import { Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  CategoryScale,
);

interface IPieChart {
  data: ChartData<'pie', number[], unknown>
}

export default function PieChart({ data }: IPieChart) {
  return (
    <div className="shadow-md pr-6 pl-6 rounded w-fit flex flex-col items-center">
      <Pie
        data={data}
        width={500}
        height={300}
        options={{ plugins: { legend: { position: 'left', maxWidth: 500 } } }}
      />
    </div>
  );
}
