"use client";

import { useRulerData } from "@/contexts/RulerContext";
import SideMenu from "./SideMenu";
import { useMapData } from "@/contexts/MapContext";

export default function Ruler() {
  const { items } = useRulerData();
  const { setActiveItem, activeItem } = useMapData();

  function handleItemSelection(id: string) {
    if (id !== "add") {
      setActiveItem(id);
    }
  }

  return (
    <>
      {activeItem && <SideMenu id={activeItem} />}

      <div className="flex flex-row items-center">
        {items.map(({ element, id }) => (
          <div key={id} className="flex flex-row items-center">
            <div className="w-10 h-1 bg-green-500" />

            <div
              className="text-green-500"
              onClick={() => handleItemSelection(id)}
            >
              {element}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
