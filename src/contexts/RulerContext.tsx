'use client';

import React, { useMemo, useState } from 'react';
import AddAction from '@/ui/components/organisms/AddAction';
import { IActionProps, ItemTypes } from '@/@types/IActionProps';
import Trigger from '@/ui/components/molecules/Trigger';

export interface IItem<T extends ItemTypes> extends IActionProps<T> {
  id: string;
  element: JSX.Element;
  type: ItemTypes;
  description?: string
}

interface IRulerContextType {
  items: IItem<ItemTypes>[];
  setItems: (items: IItem<ItemTypes>[]) => void;
  isAddActionMenuOpen: boolean;
  setIsAddActionMenuOpen: (isAddActionMenuOpen: boolean) => void;
}

interface IRulerContextProvider {
  children: JSX.Element | JSX.Element[];
}

export const RulerContext = React.createContext<IRulerContextType>(
  {} as IRulerContextType,
);

export default function RulerContextProvider({
  children,
}: IRulerContextProvider) {
  const [items, setItems] = useState<IItem<ItemTypes>[]>([
    {
      id: 'trigger',
      element: <Trigger itemId="trigger" />,
      props: null,
      type: 'trigger',
      done: 0,
      failed: 0,
    },
    {
      id: 'add',
      element: <AddAction />,
      props: null,
      type: 'add',
      done: 0,
      failed: 0,
    },
  ]);
  const [isAddActionMenuOpen, setIsAddActionMenuOpen] = useState<boolean>(false);

  const values = useMemo(() => ({
    items, setItems, isAddActionMenuOpen, setIsAddActionMenuOpen,
  }), [items, setItems, isAddActionMenuOpen, setIsAddActionMenuOpen]);

  return (
    <RulerContext.Provider
      value={values}
    >
      {children}
    </RulerContext.Provider>
  );
}

export function useRulerData() {
  const context = React.useContext(RulerContext);

  if (context === undefined) {
    throw new Error('useRulerData must be used within a RulerContextProvider');
  }

  return context;
}
