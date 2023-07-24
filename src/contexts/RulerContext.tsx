"use client";

import AddAction from "@/ui/components/organisms/AddAction";
import { uuid } from "uuidv4";
import React, { useState } from "react";

interface IItem {
  id: string;
  element: JSX.Element;
}

interface IRulerContextType {
  items: IItem[];
  setItems: (items: IItem[]) => void;
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
  const [items, setItems] = useState<IItem[]>([
    { id: uuid(), element: <AddAction /> },
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
