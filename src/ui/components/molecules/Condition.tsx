"use client";

import { FaQuestion } from "react-icons/fa";
import Rule from "../organisms/Rule";
import Action from "./Action";
import ConditionSettings from "./ConditionSettings";
import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useEffect, useState } from "react";

interface ICondition {
  condition: string;
  itemId: string;
}

export default function Condition({ condition, itemId }: ICondition) {
  const { items } = useRulerData();

  const [item, setItem] = useState<IItem<"condition">>(
    {} as IItem<"condition">
  );

  useEffect(() => {
    console.log("itemId: ", itemId);
    const foundItem = items.find((i) => i.id === itemId);
    if (foundItem) {
      const itemType = foundItem.type;

      const _item: IItem<typeof itemType> = foundItem;
      setItem(_item);
    }
  }, [items, itemId]);

  return (
    <div className="flex-col items-center justify-center">
      <Action itemId={itemId} icon={<FaQuestion />} actionName="Condition">
        <ConditionSettings item={item} />
      </Action>

      <div className="flex flex-col absolute ml-28">
        <div className="w-1 h-28 bg-green-500 rounded-lg -mb-1" />

        <div className="flex items-center justify-center flex-col">
          <Rule />
        </div>
      </div>
    </div>
  );
}
