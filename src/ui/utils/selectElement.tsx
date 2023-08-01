import Action from "../components/molecules/Action";
import Condition from "../components/molecules/Condition";
import Email from "../components/molecules/Email";
import FileManager from "../components/molecules/FileManager";
import Pdf from "../components/molecules/Pdf";
import Sms from "../components/molecules/Sms";
import Trigger from "../components/molecules/Trigger";
import Whatsapp from "../components/molecules/Whatsapp";

interface ISelectElement {
  text: string;
  itemId: string;
  icon: JSX.Element;
}

export function selectElement({ text, itemId, icon }: ISelectElement) {
  const elements = {
    Condition: <Condition condition="" itemId={itemId} />,
    "E-Mail": <Email itemId={itemId} />,
    SMS: <Sms itemId={itemId} />,
    Whatsapp: <Whatsapp itemId={itemId} />,
    "File Manager": <FileManager itemId={itemId} />,
    PDF: <Pdf itemId={itemId} />,
    Trigger: <Trigger itemId={itemId} />,
    default: <Action actionName={text} icon={icon} />,
  };

  // @ts-ignore
  return elements[text] || elements["default"];
}
