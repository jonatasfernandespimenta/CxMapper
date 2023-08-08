"use client";

import AddMap from "../components/molecules/AddMap";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import FolderBox from "../components/atoms/FolderBox";
import CreateBoxModal from "../components/organisms/CreateBoxModal";
import Input from "../components/atoms/Input";

interface NewBoxFormValues {
  boxName: string;
}

interface IBox {
  name: string
  id: string
}

export default function Boxes() {
  const [boxes, setBoxes] = useState<IBox[]>([
    {
      name: 'Email Files',
      id: new Date().toString()
    },
    {
      name: 'Garbage',
      id: new Date().toString()
    }
  ]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('')

  function handleChange(values: NewBoxFormValues) {
    setIsModalOpen(false);
    setBoxes([...boxes, { name: values.boxName, id: new Date().getTime().toString() }])
  }

  function handleSearchChange(value: string) {
    setSearch(value)
  }

  return (
    <>
      {isModalOpen && (
        <CreateBoxModal
          onClose={() => setIsModalOpen(false)}
          handleChange={handleChange}
        />
      )}
      <MainLayout>
        <div className="mb-6">
          <h1 className="font-semibold">My boxes</h1>
        </div>

        <div className="mb-6">
          <Input placeholder="Search..." value={search} onChange={(e) => handleSearchChange(e.target.value)} />
        </div>

        <div className="flex flex-row gap-4 flex-wrap">
          <AddMap onClick={() => setIsModalOpen(!isModalOpen)} />

          {boxes.filter(box => box.name.toLowerCase().includes(search)).map((box, idx) => (
            <div className="flex flex-wrap gap-2" key={idx}>
              <FolderBox name={box.name} key={box.id} />
            </div>
          ))}
        </div>
      </MainLayout>
    </>
  );
}

