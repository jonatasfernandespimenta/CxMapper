"use client";

import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useState } from "react";
import Condition from "./Condition";

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
      element: <Condition condition={`${variable} ${condition} ${value}`} />,
    };

    const updatedItems = [...items];

    const itemIndex = updatedItems.findIndex((i) => i.id === item.id);
    updatedItems[itemIndex] = updatedItem;

    setItems(updatedItems);
  }

  return (
    <div className="flex flex-col gap-4">
      <h2>Condição</h2>

      <div>
        <p>Se</p>

        <select value={variable} onChange={(e) => setVariable(e.target.value)}>
          <option value="Nome">Nome</option>
          <option value="Idade">Idade</option>
        </select>
      </div>

      <div>
        <select
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        >
          <option value={">"}>Maior</option>
          <option value={"<"}>Menor</option>
          <option value={">="}>Maior ou igual</option>
          <option value={"<="}>Menor ou igual</option>
          <option value="=">Igual</option>
        </select>
      </div>

      <div className="w-full">
        <p>{condition === "=" ? "A" : "Que"}</p>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full rounded-md border-solid border-[#DADCE0] border-[1px]"
        />
      </div>

      <button onClick={saveProps}>Salvar</button>
    </div>
  );
}
