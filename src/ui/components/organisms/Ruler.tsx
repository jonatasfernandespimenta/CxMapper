"use client";

import { useRulerData } from "@/contexts/RulerContext";
import { FaChevronRight } from "react-icons/fa";

export default function Ruler({ id }: any) {
  const { items, setItems } = useRulerData();

  return (
    <>
      <div className="flex flex-row mr-40 mb-40">
        {items.map(({ element, id }) => (
          <div key={id} className="flex flex-row ">
            <div className="w-6 h-1 bg-green-500 rounded-lg" />
            <FaChevronRight className="text-green-500 -mt-1.5 -ml-2.5" />

            <div className="text-green-500 -mt-12">{element}</div>
          </div>
        ))}
      </div>
    </>
  );
}
