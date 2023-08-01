import RulerContextProvider from "@/contexts/RulerContext";
import Ruler from "./Ruler";
import { useRouter } from "next/router";

export default function Rule() {
  return (
    <RulerContextProvider>
      <Ruler />
    </RulerContextProvider>
  );
}
