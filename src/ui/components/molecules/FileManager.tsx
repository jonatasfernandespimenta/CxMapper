"use client";

import { FaFolder } from "react-icons/fa";
import Action from "./Action";
import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useEffect, useState } from "react";
import FileManagerSettings from "./FileManagerSettings";

interface IFileManager {
  itemId: string;
}

export default function FileManager({ itemId }: IFileManager) {
  const { items } = useRulerData();

  const [item, setItem] = useState<IItem<"file_manager">>(
    {} as IItem<"file_manager">
  );

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
      hasStatus={false}
      done={10}
      failed={10}
      icon={<FaFolder />}
      actionName="File Manager"
    >
      <FileManagerSettings item={item} />
    </Action>
  );
}
