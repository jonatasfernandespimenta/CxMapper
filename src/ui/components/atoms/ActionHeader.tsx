import ActionStatus from "./ActionStatus";
import Divider from "./Divider";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface IActionHeader {
  icon: JSX.Element;
  actionName: string;
  isActive: boolean;
  onClick: () => void;
  failed?: number;
  done?: number;
  hasStatus?: boolean;
}

export default function ActionHeader({
  icon,
  actionName,
  isActive,
  onClick,
  done,
  failed,
  hasStatus,
}: IActionHeader) {
  return (
    <>
      <div
        onClick={onClick}
        className="flex flex-col items-center cursor-pointer gap-2"
      >
        {hasStatus && <ActionStatus done={done} failed={failed} />}
        <div className="flex flex-row items-center gap-2 select-none">
          <div className="bg-green-200 p-1 rounded">{icon}</div>

          <p className="text-black font-semibold">{actionName}</p>

          {isActive ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        <Divider />
      </div>
    </>
  );
}
