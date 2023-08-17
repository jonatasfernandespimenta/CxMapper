import BarChart from '../atoms/BarChart';
import PieChart from '../atoms/PieChart';

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

export default function JobsInfoCharts() {
  return (
    <div className="flex flex-row gap-4">
      <PieChart data={data01} />
      <BarChart data={data02} />
    </div>
  );
}
