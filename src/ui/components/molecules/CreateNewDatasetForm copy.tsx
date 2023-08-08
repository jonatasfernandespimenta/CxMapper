import { useEffect, useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

interface NewDatasetFormValues {
  datasetName: string;
}

interface ICreateNewDatasetForm {
  handleChange: (data: NewDatasetFormValues) => void;
}

export default function CreateNewDatasetForm({ handleChange }: ICreateNewDatasetForm) {
  const [datasetName, setDatasetName] = useState<string>("");

  function handlePress() {
    handleChange({ datasetName });
  }

  return (
    <div className="flex flex-col gap-4">
      <Input
        value={datasetName}
        onChange={(e) => setDatasetName(e.target.value)}
        placeholder="Dataset name"
      />

      <Button handlePress={handlePress} text="Create" />
    </div>
  );
}
