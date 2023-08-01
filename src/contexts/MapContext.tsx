"use client";

import React, { useState } from "react";

interface IMapContextType {
  activeItem: string;
  setActiveItem: (activeItem: string) => void;
  jobFilter: string;
  setJobFilter: (jobFilter: string) => void;
}

interface IMapContextProvider {
  children: JSX.Element | JSX.Element[];
}

export const MapContext = React.createContext<IMapContextType>(
  {} as IMapContextType
);

export default function MapContextProvider({ children }: IMapContextProvider) {
  const [activeItem, setActiveItem] = useState("");
  const [jobFilter, setJobFilter] = useState("");

  return (
    <MapContext.Provider
      value={{
        activeItem,
        setActiveItem,
        jobFilter,
        setJobFilter,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

export function useMapData() {
  const context = React.useContext(MapContext);

  if (context === undefined) {
    throw new Error("useMapData must be used within a MapContextProvider");
  }

  return context;
}
