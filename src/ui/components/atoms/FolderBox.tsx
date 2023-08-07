import { FaFolder } from 'react-icons/fa';

interface IFolderBox {
  name: string
}

export default function FolderBox({ name }: IFolderBox) {
  return (
    <div className="flex gap-2 bg-white shadow rounded p-2 cursor-pointer items-center justify-center min-w-[200px] hover:shadow-md">
      <FaFolder className='text-green-500' />
      <p>{name}</p>
    </div>
  )
}
