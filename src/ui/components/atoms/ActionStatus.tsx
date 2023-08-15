import { FaCheck } from 'react-icons/fa';

interface IActionStatus {
  failed?: number;
  done?: number;
}

export default function ActionStatus({ done, failed }: IActionStatus) {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex rounded-full flex-row gap-1 text-green-500 bg-green-200 p-1 items-center">
        <FaCheck />
        <p className="text-green-500">{done}</p>
      </div>

      <div className="flex rounded-full flex-row gap-1 text-red-500 bg-red-200 p-1 items-center">
        <p className="text-red-500 font-extrabold">X</p>
        <p className="text-red-500">{failed}</p>
      </div>
    </div>
  );
}
