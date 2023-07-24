"use client";

import { useRulerData } from "@/contexts/RulerContext";
import SideMenu from "./SideMenu";

export default function Ruler() {
  const { items } = useRulerData();

  return (
    <>
      <SideMenu menu="condition" />
      <div className="flex flex-row items-center">
        {items.map(({ element, id }) => (
          <div className="flex flex-row items-center">
            <div className="w-10 h-1 bg-green-500" />

            <div key={id} className="text-green-500">
              {element}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
