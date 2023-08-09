import { useEffect, useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

interface NewScriptFormValues {
  scriptName: string;
}

interface ICreateNewScriptForm {
  handleChange: (data: NewScriptFormValues) => void;
}

export default function CreateNewScriptForm({ handleChange }: ICreateNewScriptForm) {
  const [scriptName, setScriptName] = useState<string>("");

  function handlePress() {
    handleChange({ scriptName });
  }

  return (
    <div className="flex flex-col gap-4">
      <Input
        value={scriptName}
        onChange={(e) => setScriptName(e.target.value)}
        placeholder="Script name"
      />

      <Button handlePress={handlePress} text="Create" />
    </div>
  );
}
