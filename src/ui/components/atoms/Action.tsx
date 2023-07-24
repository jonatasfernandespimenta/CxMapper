import { FaPlus } from "react-icons/fa";

interface IAction {
  onClick?: () => void;
  ref?: any;
  icon: JSX.Element;
}

export default function Action({ onClick, ref, icon }: IAction) {
  return (
    <div
      onClick={onClick}
      ref={ref}
      className="text-green-500 cursor-pointer text-xl"
    >
      {icon}
    </div>
  );
}
