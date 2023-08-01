"use client";

import { FaWhatsapp } from "react-icons/fa";
import Action from "./Action";
import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useEffect, useState } from "react";
import TextSettings from "./TextSettings";

interface IWhatsapp {
  itemId: string;
}

export default function Whatsapp({ itemId }: IWhatsapp) {
  const { items } = useRulerData();

  const [item, setItem] = useState<IItem<"whatsapp">>({} as IItem<"whatsapp">);

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
      icon={<FaWhatsapp />}
      hasStatus
      actionName="Whatsapp"
    >
      <TextSettings item={item} />
    </Action>
  );
}
