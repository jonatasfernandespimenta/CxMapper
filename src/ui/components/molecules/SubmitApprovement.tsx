import Spinner from '../atoms/Spinner';

interface ISubmitApprovement {
  executing: boolean
  onClick: () => void
}

export default function SubmitApprovement({ executing, onClick }: ISubmitApprovement) {
  return (
    <div onClick={onClick} className="flex flex-row cursor-pointer items-center text-green-500 bg-green-200 max-w-fit p-2 rounded-md">

      {executing ? (<Spinner />) : (
        <p>Submit Approvement</p>
      )}
    </div>
  );
}
