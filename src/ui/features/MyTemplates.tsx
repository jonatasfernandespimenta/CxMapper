"use client";

import { useRouter } from "next/navigation";
import AddMap from "../components/molecules/AddMap";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import TemplateBox from "../components/molecules/TemplateBox";

interface ITemplate {
  name: string
  description?: string
  id: string
}

export default function MyTemplates() {
  const [templates, setTemplates] = useState<ITemplate[]>([
    {
      name: 'Template Boas Vindas',
      description: 'Template de email para dar boas vindas ao cliente',
      id: new Date().toString()
    }
  ]);

  const router = useRouter();

  return (
    <>
      <MainLayout>
        <div className="mb-6">
          <h1 className="font-semibold">My Templates</h1>
        </div>
        <div className="flex flex-row gap-4 flex-wrap">
          <AddMap onClick={() => router.push('/templates/create')} />

          {templates.map((template, idx) => (
            <div key={idx} onClick={() => router.push(`/templates/${idx}`)}>
              <TemplateBox name={template.name} description={template.description} key={template.id} />
            </div>
          ))}
        </div>
      </MainLayout>
    </>
  );
}
