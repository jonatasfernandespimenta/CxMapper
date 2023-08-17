import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale,
  BarElement,
  Title,
  ChartData,
} from 'chart.js';

ChartJS.register(
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
);

interface IBarChart {
  data: any
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Actions sent',
    },
  },
};

export default function BarChart({ data }: IBarChart) {
  return (
    <div className="shadow-md pr-6 pl-6 rounded w-fit flex flex-col items-center justify-center">
      <Bar
        options={options}
        data={data}
        width={500}
        height={300}
      />
    </div>
  );
}
