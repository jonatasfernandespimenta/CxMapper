import { FaPlay } from 'react-icons/fa';
import Spinner from '../atoms/Spinner';

interface IRunJobButton {
  executing: boolean
  onClick: () => void
}

export default function RunJobButton({ onClick, executing }: IRunJobButton) {
  return (
    <div onClick={onClick} className="flex flex-row cursor-pointer items-center text-green-500 bg-green-200 max-w-fit p-2 rounded-md">

      {executing ? (<Spinner />) : (
        <>
          <FaPlay />
          <p>Run Job</p>
        </>
      )}
    </div>
  );
}
