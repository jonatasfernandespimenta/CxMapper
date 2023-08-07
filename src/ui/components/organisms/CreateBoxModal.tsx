import CreateNewBoxForm from "../molecules/CreateNewBoxForm";

interface NewBoxFormValues {
  boxName: string;
}

interface ICreateBoxModal {
  handleChange: (values: NewBoxFormValues) => void;
  onClose: () => void;
}

export default function CreateBoxModal({
  handleChange,
  onClose,
}: ICreateBoxModal) {
  return (
    <div className="flex items-center justify-center absolute h-screen w-screen bg-[#00000090]">
      <div className="bg-white rounded p-10">
        <div className="flex flex-row w-full justify-between mb-6">
          <p className="font-semibold">Create new Box</p>
          <p className="font-extrabold cursor-pointer" onClick={onClose}>
            X
          </p>
        </div>

        <CreateNewBoxForm handleChange={handleChange} />
      </div>
    </div>
  );
}
