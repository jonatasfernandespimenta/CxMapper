import AmountIndicator from '../atoms/AmountIndicator';

interface IJobsIndicators {
  succeeded: number
  failed: number
}

export default function JobsIndicators({ succeeded, failed }: IJobsIndicators) {
  return (
    <div className="flex flex-row gap-8">
      <AmountIndicator label="Total" amount={succeeded + failed} type="neutral" />
      <AmountIndicator label="Succeeded" amount={succeeded} type="green" />
      <AmountIndicator label="Failed" amount={failed} type="red" />
    </div>
  );
}
