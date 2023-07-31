'use client'

import { FaSms } from "react-icons/fa";
import Action from "../atoms/Action";
import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useEffect, useState } from "react";
import TextSettings from "./TextSettings";

interface ISms {
  itemId: string
}

export default function Sms({ itemId }: ISms) {
  const { items } = useRulerData();

  const [item, setItem] = useState<IItem<'whatsapp'>>({} as IItem<'whatsapp'>);

  useEffect(() => {
    const foundItem = items.find((i) => i.id === itemId);
    if (foundItem) {
      const itemType = foundItem.type;

      const _item: IItem<typeof itemType> = foundItem;
      setItem(_item);
    }
  }, [items, itemId]);

  return (
    <Action icon={<FaSms />} actionName="SMS">
      <TextSettings item={item} />
    </Action>
  );
}
