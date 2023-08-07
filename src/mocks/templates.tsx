import { emailTemplates } from "./emailsTemplates"

interface ITemplate {
  id: string
  code: string
  dataset: string
  templateName: string
  templateDescription: string
  subject: string
}

export const templatesMock: ITemplate[] = [
  {
    id: "1",
    code: emailTemplates[0],
    dataset: "1",
    subject: "1",
    templateDescription: "Template de email para dar boas vindas ao cliente",
    templateName: "Template Boas Vindas"
  }
]
