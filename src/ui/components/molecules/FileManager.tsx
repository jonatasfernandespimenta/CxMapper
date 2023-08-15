'use client';

import { FaFolder } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Action from './Action';
import { IItem, useRulerData } from '@/contexts/RulerContext';
import FileManagerSettings from './FileManagerSettings';

interface IFileManager {
  itemId: string;
}

export default function FileManager({ itemId }: IFileManager) {
  const { items } = useRulerData();

  const [item, setItem] = useState<IItem<'file_manager'>>(
    {} as IItem<'file_manager'>,
  );

  useEffect(() => {
    const foundItem = items.find((i) => i.id === itemId);
    if (foundItem) {
      const itemType = foundItem.type;

      const typedFoundItem: IItem<typeof itemType> = foundItem;
      setItem(typedFoundItem);
    }
  }, [items, itemId]);

  return (
    <Action
      itemId={itemId}
      hasStatus={false}
      done={10}
      failed={10}
      icon={<FaFolder />}
      actionName="File Manager"
    >
      <FileManagerSettings item={item} />
    </Action>
  );
}
