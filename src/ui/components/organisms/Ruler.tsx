'use client';

import { FaChevronRight } from 'react-icons/fa';
import { useEffect } from 'react';
import { IItem, useRulerData } from '@/contexts/RulerContext';
import { ItemTypes } from '@/@types/IActionProps';

interface IRuler {
  rulerItems?: IItem<ItemTypes>[]
  ruleId?: string
}

export default function Ruler({ rulerItems, ruleId }: IRuler) {
  const { items, setItems } = useRulerData();

  useEffect(() => {
    if (rulerItems) {
      setItems(rulerItems);
    }
  }, []);

  return (
    <div className="flex flex-row mr-40 mb-40">
      {items.map(({ element, id }) => (
        <div key={id} className="flex flex-row ">
          <div className="w-6 h-1 bg-green-500 rounded-lg" />
          <FaChevronRight className="text-green-500 -mt-1.5 -ml-2.5" />

          <div className="text-green-500 -mt-12">{element}</div>
        </div>
      ))}
    </div>
  );
}
