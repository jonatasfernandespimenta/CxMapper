'use client'

import { templatesMock } from "@/mocks/templates";
import CreateTemplateScreen from "@/ui/features/CreateTemplate";
import { useEffect, useState } from "react";

interface ICreateTemplateScreen {
  code?: string
  dataset?: string
  templateName?: string
  templateDescription?: string
  subject?: string
}

export default function EditTemplate({ params }: { params: { id: string } }) {
  const [templateInfo, setTemplateInfo] = useState<ICreateTemplateScreen>();

  useEffect(() => {
    const foundTemplate = templatesMock[Number(params.id)];

    setTemplateInfo(foundTemplate)
  }, [params.id])

  return (
    <CreateTemplateScreen templateInfo={templateInfo} />
  )
}
