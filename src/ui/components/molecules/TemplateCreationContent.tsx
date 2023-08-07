'use client'

import { useEffect, useState } from "react";
import Input from "../atoms/Input";
import SelectSearchOrCreate from "../atoms/SelectSearchOrCreate";
import Divider from "../atoms/Divider";
import Button from "../atoms/Button";

interface ITemplateCreationContent {
  dataset?: string
  templateName?: string
  templateDescription?: string
  subject?: string
}

export default function TemplateCreationContent(props: ITemplateCreationContent) {
  const [dataset, setDataset] = useState<string>(props.dataset ?? "");
  const [templateName, setTemplateName] = useState<string>(props.templateName ?? "");
  const [templateDescription, setTemplateDescription] = useState<string>(props.templateDescription ?? "");
  const [subject, setSubject] = useState<string>(props.subject ?? "");

  useEffect(() => {
    if (props.dataset) {
      setDataset(props.dataset)
    }

    if (props.subject) {
      setSubject(props.subject)
    }

    if (props.templateDescription) {
      setTemplateDescription(props.templateDescription)
    }

    if (props.templateName) {
      setTemplateName(props.templateName)
    }
  }, [props])

  function saveTemplate() {

  }

  return (
    <>
      <div className="w-1/2 mb-4">
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-1 flex-col gap-4">
            <div>
              <p>Template name:</p>
              <Input value={templateName} onChange={(e) => setTemplateName(e.target.value)} />
            </div>

            <div>
              <p>Subject</p>
              <SelectSearchOrCreate value={subject} onChange={(e) => setSubject(e.value)} options={[
                { value: "1", label: "Email.Subject" },
                { value: "2", label: "User.Email" },
                { value: "3", label: "Email.Body" },
              ]} />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <div>
              <p>Template description:</p>
              <Input value={templateDescription} onChange={(e) => setTemplateDescription(e.target.value)} />
            </div>

            <div>
              <p>Dataset:</p>
              <SelectSearchOrCreate value={dataset} onChange={(e) => setDataset(e)} options={[
                { value: "1", label: "Welcome" },
                { value: "2", label: "Newsletter" },
              ]} />
            </div>
          </div>

        </div>
        <div className="mt-2">
          <Button handlePress={saveTemplate} text="Create" />
        </div>
      </div>

      <Divider />
    </>
  )
}
