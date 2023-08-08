import { FaDatabase } from 'react-icons/fa';

interface IDatasetBox {
  name: string
}

export default function DatasetBox({ name }: IDatasetBox) {
  return (
    <div className="flex gap-2 bg-white shadow rounded p-2 cursor-pointer items-center justify-center min-w-[200px] hover:shadow-md">
      <FaDatabase className='text-green-500' />
      <p>{name}</p>
    </div>
  )
}
