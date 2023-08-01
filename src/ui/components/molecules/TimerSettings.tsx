"use client";

import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useEffect, useState } from "react";
import Select from "../atoms/Select";

interface ITimerSettings {
  item: IItem<"timer">;
}

export default function TimerSettings({ item }: ITimerSettings) {
  const { items, setItems } = useRulerData();

  const [expression, setExpression] = useState("")

  function saveProps() {
    const updatedItem: IItem<"timer"> = {
      ...item,
      props: {
        expression,
      },
    };

    const updatedItems = [...items];

    const itemIndex = updatedItems.findIndex((i) => i.id === item.id);
    updatedItems[itemIndex] = updatedItem;

    setItems(updatedItems);
  }

  useEffect(() => {
    saveProps();
  }, [expression])

  return (
    <div className="flex flex-col gap-4 text-black">
      <div>
        <p>Expression</p>
        <Select value={expression} onChange={(e) => setExpression(e.target.value)}>
          <option>Every minute</option>
          <option>Every hour</option>
          <option>Every 12 hours</option>
          <option>Everyday</option>
        </Select>
      </div>

    </div>
  );
}

