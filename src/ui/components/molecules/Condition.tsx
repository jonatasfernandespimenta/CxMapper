import { FaQuestion } from "react-icons/fa";
import Rule from "../organisms/Rule";
import Action from "../atoms/Action";

interface ICondition {
  condition: string;
}

export default function Condition({ condition }: ICondition) {
  return (
    <div>
      <Action icon={<FaQuestion />} />

      <div className="flex flex-col gap-2 mt-6 absolute">
        <div className="w-1 h-10 bg-green-500" />

        <div className="flex items-center justify-center flex-col">
          <p>{condition}</p>

          <Rule />
        </div>
      </div>
    </div>
  );
}
