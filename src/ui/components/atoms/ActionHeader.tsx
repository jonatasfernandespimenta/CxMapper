import Divider from "./Divider";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface IActionHeader {
  icon: JSX.Element;
  actionName: string;
  isActive: boolean;
  onClick: () => void;
}

export default function ActionHeader({
  icon,
  actionName,
  isActive,
  onClick,
}: IActionHeader) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center cursor-pointer gap-2"
    >
      <div className="flex flex-row items-center gap-2">
        <div className="bg-green-200 p-1 rounded">{icon}</div>

        <p className="text-black font-semibold">{actionName}</p>

        {isActive ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      <Divider />
    </div>
  );
}
