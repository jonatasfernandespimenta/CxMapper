"use client";

import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useEffect, useState } from "react";

import { FaPlus } from "react-icons/fa";
import { ConditionProps } from "@/@types/IActionProps";
import ConditionForm from "./ConditionForm";

interface IConditionSettings {
  item: IItem<"condition">;
}

export default function ConditionSettings({ item }: IConditionSettings) {
  const { items, setItems } = useRulerData();

  const [conditions, setConditions] = useState<ConditionProps[]>([
    {} as ConditionProps,
  ]);

  function saveProps() {
    const updatedItem: IItem<"condition"> = {
      ...item,
      props: conditions,
    };

    const updatedItems = [...items];

    const itemIndex = updatedItems.findIndex((i) => i.id === item.id);
    updatedItems[itemIndex] = updatedItem;

    setItems(updatedItems);
  }

  function handleChange(e: ConditionProps, idx: number) {
    const udpatedConditions = [...conditions];
    udpatedConditions[idx] = e;
    setConditions(udpatedConditions);
  }

  function addCondition() {
    setConditions([...conditions, {} as ConditionProps]);
  }

  useEffect(() => {
    saveProps();
  }, [conditions]);

  return (
    <div className="flex flex-col gap-4 text-black">
      {conditions.map((_, idx) => (
        <ConditionForm
          key={idx}
          handleChange={(e) => handleChange(e, idx)}
          hasType={idx > 0}
        />
      ))}

      <div
        onClick={addCondition}
        className="flex flex-row items-center gap-1 text-green-400 font-semibold cursor-pointer"
      >
        <FaPlus size={15} />
        <p>Condition</p>
      </div>

      {/* <button onClick={saveProps}>Salvar</button> */}
    </div>
  );
}
