import Box from "../atoms/Box";
import { FaPlusCircle } from "react-icons/fa";

export default function AddMap() {
  return (
    <Box className="border-green-500" shadow={false} borderStyle="dashed">
      <div className="flex h-full w-full items-center justify-center">
        <FaPlusCircle className="text-green-500" size={24} />
      </div>
    </Box>
  );
}
