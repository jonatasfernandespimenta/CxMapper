"use client";

import MenuOption from "../atoms/MenuOption";
import { IItem, useRulerData } from "@/contexts/RulerContext";
import {
  IActionsMenuOption,
  actionsMenuOptions,
} from "@/ui/utils/actionsMenuOptions";
import { uuid } from "uuidv4";
import Action from "../atoms/Action";
import Condition from "./Condition";
import { useMapData } from "@/contexts/MapContext";

export default function ActionsMenu() {
  const { items, setItems } = useRulerData();

  const { setActiveItem } = useMapData();
  const { setIsAddActionMenuOpen } = useRulerData();

  function handleActionSelection({ icon, text, type }: IActionsMenuOption) {
    const itemId = uuid();

    const updatedItems: IItem<typeof type>[] = [
      ...items,
      {
        id: itemId,
        props: null,
        type,
        element:
          text === "Condition" ? (
            <Condition condition="" />
          ) : (
            <Action icon={icon} />
          ),
      },
    ];

    const addActionButton = updatedItems.splice(updatedItems.length - 2, 1)[0];
    updatedItems.push(addActionButton);

    setActiveItem(itemId);
    setItems(updatedItems);
    setIsAddActionMenuOpen(false);
  }

  return (
    <div className="flex mt-10 flex-col bg-white shadow-md w-40 rounded-md border-solid border-[#DADCE0] border-[1px] absolute">
      {actionsMenuOptions.map((action) => (
        <MenuOption
          onClick={() => handleActionSelection(action)}
          key={action.text}
          text={action.text}
          icon={action.icon}
        />
      ))}
    </div>
  );
}
