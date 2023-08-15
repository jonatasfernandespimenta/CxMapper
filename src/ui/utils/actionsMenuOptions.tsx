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
  FaClock,
} from 'react-icons/fa';
import { ItemTypes } from '@/@types/IActionProps';

export interface IActionsMenuOption {
  icon: JSX.Element;
  text: string;
  type: ItemTypes;
}

export const actionsMenuOptions: IActionsMenuOption[] = [
  {
    icon: <FaMailBulk />,
    text: 'E-Mail',
    type: 'email',
  },
  {
    icon: <FaFilePdf />,
    text: 'PDF',
    type: 'email',
  },
  {
    icon: <FaSms />,
    text: 'SMS',
    type: 'sms',
  },
  {
    icon: <FaWhatsapp />,
    text: 'Whatsapp',
    type: 'whatsapp',
  },
  {
    icon: <FaScroll />,
    text: 'Script',
    type: 'script',
  },
  {
    icon: <FaQuestion />,
    text: 'Condition',
    type: 'condition',
  },
  {
    icon: <FaSave />,
    text: 'Save',
    type: 'condition',
  },
  {
    icon: <FaFolder />,
    text: 'File Manager',
    type: 'condition',
  },
  {
    icon: <FaPlay />,
    text: 'Trigger',
    type: 'trigger',
  },
  {
    icon: <FaClock />,
    text: 'Timer',
    type: 'timer',
  },
];
