"use client";

import { useEffect, useState } from "react";
import Input from "../atoms/Input";
import Select from "../atoms/Select";
import { ConditionProps } from "@/@types/IActionProps";
import Toggle from "../atoms/Toggle";

interface IConditionForm {
  handleChange?: (data: ConditionProps) => void;
  hasType?: boolean;
}

export default function ConditionForm({
  handleChange,
  hasType,
}: IConditionForm) {
  const [condition, setCondition] = useState<string>(">");
  const [variable, setVariable] = useState("Nome");
  const [value, setValue] = useState("");
  const [type, setType] = useState<boolean | null>(null);

  const handleFormSubmit = () => {
    const data = { condition, variable, value, type: type ? "OR" : "AND" };
    if (handleChange) {
      handleChange(data);
    }
  };

  useEffect(() => {
    handleFormSubmit();
  }, [condition, variable, value]);

  return (
    <div className="flex flex-col gap-2">
      {hasType && (
        <Toggle
          option1="AND"
          option2="OR"
          value={type}
          onChange={(e) => setType(!type)}
        />
      )}

      <Select value={variable} onChange={(e) => setVariable(e.target.value)}>
        <option value="Nome">Nome</option>
        <option value="Idade">Idade</option>
      </Select>

      <Select value={condition} onChange={(e) => setCondition(e.target.value)}>
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
  );
}
