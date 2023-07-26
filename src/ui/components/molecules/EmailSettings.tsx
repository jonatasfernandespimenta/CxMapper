"use client";

import { IItem, useRulerData } from "@/contexts/RulerContext";
import { useState } from "react";
import Condition from "./Condition";
import Select from "../atoms/Select";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import FileInput from "../atoms/FileInput";

interface IEmailSettings {
  item: IItem<"email">;
}

export default function EmailSettings({ item }: IEmailSettings) {
  const { items, setItems } = useRulerData();

  const [to, setTo] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [attachment, setAttachment] = useState<File>();

  function saveProps() {
    const updatedItem: IItem<"email"> = {
      ...item,
      props: {
        to,
        subject,
        message,
        attachment,
        from: 'company@company.com'
      },
    };

    const updatedItems = [...items];

    const itemIndex = updatedItems.findIndex((i) => i.id === item.id);
    updatedItems[itemIndex] = updatedItem;

    setItems(updatedItems);
  }

  return (
    <div className="flex flex-col gap-4 text-black">

      <div>
        <p>Send To</p>
        <Input value={to} onChange={(e) => setTo(e.target.value)} />
      </div>

      <div>
        <p>Subject</p>
        <Input value={subject} onChange={(e) => setSubject(e.target.value)} />
      </div>

      <div>
        <p>Message</p>
        <TextArea value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>

      <div>
        <p>Atachment</p>
        <FileInput value={subject} onChange={(e) => setSubject(e.target.value)} />
      </div>
    </div>
  );
}
