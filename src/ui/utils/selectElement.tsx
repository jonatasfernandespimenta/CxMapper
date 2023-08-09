import ActionWrapper from "../components/organisms/ActionWrapper";
import Condition from "../components/molecules/Condition";

interface ISelectElement {
  text: string;
  itemId: string;
  icon: JSX.Element;
}

export function selectElement({ text, itemId, icon }: ISelectElement) {
  const elements = {
    Condition: <Condition itemId={itemId} condition="" />,
    "E-Mail": <ActionWrapper itemType="email" actionName={text} actionIcon={icon} itemId={itemId} />,
    SMS: <ActionWrapper itemType="sms" actionName={text} actionIcon={icon} itemId={itemId} />,
    Whatsapp: <ActionWrapper itemType="whatsapp" actionName={text} actionIcon={icon} itemId={itemId} />,
    "File Manager": <ActionWrapper itemType="file_manager" actionName={text} actionIcon={icon} itemId={itemId} />,
    PDF: <ActionWrapper itemType="pdf" actionName={text} actionIcon={icon} itemId={itemId} />,
    Trigger: <ActionWrapper itemType="trigger" actionName={text} actionIcon={icon} itemId={itemId} />,
    Timer: <ActionWrapper itemType="timer" actionName={text} actionIcon={icon} itemId={itemId} />,
  };

  // @ts-ignore
  return elements[text]
}
