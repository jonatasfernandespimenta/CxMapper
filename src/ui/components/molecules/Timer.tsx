"use client";

import { FaClock } from "react-icons/fa";
import Action from "./Action";
import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useEffect, useState } from "react";
import TimerSettings from "./TimerSettings";

interface ITimer {
  itemId: string;
}

export default function Timer({ itemId }: ITimer) {
  const { items } = useRulerData();

  const [item, setItem] = useState<IItem<"timer">>({} as IItem<"timer">);

  useEffect(() => {
    const foundItem = items.find((i) => i.id === itemId);
    if (foundItem) {
      const itemType = foundItem.type;

      const _item: IItem<typeof itemType> = foundItem;
      setItem(_item);
    }
  }, [items, itemId]);

  return (
    <Action
      done={item.done ?? 0}
      failed={item.failed ?? 0}
      icon={<FaClock />}
      actionName="Timer"
    >
      <TimerSettings item={item} />
    </Action>
  );
}

