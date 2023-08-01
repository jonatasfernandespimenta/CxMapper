"use client";

import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useEffect, useState } from "react";
import Select from "../atoms/Select";
import Input from "../atoms/Input";

interface ITriggerSettings {
  item: IItem<"trigger">;
}

export default function TriggerSettings({ item }: ITriggerSettings) {
  const { items, setItems } = useRulerData();

  const [type, setType] = useState<string>("");
  const [expression, setExpression] = useState("")

  function saveProps() {
    const updatedItem: IItem<"trigger"> = {
      ...item,
      props: {
        type,
      },
    };

    const updatedItems = [...items];

    const itemIndex = updatedItems.findIndex((i) => i.id === item.id);
    updatedItems[itemIndex] = updatedItem;

    setItems(updatedItems);
  }

  useEffect(() => {
    saveProps();
  }, [type])

  return (
    <div className="flex flex-col gap-4 text-black">
      <div>
        <p>Type</p>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <option>File</option>
          <option>Timer</option>
          <option>Hit</option>
        </Select>
      </div>

      {
        type === "Timer" && <div>
          <p>Expression</p>
          <Select value={expression} onChange={(e) => setExpression(e.target.value)}>
            <option>Every minute</option>
            <option>Every hour</option>
            <option>Every 12 hours</option>
            <option>Everyday</option>
          </Select>
        </div>
      }
    </div>
  );
}
