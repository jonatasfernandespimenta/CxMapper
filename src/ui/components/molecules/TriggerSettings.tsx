"use client";

import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useState } from "react";
import Select from "../atoms/Select";

interface ITriggerSettings {
  item: IItem<"trigger">;
}

export default function TriggerSettings({ item }: ITriggerSettings) {
  const { items, setItems } = useRulerData();

  const [type, setType] = useState<string>("");

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
    </div>
  );
}
