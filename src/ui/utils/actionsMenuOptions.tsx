import {
  FaMailBulk,
  FaFilePdf,
  FaSms,
  FaWhatsapp,
  FaScroll,
  FaQuestion,
  FaSave,
  FaFolder,
} from "react-icons/fa";

export interface IActionsMenuOption {
  icon: JSX.Element;
  text: string;
}

export const actionsMenuOptions: IActionsMenuOption[] = [
  {
    icon: <FaMailBulk />,
    text: "E-Mail",
  },
  {
    icon: <FaFilePdf />,
    text: "PDF",
  },
  {
    icon: <FaSms />,
    text: "SMS",
  },
  {
    icon: <FaWhatsapp />,
    text: "Whatsapp",
  },
  {
    icon: <FaScroll />,
    text: "Script",
  },
  {
    icon: <FaQuestion />,
    text: "Condition",
  },
  {
    icon: <FaSave />,
    text: "Save",
  },
  {
    icon: <FaFolder />,
    text: "File Manager",
  },
];
