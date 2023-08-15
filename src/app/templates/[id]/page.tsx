'use client';

import { useEffect, useState } from 'react';
import { templatesMock } from '@/mocks/templates';
import CreateTemplateScreen from '@/ui/features/CreateTemplate';

interface ICreateTemplateScreen {
  code?: string
  dataset?: string
  templateName?: string
  templateDescription?: string
  subject?: string
  type: 'E-Mail' | 'Text'
}

export default function EditTemplate({ params }: { params: { id: string } }) {
  const [templateInfo, setTemplateInfo] = useState<ICreateTemplateScreen>();

  useEffect(() => {
    const foundTemplate = templatesMock[Number(params.id)];

    setTemplateInfo(foundTemplate);
  }, [params.id]);

  return (
    <CreateTemplateScreen type={templateInfo?.type} templateInfo={templateInfo} />
  );
}
