import React, { useState } from 'react';
import { FaFileUpload } from 'react-icons/fa';

interface IFileInput {
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FileInput({ onChange, value }: IFileInput) {
  const [selectedFileName, setSelectedFileName] = useState<string>('Select a file');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target as HTMLInputElement;
    const file = fileInput.files && fileInput.files[0];

    if (file) {
      setSelectedFileName(file.name);
    } else {
      setSelectedFileName('Select a file');
    }

    onChange(e);
  };

  return (
    <label htmlFor="fileInput" className="flex flex-row items-center gap-1 text-green-500 w-full rounded-md p-1 bg-green-200 cursor-pointer">
      <FaFileUpload />
      <p>{selectedFileName}</p>
      <input
        id="fileInput"
        value={value}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        type="file"
      />
    </label>
  );
}
