'use client';

import { FaClock } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Rule from '../organisms/Rule';
import Action from './Action';
import { IItem, useRulerData } from '@/contexts/RulerContext';
import WaitSettings from './WaitSettings';
import { ItemTypes } from '@/@types/IActionProps';

interface IWait {
  condition: string;
  itemId: string;
  rulerItems?: IItem<ItemTypes>[]
}

export default function Wait({ condition, itemId, rulerItems }: IWait) {
  const { items } = useRulerData();

  const [item, setItem] = useState<IItem<'wait'>>(
    {} as IItem<'wait'>,
  );

  const [prevItem, setPrevItem] = useState<IItem<any>>({} as IItem<any>);

  useEffect(() => {
    const foundItemIndex = items.findIndex((i) => i.id === itemId);
    const foundItem = items[foundItemIndex];

    const previousItemIndex = foundItemIndex - 1;
    const foundPreviousItem = items[previousItemIndex];

    if (foundItem) {
      const itemType = foundItem.type;

      const typedFoundItem: IItem<typeof itemType> = foundItem;
      const typedPreviousItem: IItem<typeof itemType> = foundPreviousItem;

      setItem(typedFoundItem);
      setPrevItem(typedPreviousItem);
    }
  }, [items, itemId]);

  return (
    <div className="flex-col items-center justify-center">
      <Action itemId={itemId} icon={<FaClock />} actionName="Wait">
        <WaitSettings prevItem={prevItem} item={item} />
      </Action>

      <div className="flex flex-col absolute ml-28">
        <div className="w-1 h-28 bg-green-500 rounded-lg -mb-1" />

        <div className="flex items-center justify-center flex-col">
          <Rule rulerItems={rulerItems} />
        </div>
      </div>
    </div>
  );
}
