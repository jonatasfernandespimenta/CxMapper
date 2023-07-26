import { FaPlus } from "react-icons/fa";

interface IAddActionButton {
  onClick?: () => void;
}

export default function AddActionButton({ onClick }: IAddActionButton) {
  return (
    <div onClick={onClick}>
      <FaPlus className="text-green-500 cursor-pointer" size={18} />
    </div>
  );
}
