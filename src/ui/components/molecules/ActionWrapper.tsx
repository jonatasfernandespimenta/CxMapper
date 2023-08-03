"use client";

import Action from "./Action";
import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useEffect, useState } from "react";;
import { ItemTypes } from "@/@types/IActionProps";
import { selectSettings } from "@/ui/utils/selectSettings";

interface IActionWrapper {
  itemId: string;
  itemType: ItemTypes;
  actionName: string;
  actionIcon: JSX.Element
}

export default function ActionWrapper({ itemId, itemType, actionName, actionIcon }: IActionWrapper) {
  const { items } = useRulerData();

  const [item, setItem] = useState<IItem<typeof itemType>>({} as IItem<typeof itemType>);
  const [settings, setSettings] = useState()

  useEffect(() => {
    const foundItem = items.find((i) => i.id === itemId);
    if (foundItem) {
      const _item: IItem<typeof itemType> = foundItem;
      setItem(_item);
    }
  }, [items, itemId]);

  useEffect(() => {
    const foundSetting = selectSettings({ item, type: itemType })
    setSettings(foundSetting)
  }, [itemType, item])

  return (
    <Action
      done={item.done ?? 0}
      hasStatus={false}
      failed={item.failed ?? 0}
      icon={actionIcon}
      actionName={actionName}
      itemId={itemId}
      description={item.description}
    >
      {settings}
    </Action>
  );
}
