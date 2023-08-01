import CreateNewMapForm from "../molecules/CreateNewMapForm";

interface NewMapFormValues {
  mapName: string;
  businessLine: string;
}

interface ICreateMapModal {
  handleChange: (values: NewMapFormValues) => void;
  onClose: () => void;
}

export default function CreateMapModal({
  handleChange,
  onClose,
}: ICreateMapModal) {
  return (
    <div className="flex items-center justify-center absolute h-screen w-screen bg-[#00000090]">
      <div className="bg-white rounded p-10">
        <div className="flex flex-row w-full justify-between mb-6">
          <p className="font-semibold">Create new map</p>
          <p className="font-extrabold cursor-pointer" onClick={onClose}>
            X
          </p>
        </div>

        <CreateNewMapForm handleChange={handleChange} />
      </div>
    </div>
  );
}
