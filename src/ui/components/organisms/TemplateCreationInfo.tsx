import TemplateCreationContent from '../molecules/TemplateCreationContent';

interface ITemplateCreationInfo {
  dataset?: string
  templateName?: string
  templateDescription?: string
  subject?: string
}

export default function TemplateCreationInfo({
  templateName, templateDescription, subject, dataset,
}: ITemplateCreationInfo) {
  return (
    <div>
      <div className="font-bold mb-4">
        <p>Information</p>
      </div>

      <TemplateCreationContent
        dataset={dataset}
        templateName={templateName}
        templateDescription={templateDescription}
        subject={subject}
      />
    </div>
  );
}
