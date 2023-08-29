'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AddMap from '../components/molecules/AddMap';
import MainLayout from '../layouts/MainLayout';
import Input from '../components/atoms/Input';
import CreateScriptModal from '../components/organisms/CreateScriptModal';
import ScriptBox from '../components/atoms/ScriptBox';

interface NewScriptFormValues {
  scriptName: string;
}

interface IScript {
  name: string
  id: string
}

export default function Scripts() {
  const [scripts, setScripts] = useState<IScript[]>([{ name: 'Organize data', id: new Date().getTime().toString() }]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  function handleChange(values: NewScriptFormValues) {
    setIsModalOpen(false);
    setScripts([...scripts, { name: values.scriptName, id: new Date().getTime().toString() }]);
  }

  const router = useRouter();

  function handleSearchChange(value: string) {
    setSearch(value);
  }

  return (
    <>
      {isModalOpen && (
        <CreateScriptModal
          onClose={() => setIsModalOpen(false)}
          handleChange={handleChange}
        />
      )}
      <MainLayout>
        <div className="mb-6">
          <h1 className="font-semibold">My scripts</h1>
        </div>

        <div className="mb-6">
          <Input placeholder="Search..." value={search} onChange={(e) => handleSearchChange(e.target.value)} />
        </div>

        <div className="flex flex-row gap-4 flex-wrap">
          <AddMap onClick={() => setIsModalOpen(!isModalOpen)} />

          {scripts.filter((script) => script.name
            .toLowerCase()
            .includes(search))
            .map((script, idx) => (
              <div className="flex flex-wrap gap-2" onClick={() => router.push(`/scripts/${idx}`)} key={idx}>
                <ScriptBox name={script.name} key={script.id} />
              </div>
            ))}
        </div>
      </MainLayout>
    </>
  );
}
