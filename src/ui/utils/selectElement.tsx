import Action from "../components/atoms/Action";
import Condition from "../components/molecules/Condition";
import Email from "../components/molecules/Email";
import Sms from "../components/molecules/Sms";
import Whatsapp from "../components/molecules/Whatsapp";

interface ISelectElement {
  text: string
  itemId: string
  icon: JSX.Element
}

export function selectElement({ text, itemId, icon }: ISelectElement) {
  const elements = {
    'Condition': <Condition condition="" itemId={itemId} />,
    'E-Mail': <Email itemId={itemId} />,
    'SMS': <Sms itemId={itemId} />,
    'Whatsapp': <Whatsapp itemId={itemId} />,
    'default': <Action actionName={text} icon={icon} />
  }

  // @ts-ignore
  return elements[text] || elements['default'];
}
