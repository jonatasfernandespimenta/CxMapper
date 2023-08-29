'use client';

import { useState } from 'react';
import Link from 'next/link';
import AddMap from '../components/molecules/AddMap';
import MainLayout from '../layouts/MainLayout';
import Input from '../components/atoms/Input';
import CreateDatasetModal from '../components/organisms/CreateDatasetModal';
import DatasetBox from '../components/atoms/DatasetBox';

interface NewDatasetFormValues {
  datasetName: string
}

interface IDataset {
  name: string
  id: string
}

export default function Datasets() {
  const [datasets, setDatasets] = useState<IDataset[]>([
    {
      name: 'Boas-Vindas Odonto PME',
      id: new Date().toString(),
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  function handleChange(values: NewDatasetFormValues) {
    setIsModalOpen(false);
    setDatasets([...datasets, { name: values.datasetName, id: new Date().getTime().toString() }]);
  }

  function handleSearchChange(value: string) {
    setSearch(value);
  }

  return (
    <>
      {isModalOpen && (
        <CreateDatasetModal onClose={() => setIsModalOpen(false)} handleChange={handleChange} />
      )}
      <MainLayout>
        <div className="mb-6">
          <h1 className="font-semibold">My Datasets</h1>
        </div>

        <div className="mb-6">
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>

        <div className="flex flex-row gap-4 flex-wrap">
          <AddMap onClick={() => setIsModalOpen(!isModalOpen)} />

          {datasets
            .filter((box) => box.name.toLowerCase().includes(search))
            .map((box, idx) => (
              <Link href="/datasets/0" className="flex flex-wrap gap-2">
                <div className="flex flex-wrap gap-2" key={idx}>
                  <DatasetBox name={box.name} key={box.id} />
                </div>
              </Link>
            ))}
        </div>
      </MainLayout>
    </>
  );
}
