import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';
import { governance, Job } from '@/mocks/governance';

export default function JobsTable() {
  const columns = useMemo<MRT_ColumnDef<Job>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 150,
      },
      {
        accessorKey: 'actionType',
        header: 'Action Type',
        size: 150,
      },
      {
        accessorKey: 'channel',
        header: 'Channel',
        size: 150,
      },
      {
        accessorKey: 'customerId',
        header: 'Customer',
        size: 200,
      },
      {
        accessorKey: 'resultStatus',
        header: 'Status',
        size: 150,
      },
      {
        accessorKey: 'timestamp',
        header: 'Timestamp',
        size: 150,
      },
    ],
    [],
  );

  return <MaterialReactTable columns={columns} data={governance.maps[0].jobs} />;
}
