'use client';

import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import MainLayout from '../layouts/MainLayout';
import JobsIndicators from '../components/molecules/JobsIndicators';
import JobsTable from '../components/molecules/JobsTable';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
);

const data = [
  { label: 'Customer didnt receive email', angle: 10 },
  { label: 'Customer received email', angle: 200 },
  { label: 'Customer opened the email', angle: 150 },
  { label: 'Customer didnt receive the sms', angle: 10 },
  { label: 'Customer received sms', angle: 200 },
  { label: 'Customer received whatsapp', angle: 200 },
  { label: 'Customer didnt receive whatsapp', angle: 4 },
];

const data01 = {
  labels: data.map((item) => item.label),
  datasets: [{
    label: 'Label',
    data: data.map((item) => item.angle),
    backgroundColor: [
      '#2d6a4f',
      '#40916c',
      '#52b788',
      '#74c69d',
      '#95d5b2',
      '#b7e4c7',
      '#d8f3dc',
    ],
  }],
};

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

const labels = ['SMS', 'Email', 'Whatsapp'];

export const data02 = {
  labels,
  datasets: [
    {
      label: 'Quantity',
      data: ['20', '100', '120'],
      backgroundColor: '#40916c',
    },
  ],
};

export default function GovernanceScreen() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center mt-10 gap-4">
        <JobsIndicators succeeded={200} failed={10} />

        <div className="flex flex-row gap-4">
          <div className="shadow-md pr-6 pl-6 rounded w-fit flex flex-col items-center">
            <Pie
              data={data01}
              width={500}
              height={300}
              options={{ plugins: { legend: { position: 'left', maxWidth: 500 } } }}
            />
          </div>

          <div className="shadow-md pr-6 pl-6 rounded w-fit flex flex-col items-center justify-center">
            <Bar
              options={options}
              data={data02}
              width={500}
              height={300}
            />
          </div>
        </div>

        <div className="w-[60%]">
          <JobsTable />
        </div>
      </div>

    </MainLayout>
  );
}
