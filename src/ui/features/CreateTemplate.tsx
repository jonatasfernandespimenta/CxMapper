import TemplateCreationInfo from "../components/organisms/TemplateCreationInfo";
import HtmlEditor from "../components/organisms/HtmlEditor";
import MainLayout from "../layouts/MainLayout";

interface ITemplateInfo {
  code?: string
  dataset?: string
  templateName?: string
  templateDescription?: string
  subject?: string
}

interface ICreateTemplateScreen {
  templateInfo?: ITemplateInfo
  type?: 'E-Mail' | 'Text'
}

export default function CreateTemplateScreen({ templateInfo, type }: ICreateTemplateScreen) {
  return (
    <MainLayout>
      <TemplateCreationInfo
        dataset={templateInfo?.dataset}
        templateName={templateInfo?.templateName}
        templateDescription={templateInfo?.templateDescription}
        subject={templateInfo?.subject}
      />

      {
        type === 'E-Mail' ? (<HtmlEditor code={templateInfo?.code} />) : <textarea className="w-1/4 h-96" value={templateInfo?.code} />
      }
    </MainLayout>
  )
}
