export interface ConditionProps {
  variable: string;
  condition: ">=" | "<=" | ">" | "<" | "==";
  value: string;
}

export interface WhatsappProps {
  number: string;
  message: string;
}

export interface SmsProps {
  number: string;
  message: string;
}

export interface EmailProps {
  from: string;
  to: string;
  message: string;
}

export type ItemTypes = "condition" | "email" | "whatsapp" | "sms" | "add";

type ItemWithType<T extends ItemTypes> = T extends "condition"
  ? ConditionProps
  : T extends "email"
  ? EmailProps
  : T extends "whatsapp"
  ? WhatsappProps
  : T extends "sms"
  ? SmsProps
  : never;

export interface IActionProps<T extends ItemTypes> {
  props: ItemWithType<T> | null;
}
