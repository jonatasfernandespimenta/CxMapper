'use client';

import { useEffect, useState } from 'react';

import { IItem, useRulerData } from '@/contexts/RulerContext';
import { WaitProps } from '@/@types/IActionProps';
import WaitForm from './WaitForm';

interface IWaitSettings {
  item: IItem<'wait'>;
  prevItem: IItem<any>
}

export default function WaitSettings({ item, prevItem }: IWaitSettings) {
  const { items, setItems } = useRulerData();

  const [wait, setWait] = useState<WaitProps>({} as WaitProps);

  function saveProps() {
    const updatedItem: IItem<'wait'> = {
      ...item,
      props: wait,
    };

    const updatedItems = [...items];

    const itemIndex = updatedItems.findIndex((i) => i.id === item.id);
    updatedItems[itemIndex] = updatedItem;

    setItems(updatedItems);
  }

  function handleChange(e: WaitProps) {
    setWait(e);
  }

  useEffect(() => {
    saveProps();
  }, [wait]);

  return (
    <div className="flex flex-col gap-4 text-black">
      <WaitForm
        prevItem={prevItem}
        handleChange={(e) => handleChange(e)}
      />
    </div>
  );
}
