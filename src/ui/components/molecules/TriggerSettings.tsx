"use client";

import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useEffect, useState } from "react";
import Select from "../atoms/Select";
import Input from "../atoms/Input";
import Toggle from "../atoms/Toggle";

interface ITriggerSettings {
  item: IItem<"trigger">;
}

export default function TriggerSettings({ item }: ITriggerSettings) {
  const { items, setItems } = useRulerData();

  const [triggerType, setTriggetType] = useState(false)

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
        type === "Timer" && <div className="gap-2">
          <p>Expression</p>

          <div className="mb-2">
            <Toggle
              option1="Premade"
              option2="Custom"
              value={triggerType}
              onChange={(e) => setTriggetType(!triggerType)}
            />
          </div>

          {
            triggerType ? (
              <div>
                <p>Cron Expression</p>
                <Input value={expression} onChange={(e) => setExpression(e.target.value)} />
              </div>
            ) :
              <Select value={expression} onChange={(e) => setExpression(e.target.value)}>
                <option>Every minute</option>
                <option>Every hour</option>
                <option>Every 12 hours</option>
                <option>Everyday</option>
              </Select>
          }
        </div>
      }
    </div>
  );
}
