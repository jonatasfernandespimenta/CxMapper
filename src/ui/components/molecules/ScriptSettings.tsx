'use client';

import { useEffect, useState } from 'react';
import { IItem, useRulerData } from '@/contexts/RulerContext';
import Input from '../atoms/Input';
import Select from '../atoms/Select';

interface IScriptSettings {
  item: IItem<'script'>;
}

export default function ScriptSettings({ item }: IScriptSettings) {
  const { items, setItems } = useRulerData();

  const [script, setScript] = useState<string>('');
  const [action, setAction] = useState<string>('');
  const [actionDescription, setActionDescription] = useState<string>('');

  function saveProps() {
    const updatedItem: IItem<'script'> = {
      ...item,
      description: actionDescription,
      props: {
        script,
        action,
      },
    };

    const updatedItems = [...items];

    const itemIndex = updatedItems.findIndex((i) => i.id === item.id);
    updatedItems[itemIndex] = updatedItem;

    setItems(updatedItems);
  }

  useEffect(() => {
    saveProps();
  }, [actionDescription, script, action]);

  return (
    <div className="flex flex-col gap-4 text-black">
      <div>
        <p>Action Description</p>
        <Input
          onChange={(e) => setActionDescription(e.target.value)}
          value={actionDescription}
        />
      </div>

      <div>
        <p>Action</p>
        <Select value={action} onChange={(e) => setAction(e.target.value)}>
          <option value="Idade">LOG</option>
          <option value="Nome">Send BI</option>
          <option value="Idade">Send data lob</option>
        </Select>
      </div>

      <div>
        <p>Script</p>
        <Select value={action} onChange={(e) => setAction(e.target.value)}>
          <option value="Idade">Organize data</option>
        </Select>
      </div>
    </div>
  );
}
