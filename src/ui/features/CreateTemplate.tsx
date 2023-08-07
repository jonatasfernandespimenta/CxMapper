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
}

export default function CreateTemplateScreen({ templateInfo }: ICreateTemplateScreen) {
  return (
    <MainLayout>
      <TemplateCreationInfo
        dataset={templateInfo?.dataset}
        templateName={templateInfo?.templateName}
        templateDescription={templateInfo?.templateDescription}
        subject={templateInfo?.subject}
      />

      <HtmlEditor code={templateInfo?.code} />
    </MainLayout>
  )
}
