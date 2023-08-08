import CreateNewTemplateForm from "../molecules/CreateNewTemplateForm";

interface NewTemplateFormValues {
  templateName: string;
  type: 'Text' | 'E-Mail';
  description?: string
}

interface ICreateTemplateModal {
  handleChange: (values: NewTemplateFormValues) => void;
  onClose: () => void;
}

export default function CreateTemplateModal({
  handleChange,
  onClose,
}: ICreateTemplateModal) {
  return (
    <div className="flex items-center justify-center absolute h-screen w-screen bg-[#00000090]">
      <div className="bg-white rounded p-10">
        <div className="flex flex-row w-full justify-between mb-6">
          <p className="font-semibold">Create new template</p>
          <p className="font-extrabold cursor-pointer" onClick={onClose}>
            X
          </p>
        </div>

        <CreateNewTemplateForm handleChange={handleChange} />
      </div>
    </div>
  );
}
