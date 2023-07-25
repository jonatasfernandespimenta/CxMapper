"use client";

import AddAction from "@/ui/components/organisms/AddAction";
import React, { useState } from "react";
import { IActionProps, ItemTypes } from "@/@types/IActionProps";

export interface IItem<T extends ItemTypes> extends IActionProps<T> {
  id: string;
  element: JSX.Element;
  type: ItemTypes;
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
  {} as IRulerContextType
);

export default function RulerContextProvider({
  children,
}: IRulerContextProvider) {
  const [items, setItems] = useState<IItem<ItemTypes>[]>([
    { id: "add", element: <AddAction />, props: null, type: "add" },
  ]);
  const [isAddActionMenuOpen, setIsAddActionMenuOpen] =
    useState<boolean>(false);

  return (
    <RulerContext.Provider
      value={{
        items,
        setItems,
        isAddActionMenuOpen,
        setIsAddActionMenuOpen,
      }}
    >
      {children}
    </RulerContext.Provider>
  );
}

export function useRulerData() {
  const context = React.useContext(RulerContext);

  if (context === undefined) {
    throw new Error("useRulerData must be used within a RulerContextProvider");
  }

  return context;
}
