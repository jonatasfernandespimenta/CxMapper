"use client";

import MenuOption from "../atoms/MenuOption";
import { useRulerData } from "@/contexts/RulerContext";
import {
  IActionsMenuOption,
  actionsMenuOptions,
} from "@/ui/utils/actionsMenuOptions";
import { uuid } from "uuidv4";
import Action from "../atoms/Action";
import Condition from "./Condition";

export default function ActionsMenu() {
  const { items, setItems, setIsAddActionMenuOpen } = useRulerData();

  function handleActionSelection(action: IActionsMenuOption) {
    const updatedItems = [
      ...items,
      {
        id: uuid(),
        element:
          action.text === "Condition" ? (
            <Condition condition="idade > 10" />
          ) : (
            <Action icon={action.icon} />
          ),
      },
    ];

    const addActionButton = updatedItems.splice(updatedItems.length - 2, 1)[0];
    updatedItems.push(addActionButton);

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
