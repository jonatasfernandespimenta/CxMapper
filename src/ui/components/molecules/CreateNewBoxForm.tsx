import { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

interface NewBoxFormValues {
  boxName: string;
}

interface ICreateNewBoxForm {
  handleChange: (data: NewBoxFormValues) => void;
}

export default function CreateNewBoxForm({ handleChange }: ICreateNewBoxForm) {
  const [boxName, setBoxName] = useState<string>('');

  function handlePress() {
    handleChange({ boxName });
  }

  return (
    <div className="flex flex-col gap-4">
      <Input
        value={boxName}
        onChange={(e) => setBoxName(e.target.value)}
        placeholder="Box name"
      />

      <Button handlePress={handlePress} text="Create" />
    </div>
  );
}
