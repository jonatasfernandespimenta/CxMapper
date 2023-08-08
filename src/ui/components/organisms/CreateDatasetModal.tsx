import CreateNewDatasetForm from "../molecules/CreateNewDatasetForm copy";

interface NewDatasetFormValues {
  datasetName: string;
}

interface ICreateDatasetModal {
  handleChange: (values: NewDatasetFormValues) => void;
  onClose: () => void;
}

export default function CreateDatasetModal({
  handleChange,
  onClose,
}: ICreateDatasetModal) {
  return (
    <div className="flex items-center justify-center absolute h-screen w-screen bg-[#00000090]">
      <div className="bg-white rounded p-10">
        <div className="flex flex-row w-full justify-between mb-6">
          <p className="font-semibold">Create new Dataset</p>
          <p className="font-extrabold cursor-pointer" onClick={onClose}>
            X
          </p>
        </div>

        <CreateNewDatasetForm handleChange={handleChange} />
      </div>
    </div>
  );
}
