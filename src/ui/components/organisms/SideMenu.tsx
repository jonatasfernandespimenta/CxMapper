"use client";

import { IItem, useRulerData } from "@/contexts/RulerContext";
import ConditionSettings from "../molecules/ConditionSettings";
import { useEffect, useState } from "react";
import { ItemTypes } from "@/@types/IActionProps";

interface ISideMenu {
  id: string;
}

export default function SideMenu({ id }: ISideMenu) {
  const { items } = useRulerData();

  const [item, setItem] = useState<IItem<ItemTypes>>();

  useEffect(() => {
    const foundItem = items.find((i) => i.id === id);
    if (foundItem) {
      const itemType = foundItem.type;

      const _item: IItem<typeof itemType> = foundItem;
      setItem(_item);
    }
  }, [id]);

  return (
    <div className="flex flex-col fixed right-0 h-screen shadow-md w-52 p-4 rounded-md border-solid border-[#DADCE0] border-[1px]">
      {item?.type === "condition" && <ConditionSettings item={item} />}
    </div>
  );
}
