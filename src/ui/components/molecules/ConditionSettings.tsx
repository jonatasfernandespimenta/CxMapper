"use client";

import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useState } from "react";
import Condition from "./Condition";
import Select from "../atoms/Select";
import Input from "../atoms/Input";

interface IConditionSettings {
  item: IItem<"condition">;
}

export default function ConditionSettings({ item }: IConditionSettings) {
  const { items, setItems } = useRulerData();

  const [condition, setCondition] = useState<string>(">");
  const [variable, setVariable] = useState("Nome");
  const [value, setValue] = useState("");

  function saveProps() {
    const updatedItem: IItem<"condition"> = {
      ...item,
      props: {
        // @ts-ignore
        condition,
        variable,
        value,
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
        <p>If</p>

        <Select value={variable} onChange={(e) => setVariable(e.target.value)}>
          <option value="Nome">Nome</option>
          <option value="Idade">Idade</option>
        </Select>
      </div>

      <div>
        <p>Is</p>

        <Select
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        >
          <option value={">"}>Greater</option>
          <option value={"<"}>Less</option>
          <option value={">="}>Greater or equal</option>
          <option value={"<="}>Lesser or equal</option>
          <option value="=">Equal</option>
        </Select>
      </div>

      <div className="w-full">
        <p>{condition === "=" ? "To" : "Than"}</p>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <button onClick={saveProps}>Salvar</button>
    </div>
  );
}
