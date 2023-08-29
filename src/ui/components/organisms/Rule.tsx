import RulerContextProvider, { IItem } from '@/contexts/RulerContext';
import Ruler from './Ruler';
import { rules } from '@/mocks/rules';
import { ItemTypes } from '@/@types/IActionProps';

interface IRuler {
  rulerItems?: IItem<ItemTypes>[]
}

export default function Rule({ rulerItems }: IRuler) {
  return (
    <RulerContextProvider>
      <Ruler rulerItems={rulerItems} />
    </RulerContextProvider>
  );
}
