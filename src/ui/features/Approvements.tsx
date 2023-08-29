import ApprovementsTable from '../components/molecules/ApprovementsTable';
import MainLayout from '../layouts/MainLayout';

export default function ApprovementsScreen() {
  return (
    <MainLayout>
      <div className="w-full flex items-center justify-center">
        <div className="w-[60%]">
          <ApprovementsTable />
        </div>
      </div>
    </MainLayout>
  );
}
