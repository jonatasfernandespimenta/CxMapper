'use client'

import { useState } from "react";
import Input from "../atoms/Input";
import SelectSearchOrCreate from "../atoms/SelectSearchOrCreate";
import Divider from "../atoms/Divider";
import Button from "../atoms/Button";

export default function TemplateCreationContent() {
  const [dataset, setDataset] = useState<string>("");
  const [templateName, setTemplateName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");

  function saveTemplate() {

  }

  return (
    <>
      <div className="w-1/4 mb-4">
        <div className="flex flex-col gap-2">
          <div>
            <p>Template name:</p>
            <Input value={templateName} onChange={(e) => setTemplateName(e.target.value)} />
          </div>

          <div>
            <p>Dataset:</p>
            <SelectSearchOrCreate value={dataset} onChange={(e) => setDataset(e)} options={[
              { value: "1", label: "Welcome" },
              { value: "2", label: "Newsletter" },
            ]} />
          </div>

          <div>
            <p>Subject</p>
            <SelectSearchOrCreate onChange={(e) => setSubject(e.value)} options={[
              { value: "1", label: "Email.Subject" },
              { value: "2", label: "User.Email" },
              { value: "3", label: "Email.Body" },
            ]} />
          </div>

          <div className="mt-2">
            <Button handlePress={saveTemplate} text="Create" />
          </div>
        </div>
      </div>

      <Divider />
    </>
  )
}
