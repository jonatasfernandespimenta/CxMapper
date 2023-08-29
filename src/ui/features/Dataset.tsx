import { FaUpload } from 'react-icons/fa';
import { useState } from 'react';
import JsonViewer from '../components/molecules/JsonViewer';
import MainLayout from '../layouts/MainLayout';

interface IDataset {
  datasetName: string
  data: Object
}

export default function Dataset({ datasetName, data }: IDataset) {
  const [showData, setShowData] = useState<boolean>(false);

  return (
    <MainLayout>
      <h1 className="font-semibold mb-10">{datasetName}</h1>
      <JsonViewer data={showData ? data : {}} />

      <div className="flex mt-4 flex-row items-center gap-2 bg-green-200 w-fit p-2 rounded">
        <FaUpload className="text-green-500" />
        <input type="file" onChange={() => setShowData(true)} />
      </div>
    </MainLayout>
  );
}
