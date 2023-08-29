'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AddMap from '../components/molecules/AddMap';
import MainLayout from '../layouts/MainLayout';
import TemplateBox from '../components/molecules/TemplateBox';
import CreateTemplateModal from '../components/organisms/CreateTemplateModal';

interface ITemplate {
  name: string
  description?: string
  id: string
  type: 'Text' | 'E-Mail'
}

interface NewTemplateFormValues {
  templateName: string;
  type: 'Text' | 'E-Mail';
  description?: string
}

export default function MyTemplates() {
  const [templates, setTemplates] = useState<ITemplate[]>([
    {
      name: 'Boas-Vindas Odonto PM',
      description: 'Kit de boas-vindas para novos clientes',
      id: new Date().toString(),
      type: 'E-Mail',
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const router = useRouter();

  function handleChange(values: NewTemplateFormValues) {
    setTemplates([
      ...templates,
      { ...values, id: new Date().getTime().toString(), name: values.templateName },
    ]);
  }

  return (
    <>
      {isModalOpen && (
        <CreateTemplateModal
          onClose={() => setIsModalOpen(false)}
          handleChange={handleChange}
        />
      )}
      <MainLayout>
        <div className="mb-6">
          <h1 className="font-semibold">My Templates</h1>
        </div>
        <div className="flex flex-row gap-4 flex-wrap">
          <AddMap onClick={() => setIsModalOpen(!isModalOpen)} />

          {templates.map((template, idx) => (
            <div key={idx} onClick={() => router.push(`/templates/${idx}`)}>
              <TemplateBox
                tag={template.type}
                name={template.name}
                description={template.description}
                key={template.id}
              />
            </div>
          ))}
        </div>
      </MainLayout>
    </>
  );
}
