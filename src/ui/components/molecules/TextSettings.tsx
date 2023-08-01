"use client";

import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useState } from "react";
import TextArea from "../atoms/TextArea";
import Select from "../atoms/Select";
import SelectSearchOrCreate from "../atoms/SelectSearchOrCreate";
import { useRouter } from "next/router";

interface IEmailSettings {
  item: IItem<"whatsapp">;
}

export default function TextSettings({ item }: IEmailSettings) {
  const { items, setItems } = useRulerData();

  const [to, setTo] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [template, setTemplate] = useState<string | undefined>("");
  const [dataset, setDataset] = useState<string | undefined>("");

  function saveProps() {
    const updatedItem: IItem<"whatsapp"> = {
      ...item,
      props: {
        number: to,
        message,
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
        <p>To</p>
        <Select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Idade">User.Phone</option>
          <option value="Nome">User.Email</option>
          <option value="Idade">User.Name</option>
        </Select>
      </div>

      <div>
        <p>Template</p>
        <SelectSearchOrCreate
          onChange={(e) => setTemplate(e?.value)}
          options={optionList}
        />
      </div>

      <div>
        <p>Message</p>
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </div>
  );
}
