"use client";

import { FaMailBulk } from "react-icons/fa";
import Action from "./Action";
import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useEffect, useState } from "react";
import EmailSettings from "./EmailSettings";

interface IEmail {
  itemId: string;
}

export default function Email({ itemId }: IEmail) {
  const { items } = useRulerData();

  const [item, setItem] = useState<IItem<"email">>({} as IItem<"email">);

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
      hasStatus
      failed={item.failed ?? 0}
      icon={<FaMailBulk />}
      actionName="E-Mail"
    >
      <EmailSettings item={item} />
    </Action>
  );
}
