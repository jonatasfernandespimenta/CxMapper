'use client';

import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';
import { approvements, IApprovement } from '@/mocks/approvements';

export default function ApprovementsTable() {
  const columns = useMemo<MRT_ColumnDef<IApprovement>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 150,
      },
      {
        accessorKey: 'product',
        header: 'Product',
        size: 150,
      },
      {
        accessorKey: 'createdAt',
        header: 'Created At',
        size: 150,
      },
      {
        accessorKey: 'createdBy',
        header: 'Created By',
        size: 200,
      },
      {
        accessorKey: 'approvalStatus',
        header: 'Status',
        size: 150,
      },
    ],
    [],
  );

  return <MaterialReactTable columns={columns} data={approvements.approvements} />;
}
