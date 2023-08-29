import { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Select from '../atoms/Select';

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

      <div>
        <Select>
          <option>Google Bucket</option>
          <option>AWS S3</option>
          <option>Azure Buckets</option>
          <option>Quadient ICM</option>
        </Select>

        <Input
          placeholder="API Access Key"
        />
        <Input
          placeholder="API Secret"
        />
      </div>

      <Button handlePress={handlePress} text="Create" />
    </div>
  );
}
