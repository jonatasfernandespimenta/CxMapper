"use client";

import { FaFile } from "react-icons/fa";
import Action from "./Action";
import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useEffect, useState } from "react";
import PdfSettings from "./PdfSettings";

interface IPdf {
  itemId: string;
}

export default function Pdf({ itemId }: IPdf) {
  const { items } = useRulerData();

  const [item, setItem] = useState<IItem<"pdf">>({} as IItem<"pdf">);

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
      icon={<FaFile />}
      actionName="PDF"
    >
      <PdfSettings item={item} />
    </Action>
  );
}
