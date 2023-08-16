enum RESULTSTATUS {
  DELIVERED = 'Delivered',
  RECEIVED = 'Received',
  OPENED = 'Opened',
  NOT_DELIVERED = 'Not Delivered',
  NOT_OPENED = 'Not Opened',
}

export interface Job {
  id: string;
  status: string;
  timestamp: number;
  actionType: string;
  customerId: string;
  channel: string;
  resultStatus: RESULTSTATUS;
}

interface MapItem {
  name: string;
  businessLine: string;
  triggerType: string;
  jobs: Job[];
  succeeded: number;
  failed: number;
}

export const governance = {
  maps: [
    {
      name: 'string',
      businessLine: 'string',
      triggerType: 'string',
      jobs: [
        {
          id: new Date().getTime().toString(),
          status: 'executed',
          timestamp: new Date().getTime(),
          actionType: 'Send Email',
          customerId: new Date().getTime().toString(),
          channel: 'EMAIL',
          resultStatus: RESULTSTATUS.DELIVERED,
        },
        {
          id: new Date().getTime().toString(),
          status: 'executed',
          timestamp: new Date().getTime(),
          actionType: 'Send Email',
          customerId: new Date().getTime().toString(),
          channel: 'EMAIL',
          resultStatus: RESULTSTATUS.DELIVERED,
        },
        {
          id: new Date().getTime().toString(),
          status: 'failed',
          timestamp: new Date().getTime(),
          actionType: 'Send Sms',
          customerId: new Date().getTime().toString(),
          channel: 'SMS',
          resultStatus: RESULTSTATUS.NOT_DELIVERED,
        },
        {
          id: new Date().getTime().toString(),
          status: 'executed',
          timestamp: new Date().getTime(),
          actionType: 'Send Email',
          customerId: new Date().getTime().toString(),
          channel: 'EMAIL',
          resultStatus: RESULTSTATUS.OPENED,
        },
      ],
      succeeded: 0,
      failed: 0,
    },
  ],
};

/*
{
  maps: [
    {
      name: 'string',
      businessLine: 'string',
      triggerType: 'string',
      jobs: [
        {
          id: 'string',
          status: 'executed | failed',
          timestamp: 'Date',
          actionType: 'string',
          customerId: 'string',
          channel: 'SMS | EMAIL | WHATSAPP',
          resultStatus: RESULTSTATUS
        }
      ],
      succeeded: 0,
      failed: 0
    }
}
*/
