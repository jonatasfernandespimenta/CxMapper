interface IToggle {
  option1: string;
  option2: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Toggle({
  option1, option2, value, onChange,
}: IToggle) {
  return (
    <div className="flex flex-row items-center gap-2">
      <span className="text-xs font-medium text-gray-900 dark:text-gray-300">
        {option1}
      </span>

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-200" />
      </label>

      <span className="text-xs font-medium text-gray-900 dark:text-gray-300">
        {option2}
      </span>
    </div>
  );
}
