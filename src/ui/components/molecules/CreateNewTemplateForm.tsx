import { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Select from "../atoms/Select";

interface NewTemplateFormValues {
  templateName: string;
  type: 'Text' | 'E-Mail';
  description?: string
}

interface ICreateNewTemplateForm {
  handleChange: (data: NewTemplateFormValues) => void;
}

export default function CreateNewTemplateForm({ handleChange }: ICreateNewTemplateForm) {
  const [templateName, setTemplateName] = useState<string>("");
  const [type, setType] = useState<'Text' | 'E-Mail'>("E-Mail");
  const [description, setDescription] = useState<string>("");

  function handlePress() {
    handleChange({ templateName, type, description });
  }

  return (
    <div className="flex flex-col gap-4">
      <Input
        value={templateName}
        onChange={(e) => setTemplateName(e.target.value)}
        placeholder="Template name"
      />
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <Select value={description} onChange={(e) => setType(e.target.value as typeof type)}>
        <option value={"E-Mail"}>E-Mail</option>
        <option value={"Text"}>Text</option>
      </Select>

      <Button handlePress={handlePress} text="Create" />
    </div>
  );
}
