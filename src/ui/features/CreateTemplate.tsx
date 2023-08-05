import TemplateCreationInfo from "../components/organisms/TemplateCreationInfo";
import HtmlEditor from "../components/organisms/HtmlEditor";
import MainLayout from "../layouts/MainLayout";

export default function CreateTemplateScreen() {

  return (
    <MainLayout>
      <TemplateCreationInfo />
      <HtmlEditor />
    </MainLayout>
  )
}
