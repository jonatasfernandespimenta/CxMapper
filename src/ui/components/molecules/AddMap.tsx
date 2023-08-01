import Box from "../atoms/Box";
import { FaPlusCircle } from "react-icons/fa";

interface IAddMap {
  onClick: () => void;
}

export default function AddMap({ onClick }: IAddMap) {
  return (
    <Box
      onClick={onClick}
      className="border-green-500"
      shadow={false}
      borderStyle="dashed"
    >
      <div className="flex h-full w-full items-center justify-center">
        <FaPlusCircle className="text-green-500" size={24} />
      </div>
    </Box>
  );
}
