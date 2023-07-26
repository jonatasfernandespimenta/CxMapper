"use client";

import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useState } from "react";
import Select from "../atoms/Select";
import Input from "../atoms/Input";

import { FaPlus } from "react-icons/fa";

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
      <div className="flex flex-col gap-2">
        <Select value={variable} onChange={(e) => setVariable(e.target.value)}>
          <option value="Nome">Nome</option>
          <option value="Idade">Idade</option>
        </Select>

        <Select
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        >
          <option value={">"}>Greater than</option>
          <option value={"<"}>Less than</option>
          <option value={">="}>Greater or equal to</option>
          <option value={"<="}>Lesser or equal to</option>
          <option value="=">Equal to</option>
        </Select>

        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value"
        />
      </div>

      <div className="flex flex-row items-center gap-1 text-green-400 font-semibold cursor-pointer">
        <FaPlus size={15} />
        <p>Condition</p>
      </div>

      <button onClick={saveProps}>Salvar</button>
    </div>
  );
}
