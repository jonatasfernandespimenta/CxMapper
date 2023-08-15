import RulerContextProvider from '@/contexts/RulerContext';
import Ruler from './Ruler';

export default function Rule() {
  return (
    <RulerContextProvider>
      <Ruler />
    </RulerContextProvider>
  );
}
