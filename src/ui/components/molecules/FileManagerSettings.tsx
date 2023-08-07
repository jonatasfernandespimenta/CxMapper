"use client";

import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useEffect, useState } from "react";
import Select from "../atoms/Select";
import Input from "../atoms/Input";
import MySelect from "../atoms/MySelect";

interface IFileManagerSettings {
  item: IItem<"file_manager">;
}

export default function FileManagerSettings({ item }: IFileManagerSettings) {
  const { items, setItems } = useRulerData();

  const [action, setAction] = useState<string>("copy");
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [file, setFile] = useState<string>("");
  const [actionDescription, setActionDescription] = useState<string>("")

  function saveProps() {
    const updatedItem: IItem<"file_manager"> = {
      ...item,
      description: actionDescription,
      props: {
        to,
        action,
        from,
        file,
      },
    };

    const updatedItems = [...items];

    const itemIndex = updatedItems.findIndex((i) => i.id === item.id);
    updatedItems[itemIndex] = updatedItem;

    setItems(updatedItems);
  }

  useEffect(() => {
    saveProps();
  }, [to, action, from, actionDescription]);

  const optionList = [
    { value: "1", label: "copy" },
    { value: "2", label: "cut" },
    { value: "3", label: "delete" },
  ];

  return (
    <div className="flex flex-col gap-4 text-black">
      <div>
        <p>Action Description</p>
        <Input
          onChange={(e) => setActionDescription(e.target.value)}
          value={actionDescription}
        />
      </div>

      <div>
        <p>Action</p>
        <MySelect
          onChange={(e) => e && setAction(e.value)}
          options={optionList}
        />
      </div>

      <div>
        <p>From</p>
        <Select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option value="Nome">Images</option>
          <option value="Idade">Files</option>
        </Select>
      </div>

      <div>
        <p>File</p>
        <Select value={file} onChange={(e) => setFile(e.target.value)}>
          <option value="Nome">image.jpg</option>
          <option value="Idade">file.pdf</option>
        </Select>
      </div>

      {action !== "3" && (
        <div>
          <p>To</p>
          <Select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="Nome">Images</option>
            <option value="Idade">Files</option>
          </Select>
        </div>
      )}
    </div>
  );
}
