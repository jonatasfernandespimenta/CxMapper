'use client';

import React, { useMemo, useState } from 'react';

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
  {} as IMapContextType,
);

export default function MapContextProvider({ children }: IMapContextProvider) {
  const [activeItem, setActiveItem] = useState('');
  const [jobFilter, setJobFilter] = useState('');

  const value = useMemo(() => ({
    activeItem, setActiveItem, jobFilter, setJobFilter,
  }), [activeItem, setActiveItem, jobFilter, setJobFilter]);

  return (
    <MapContext.Provider
      value={value}
    >
      {children}
    </MapContext.Provider>
  );
}

export function useMapData() {
  const context = React.useContext(MapContext);

  if (context === undefined) {
    throw new Error('useMapData must be used within a MapContextProvider');
  }

  return context;
}
