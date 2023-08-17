'use client';

import MainLayout from '../layouts/MainLayout';
import JobsIndicators from '../components/molecules/JobsIndicators';
import JobsTable from '../components/molecules/JobsTable';
import JobsInfoCharts from '../components/molecules/JobsInfoCharts';
import GovernanceFilters from '../components/molecules/GovernanceFilters';

export default function GovernanceScreen() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center mt-10 gap-4">
        <GovernanceFilters />

        <JobsIndicators succeeded={200} failed={10} />

        <JobsInfoCharts />

        <div className="w-[60%]">
          <JobsTable />
        </div>
      </div>
    </MainLayout>
  );
}
