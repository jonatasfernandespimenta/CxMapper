'use client';

import { useEffect, useState } from 'react';
import { IItem, useRulerData } from '@/contexts/RulerContext';
import TextArea from '../atoms/TextArea';
import Select from '../atoms/Select';
import SelectSearchOrCreate from '../atoms/SelectSearchOrCreate';
import Input from '../atoms/Input';
import { datasetOptions } from '@/mocks/datasetOptions';

interface IEmailSettings {
  item: IItem<'whatsapp'>
}

export default function TextSettings({ item }: IEmailSettings) {
  const { items, setItems } = useRulerData();

  const [to, setTo] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [template, setTemplate] = useState<string | undefined>('');
  const [actionDescription, setActionDescription] = useState<string>('');

  function saveProps() {
    const updatedItem: IItem<'whatsapp'> = {
      ...item,
      description: actionDescription,
      props: {
        number: to,
        message,
      },
    };

    const updatedItems = [...items];

    const itemIndex = updatedItems.findIndex((i) => i.id === item.id);
    updatedItems[itemIndex] = updatedItem;

    setItems(updatedItems);
  }

  useEffect(() => {
    saveProps();
  }, [to, message, template, actionDescription]);

  const optionList = [
    { value: '1', label: 'Boas-Vindas Odonto PME' },
  ];

  return (
    <div className="flex flex-col gap-4 text-black">
      <div>
        <p>Action Description</p>
        <Input onChange={(e) => setActionDescription(e.target.value)} value={actionDescription} />
      </div>

      <div>
        <p>To</p>
        <Select value={to} onChange={(e) => setTo(e.target.value)}>
          {datasetOptions.map(({ label, value }) => (
            <option value={value}>{label}</option>
          ))}
        </Select>
      </div>

      <div>
        <p>Template</p>
        <SelectSearchOrCreate onChange={(e) => setTemplate(e?.value)} options={optionList} />
      </div>

      <div>
        <p>Message</p>
        <TextArea value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
    </div>
  );
}
