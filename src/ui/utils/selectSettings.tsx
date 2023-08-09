import { ItemTypes } from "@/@types/IActionProps";
import ConditionSettings from "../components/molecules/ConditionSettings";
import { IItem } from "@/contexts/RulerContext";
import EmailSettings from "../components/molecules/EmailSettings";
import TextSettings from "../components/molecules/TextSettings";
import FileManagerSettings from "../components/molecules/FileManagerSettings";
import PdfSettings from "../components/molecules/PdfSettings";
import TriggerSettings from "../components/molecules/TriggerSettings";
import TimerSettings from "../components/molecules/TimerSettings";
import ScriptSettings from "../components/molecules/ScriptSettings";

interface ISelectSettings {
  type: ItemTypes;
  item: IItem<any>;
}

export function selectSettings({ type, item }: ISelectSettings) {
  const elements = {
    condition: <ConditionSettings item={item} />,
    email: <EmailSettings item={item} />,
    whatsapp: <TextSettings item={item} />,
    sms: <TextSettings item={item} />,
    file_manager: <FileManagerSettings item={item} />,
    pdf: <PdfSettings item={item} />,
    trigger: <TriggerSettings item={item} />,
    timer: <TimerSettings item={item} />,
    script: <ScriptSettings item={item} />
  };

  //@ts-ignore
  return elements[type]
}
