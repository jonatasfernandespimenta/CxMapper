import Trigger from '@/ui/components/molecules/Trigger';
import Wait from '@/ui/components/molecules/Wait';
import AddAction from '@/ui/components/organisms/AddAction';
import { actionsMenuOptions } from '@/ui/utils/actionsMenuOptions';
import { selectElement } from '@/ui/utils/selectElement';

const email = actionsMenuOptions[0];
const fileManager = actionsMenuOptions[7];
const wait = actionsMenuOptions[9];

export const rules = [
  [
    {
      id: 'trigger',
      element: <Trigger itemId="trigger" />,
      props: null,
      type: 'trigger',
      done: 0,
      failed: 0,
    },
    {
      id: 'file',
      props: null,
      type: fileManager.type,
      element: selectElement({ icon: fileManager.icon, text: fileManager.text, itemId: 'dsad' }),
      done: 0,
      failed: 0,
    },
    {
      id: 'email1',
      props: null,
      type: email.type,
      element: selectElement({ icon: email.icon, text: email.text, itemId: 'asdhuasd' }),
      done: 0,
      failed: 0,
    },
    {
      id: 'wait',
      props: null,
      type: wait.type,
      element: <Wait
        itemId="jdasis"
        condition=""
        rulerItems={[
          {
            id: 'email2',
            props: null,
            type: email.type,
            element: selectElement({ icon: email.icon, text: email.text, itemId: 'asdhuasd' }),
            done: 0,
            failed: 0,
          },
        ]}
      />,
      done: 0,
      failed: 0,
    },
    {
      id: 'add',
      element: <AddAction />,
      props: null,
      type: 'add',
      done: 0,
      failed: 0,
    },
  ],
];
