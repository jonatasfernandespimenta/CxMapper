"use client";

import { useState } from "react";

export default function ConditionSettings() {
  const [condition, setCondition] = useState(">");

  return (
    <div className="flex flex-col gap-4">
      <h2>Condição</h2>

      <div>
        <p>Se</p>

        <select>
          <option>Nome</option>
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
        <input className="w-full rounded-md border-solid border-[#DADCE0] border-[1px]" />
      </div>
    </div>
  );
}
