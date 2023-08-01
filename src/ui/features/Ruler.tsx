"use client";

import MainLayout from "../layouts/MainLayout";
import Rule from "../components/organisms/Rule";
import { useRouter } from "next/navigation";
import ReactSelect from "react-select";
import { useMapData } from "@/contexts/MapContext";

const optionList = [
  { value: "1", label: "All" },
  { value: "2", label: "#37489" },
  { value: "3", label: "#73894" },
];

export default function RulerScreen() {
  const router = useRouter();
  const { jobFilter, setJobFilter } = useMapData();

  return (
    <MainLayout>
      <div className="flex flex-col gap-20">
        <div>
          <h1
            className="text-gray-400 font-semibold cursor-pointer mt-4"
            onClick={() => router.push("/")}
          >
            SEGSig Seguros | Odonto |{" "}
            <span className="text-green-500">Kit de Boas Vindas</span>
          </h1>
          <ReactSelect
            onChange={(e) => e && setJobFilter(e.value)}
            placeholder="Localize Job..."
            options={optionList}
          />
        </div>

        <Rule />
      </div>
    </MainLayout>
  );
}
