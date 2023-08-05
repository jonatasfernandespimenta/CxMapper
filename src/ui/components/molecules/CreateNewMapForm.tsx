import { useEffect, useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

interface NewMapFormValues {
  mapName: string;
  businessLine: string;
}

interface ICreateNewMapForm {
  handleChange: (data: NewMapFormValues) => void;
}

export default function CreateNewMapForm({ handleChange }: ICreateNewMapForm) {
  const [mapName, setMapName] = useState<string>("");
  const [businessLine, setBusinessLine] = useState<string>("");

  function handlePress() {
    handleChange({ mapName, businessLine });
  }

  return (
    <div className="flex flex-col gap-4">
      <Input
        value={mapName}
        onChange={(e) => setMapName(e.target.value)}
        placeholder="Map name"
      />
      <Input
        value={businessLine}
        onChange={(e) => setBusinessLine(e.target.value)}
        placeholder="Business Line"
      />

      <Button handlePress={handlePress} text="Create" />
    </div>
  );
}
