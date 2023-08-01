"use client";

import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useState } from "react";
import SelectSearchOrCreate from "../atoms/SelectSearchOrCreate";
import Input from "../atoms/Input";

interface IPdfSettings {
  item: IItem<"pdf">;
}

export default function PdfSettings({ item }: IPdfSettings) {
  const { items, setItems } = useRulerData();

  const [inputPath, setInputPath] = useState<string>("");
  const [outputPath, setOutputPath] = useState<string>("");
  const [dataset, setDataset] = useState<string>("");
  const [template, setTemplate] = useState<string>("");

  function saveProps() {
    const updatedItem: IItem<"pdf"> = {
      ...item,
      props: {
        template,
        dataset,
        inputPath,
        outputPath,
      },
    };

    const updatedItems = [...items];

    const itemIndex = updatedItems.findIndex((i) => i.id === item.id);
    updatedItems[itemIndex] = updatedItem;

    setItems(updatedItems);
  }

  const optionList = [
    { value: "1", label: "Welcome" },
    { value: "2", label: "Newsletter" },
  ];

  return (
    <div className="flex flex-col gap-4 text-black">
      <div>
        <p>Dataset</p>
        <SelectSearchOrCreate
          onChange={(e) => setDataset(e?.value)}
          options={optionList}
        />
      </div>

      <div>
        <p>Input Path</p>
        <Input
          value={inputPath}
          onChange={(e) => setInputPath(e.target.value)}
        />
      </div>

      <div>
        <p>Template</p>
        <SelectSearchOrCreate
          onChange={(e) => setTemplate(e?.value)}
          options={optionList}
        />
      </div>

      <div>
        <p>Output Path</p>
        <Input
          value={outputPath}
          onChange={(e) => setOutputPath(e.target.value)}
        />
      </div>
    </div>
  );
}
