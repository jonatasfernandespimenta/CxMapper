import Email from '@/ui/components/molecules/Email';
import Sms from '@/ui/components/molecules/Sms';
import Trigger from '@/ui/components/molecules/Trigger';
import Whatsapp from '@/ui/components/molecules/Whatsapp';

export const flow1 = [
  {
    id: '276e193e-b0ab-4cc0-8c70-c33fb1d4b892',
    props: null,
    type: 'trigger',
    element: <Trigger itemId="276e193e-b0ab-4cc0-8c70-c33fb1d4b892" />,
    failed: 4,
    done: 39999,
  },
  {
    id: '1c831333-49df-4b3c-9829-0b1210cc9f1f',
    props: {
      to: '',
      subject: 'AAA',
      message: '',
      attachment: 'C:\\fakepath\\Example.pdf',
      from: 'company@company.com',
      templateId: '1',
    },
    type: 'email',
    done: 29999,
    failed: 0,
    element: <Email itemId="1c831333-49df-4b3c-9829-0b1210cc9f1f" />,
  },
  {
    id: '3a103d36-37b1-4eff-ba05-d23794b450f1',
    props: {
      to: '',
      subject: '',
      message: '',
      from: 'company@company.com',
      templateId: '1',
    },
    done: 10000,
    failed: 0,
    type: 'email',
    element: <Email itemId="3a103d36-37b1-4eff-ba05-d23794b450f1" />,
  },
  {
    id: '44ccf810-068e-4f49-8b85-1dd937dc3cd3',
    done: 7200,
    failed: 0,
    props: {
      to: '',
      subject: '',
      message: '',
      from: 'company@company.com',
      templateId: '1',
    },
    type: 'email',
    element: <Email itemId="44ccf810-068e-4f49-8b85-1dd937dc3cd3" />,
  },
  {
    done: 3100,
    'failed:': 0,
    id: '7bbe87ac-9d7f-46a9-b28f-4a82e047dca0',
    props: {
      to: '',
      subject: '',
      message: '',
      from: 'company@company.com',
      templateId: '1',
    },
    type: 'email',
    element: <Email itemId="7bbe87ac-9d7f-46a9-b28f-4a82e047dca0" />,
  },
  {
    id: '55364797-6309-4167-975e-413881bfff2e',
    props: null,
    done: 2900,
    failed: 0,
    type: 'sms',
    element: <Sms itemId="55364797-6309-4167-975e-413881bfff2e" />,
  },
  {
    id: '94aaa2e4-dc5d-4b16-922e-ee6e0ee1a813',
    props: null,
    done: 2900,
    failed: 0,
    type: 'whatsapp',
    element: <Whatsapp itemId="94aaa2e4-dc5d-4b16-922e-ee6e0ee1a813" />,
  },
  {
    id: 'a6dba217-c748-4c16-848c-a7b03aa69ecd',
    props: null,
    done: 900,
    failed: 0,
    type: 'sms',
    element: <Sms itemId="a6dba217-c748-4c16-848c-a7b03aa69ecd" />,
  },
  {
    id: 'bc0d9c6d-a806-46e6-844a-51093f86f6fd',
    props: null,
    type: 'whatsapp',
    done: 900,
    failed: 0,
    element: <Whatsapp itemId="bc0d9c6d-a806-46e6-844a-51093f86f6fd" />,
  },
  {
    id: 'a26dccc8-d23c-414f-9125-6f9c290fa946',
    done: 900,
    failed: 0,
    props: {
      to: '',
      subject: '',
      message: '',
      from: 'company@company.com',
      templateId: '1',
    },
    type: 'email',
    element: <Email itemId="a26dccc8-d23c-414f-9125-6f9c290fa946" />,
  },
];

export const flow2 = [
  {
    id: '276e193e-b0ab-4cc0-8c70-c33fb1d4b892',
    props: null,
    type: 'trigger',
    element: <Trigger itemId="276e193e-b0ab-4cc0-8c70-c33fb1d4b892" />,
    failed: 0,
    done: 20200,
  },
  {
    id: '1c831333-49df-4b3c-9829-0b1210cc9f1f',
    props: {
      to: '',
      subject: 'AAA',
      message: '',
      attachment: 'C:\\fakepath\\Example.pdf',
      from: 'company@company.com',
      templateId: '1',
    },
    type: 'email',
    done: 20200,
    failed: 0,
    element: <Email itemId="1c831333-49df-4b3c-9829-0b1210cc9f1f" />,
  },
  {
    id: '94aaa2e4-dc5d-4b16-922e-ee6e0ee1a813',
    props: null,
    done: 20200,
    failed: 0,
    type: 'whatsapp',
    element: <Whatsapp itemId="94aaa2e4-dc5d-4b16-922e-ee6e0ee1a813" />,
  },
  {
    id: 'a6dba217-c748-4c16-848c-a7b03aa69ecd',
    props: null,
    done: 20200,
    failed: 0,
    type: 'sms',
    element: <Sms itemId="a6dba217-c748-4c16-848c-a7b03aa69ecd" />,
  },
];

export const flows = [flow1, flow2];
