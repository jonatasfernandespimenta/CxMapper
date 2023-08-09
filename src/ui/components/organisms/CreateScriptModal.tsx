import CreateNewScriptForm from "../molecules/CreateNewScriptForm";

interface NewScriptFormValues {
  scriptName: string;
}

interface ICreateScriptModal {
  handleChange: (values: NewScriptFormValues) => void;
  onClose: () => void;
}

export default function CreateScriptModal({
  handleChange,
  onClose,
}: ICreateScriptModal) {
  return (
    <div className="flex items-center justify-center absolute h-screen w-screen bg-[#00000090]">
      <div className="bg-white rounded p-10">
        <div className="flex flex-row w-full justify-between mb-6">
          <p className="font-semibold">Create new Script</p>
          <p className="font-extrabold cursor-pointer" onClick={onClose}>
            X
          </p>
        </div>

        <CreateNewScriptForm handleChange={handleChange} />
      </div>
    </div>
  );
}
