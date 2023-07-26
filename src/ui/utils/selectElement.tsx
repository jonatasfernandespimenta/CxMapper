import Action from "../components/atoms/Action";
import Condition from "../components/molecules/Condition";
import Email from "../components/molecules/Email";

interface ISelectElement {
  text: string
  itemId: string
  icon: JSX.Element
}

export function selectElement({ text, itemId, icon }: ISelectElement) {
  const elements = {
    'Condition': <Condition condition="" itemId={itemId} />,
    'E-Mail': <Email itemId={itemId} />,
    'default': <Action actionName={text} icon={icon} />
  }

  // @ts-ignore
  return elements[text] || elements['default'];
}
