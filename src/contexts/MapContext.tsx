'use client';

import React, { useMemo, useState } from 'react';

interface IMapInfo {
  mapName: string
  businessLine: string
  createdAt: string
  createdBy: string
  approvedAt: string
  approvedBy: string
}

interface IMapContextType {
  activeItem: string;
  setActiveItem: (activeItem: string) => void;
  jobFilter: string;
  setJobFilter: (jobFilter: string) => void;
  mapInfo: IMapInfo,
  setMapInfo: (mapInfo: IMapInfo) => void
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
  const [mapInfo, setMapInfo] = useState<IMapInfo>({
    businessLine: '', mapName: '', approvedAt: '', createdBy: '', createdAt: '', approvedBy: '',
  });

  const value = useMemo(() => ({
    activeItem, setActiveItem, jobFilter, setJobFilter, mapInfo, setMapInfo,
  }), [activeItem, setActiveItem, jobFilter, setJobFilter, mapInfo, setMapInfo]);

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
