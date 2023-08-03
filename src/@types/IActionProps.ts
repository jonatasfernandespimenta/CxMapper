export interface ConditionProps {
  type?: string | null;
  variable: string;
  condition: ">=" | "<=" | ">" | "<" | "==" | string;
  value: string;
}

export interface WhatsappProps {
  number: string;
  message: string;
}

export interface PdfProps {
  template: string;
  dataset: string;
  inputPath: string;
  outputPath: string;
  outputName: string;
}

export interface SmsProps {
  number: string;
  message: string;
}

export interface EmailProps {
  from: string;
  to: string;
  subject: string;
  message: string;
  attachment?: any;
  templateId?: string;
  providerId: string
}

export interface FileManagerProps {
  action: string;
  from: string;
  file: string;
  to?: string;
}

export interface TriggerProps {
  type: string;
}

export interface TimerProps {
  expression: string
}

export type ItemTypes =
  | "condition"
  | "email"
  | "whatsapp"
  | "sms"
  | "add"
  | "file_manager"
  | "pdf"
  | "trigger"
  | "timer"

type ItemWithType<T extends ItemTypes> = T extends "condition"
  ? ConditionProps[]
  : T extends "email"
  ? EmailProps
  : T extends "whatsapp"
  ? WhatsappProps
  : T extends "sms"
  ? SmsProps
  : T extends "file_manager"
  ? FileManagerProps
  : T extends "pdf"
  ? PdfProps
  : T extends "trigger"
  ? TriggerProps
  : T extends "timer"
  ? TimerProps
  : never;

export interface IActionProps<T extends ItemTypes> {
  props: ItemWithType<T> | null;
  done: number;
  failed: number;
}
