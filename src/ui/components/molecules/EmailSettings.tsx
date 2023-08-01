"use client";

import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useEffect, useState } from "react";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import FileInput from "../atoms/FileInput";
import Select from "../atoms/Select";
import SelectSearchOrCreate from "../atoms/SelectSearchOrCreate";

interface IEmailSettings {
  item: IItem<"email">;
}

export default function EmailSettings({ item }: IEmailSettings) {
  const { items, setItems } = useRulerData();

  const [to, setTo] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [attachment, setAttachment] = useState<string>();
  const [template, setTemplate] = useState<string | undefined>("");
  const [dataset, setDataset] = useState<string | undefined>("");

  function saveProps() {
    const updatedItem: IItem<"email"> = {
      ...item,
      props: {
        to,
        subject,
        message,
        attachment,
        from: "company@company.com",
        templateId: template ?? "",
      },
    };

    const updatedItems = [...items];

    const itemIndex = updatedItems.findIndex((i) => i.id === item.id);
    updatedItems[itemIndex] = updatedItem;

    setItems(updatedItems);
  }

  useEffect(() => {
    saveProps();
  }, [to, subject, message, attachment, template, dataset]);

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
          <option value="Nome">Claudio</option>
          <option value="Idade">Jeff</option>
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
        <p>Subject</p>
        <Input value={subject} onChange={(e) => setSubject(e.target.value)} />
      </div>

      <div>
        <p>Message</p>
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div>
        <p>Atachment</p>

        <FileInput
          value={attachment}
          onChange={(e) => setAttachment(e.target.value)}
        />
      </div>

      <div>
        <p>Box</p>
        <Select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Nome">Email Files</option>
          <option value="Idade">Garbage</option>
        </Select>
      </div>
    </div>
  );
}
