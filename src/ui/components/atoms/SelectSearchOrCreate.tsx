import ReactSelect, { Props } from 'react-select';
import { FaPlus } from 'react-icons/fa';

interface ISelectSearchOrCreate extends Props {
  
}

export default function SelectSearchOrCreate({ ...rest }: ISelectSearchOrCreate) {
  return(
    <div className='flex flex-row items-center gap-2 w-full'>
      <ReactSelect {...rest} className='w-full' />
      <FaPlus className="text-green-500 cursor-pointer" />
    </div>
  )
}
