'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AddMap from '../components/molecules/AddMap';
import Map from '../components/molecules/Map';
import MainLayout from '../layouts/MainLayout';
import CreateMapModal from '../components/organisms/CreateMapModal';
import Input from '../components/atoms/Input';
import { myMaps } from '@/mocks/myMaps';

interface NewMapFormValues {
  mapName: string
  businessLine: string
}

interface IMap {
  tag: string
  name: string
}

export default function Maps() {
  const [maps, setMaps] = useState<IMap[]>(myMaps);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  const router = useRouter();

  function handleChange(values: NewMapFormValues) {
    setMaps([
      ...maps,
      { name: values.mapName, tag: values.businessLine },
    ]);
    setIsModalOpen(false);
  }

  function handleSearchChange(value: string) {
    setSearch(value);
  }

  return (
    <>
      {isModalOpen && (
        <CreateMapModal onClose={() => setIsModalOpen(false)} handleChange={handleChange} />
      )}
      <MainLayout>
        <div className="mb-6">
          <h1 className="font-semibold">My Maps</h1>
        </div>

        <div className="mb-6">
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>

        <div className="flex flex-row gap-4 flex-wrap">
          <AddMap onClick={() => setIsModalOpen(true)} />

          {maps
            .filter((map) => map.name.toLowerCase().includes(search))
            .map((map, idx) => (
              <div key={idx} onClick={() => router.push(`/ruler/${idx}`)}>
                <Map tag={map.tag} name={map.name} />
              </div>
            ))}
        </div>
      </MainLayout>
    </>
  );
}
