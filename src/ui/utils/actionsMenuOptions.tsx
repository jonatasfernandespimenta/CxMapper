import { ItemTypes } from "@/@types/IActionProps";
import {
  FaMailBulk,
  FaFilePdf,
  FaSms,
  FaWhatsapp,
  FaScroll,
  FaQuestion,
  FaSave,
  FaFolder,
  FaPlay,
} from "react-icons/fa";

export interface IActionsMenuOption {
  icon: JSX.Element;
  text: string;
  type: ItemTypes;
}

export const actionsMenuOptions: IActionsMenuOption[] = [
  {
    icon: <FaMailBulk />,
    text: "E-Mail",
    type: "email",
  },
  {
    icon: <FaFilePdf />,
    text: "PDF",
    type: "email",
  },
  {
    icon: <FaSms />,
    text: "SMS",
    type: "sms",
  },
  {
    icon: <FaWhatsapp />,
    text: "Whatsapp",
    type: "whatsapp",
  },
  {
    icon: <FaScroll />,
    text: "Script",
    type: "whatsapp",
  },
  {
    icon: <FaQuestion />,
    text: "Condition",
    type: "condition",
  },
  {
    icon: <FaSave />,
    text: "Save",
    type: "condition",
  },
  {
    icon: <FaFolder />,
    text: "File Manager",
    type: "condition",
  },
  {
    icon: <FaPlay />,
    text: "Trigger",
    type: "trigger",
  },
];
