import { FaScroll } from 'react-icons/fa';

interface IScriptBox {
  name: string
}

export default function ScriptBox({ name }: IScriptBox) {
  return (
    <div className="flex gap-2 bg-white shadow rounded p-2 cursor-pointer items-center justify-center min-w-[200px] hover:shadow-md">
      <FaScroll className='text-green-500' />
      <p>{name}</p>
    </div>
  )
}
