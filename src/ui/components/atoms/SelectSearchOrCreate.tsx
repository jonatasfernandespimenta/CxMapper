import { Props } from 'react-select';
import { FaPlus } from 'react-icons/fa';
import MySelect from './MySelect';

interface ISelectSearchOrCreate extends Props {
  onClick?: () => void;
  goTo?: string;
}

export default function SelectSearchOrCreate({
  onClick,
  goTo,
  ...rest
}: ISelectSearchOrCreate) {
  return (
    <div className="flex flex-row items-center gap-2 w-full">
      <MySelect {...rest} className="w-full" />

      <a href={goTo ?? '#'} target="_blank" rel="noreferrer">
        <FaPlus className="text-green-500 cursor-pointer" onClick={onClick} />
      </a>
    </div>
  );
}
