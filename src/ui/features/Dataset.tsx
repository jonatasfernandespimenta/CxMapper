import { FaUpload } from 'react-icons/fa';
import JsonViewer from '../components/molecules/JsonViewer';
import MainLayout from '../layouts/MainLayout';

interface IDataset {
  datasetName: string
  data: Object
}

export default function Dataset({ datasetName, data }: IDataset) {
  return (
    <MainLayout>
      <h1 className="font-semibold mb-10">{datasetName}</h1>
      <JsonViewer data={data} />

      <div className="flex mt-4 flex-row items-center gap-2 bg-green-200 w-fit p-2 rounded">
        <FaUpload className="text-green-500" />
        <button type="button">Load other file</button>
      </div>
    </MainLayout>
  );
}
