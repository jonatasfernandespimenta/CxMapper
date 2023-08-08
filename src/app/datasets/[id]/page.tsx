'use client'

import { datasets } from "@/mocks/datasets";
import Dataset from "@/ui/features/Dataset";
import { useEffect, useState } from "react";

interface IDatasetInfo {
  datasetName: string
  data: Object
}

export default function ViewDataset({ params }: { params: { id: string } }) {
  const [dataset, setDataset] = useState<IDatasetInfo>({} as IDatasetInfo)

  useEffect(() => {
    const data = datasets[Number(params.id)]
    setDataset({ data: data.data, datasetName: data.datasetName })
  }, [params])

  return <Dataset datasetName={dataset?.datasetName} data={dataset?.data} />
}
