'use client';

import { useEffect, useState } from 'react';
import { IItem, useRulerData } from '@/contexts/RulerContext';
import Select from '../atoms/Select';
import Input from '../atoms/Input';
import Toggle from '../atoms/Toggle';
import SelectSearchOrCreate from '../atoms/SelectSearchOrCreate';

interface ITriggerSettings {
  item: IItem<'trigger'>
}

const optionList = [
  { value: '1', label: 'Welcome' },
  { value: '2', label: 'Newsletter' },
];

export default function TriggerSettings({ item }: ITriggerSettings) {
  const { items, setItems } = useRulerData();

  const [triggerType, setTriggetType] = useState(false);

  const [type, setType] = useState<string>('File');
  const [dataset, setDataset] = useState<string | undefined>('');
  const [expression, setExpression] = useState('');

  const [fileName, setFileName] = useState('');
  const [startFileName, setStartFileName] = useState('');

  function saveProps() {
    const updatedItem: IItem<'trigger'> = {
      ...item,
      props: {
        type,
      },
    };

    const updatedItems = [...items];

    const itemIndex = updatedItems.findIndex((i) => i.id === item.id);
    updatedItems[itemIndex] = updatedItem;

    setItems(updatedItems);
  }

  useEffect(() => {
    saveProps();
  }, [type, dataset]);

  return (
    <div className="flex flex-col gap-4 text-black">
      <div>
        <p>Type</p>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <option>File</option>
          <option>Timer</option>
          <option>Hit</option>
        </Select>
      </div>

      {type === 'Timer' && (
        <div className="gap-2">
          <p>Expression</p>

          <div className="mb-2">
            <Toggle
              option1="Premade"
              option2="Custom"
              value={triggerType}
              onChange={() => setTriggetType(!triggerType)}
            />
          </div>

          {triggerType ? (
            <div>
              <p>Cron Expression</p>
              <Input value={expression} onChange={(e) => setExpression(e.target.value)} />
            </div>
          ) : (
            <Select value={expression} onChange={(e) => setExpression(e.target.value)}>
              <option>Every minute</option>
              <option>Every hour</option>
              <option>Every 12 hours</option>
              <option>Everyday</option>
            </Select>
          )}
        </div>
      )}

      {
        type === 'File' && (
          <div>
            <div>
              <p>File name</p>
              <Input value={fileName} onChange={(e) => setFileName(e.target.value)} />
            </div>

            <div>
              <p>Start File Name</p>
              <Input value={startFileName} onChange={(e) => setStartFileName(e.target.value)} />
            </div>
          </div>
        )
      }

      <div>
        <p>Dataset</p>
        <SelectSearchOrCreate onChange={(e) => setDataset(e?.value)} options={optionList} />
      </div>
    </div>
  );
}
