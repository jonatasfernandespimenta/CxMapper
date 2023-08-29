import { faker } from '@faker-js/faker';

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
  timestamp: string;
  actionType: string;
  customerId: string;
  channel: string;
  resultStatus: RESULTSTATUS;
  opened: string
}

export const governance = {
  maps: [
    {
      name: 'string',
      businessLine: 'string',
      triggerType: 'string',
      jobs: [
        {
          id: '2345-234234-4235',
          status: 'executed',
          timestamp: 'Mon Aug 28 2023 13:12:44',
          actionType: 'Send Email',
          customerId: 'WDA021',
          channel: 'EMAIL',
          resultStatus: RESULTSTATUS.DELIVERED,
          opened: 'false',
        },
        {
          id: 'jifds8f-3454353-fdsff',
          status: 'executed',
          timestamp: 'Mon Aug 28 2023 13:12:50',
          actionType: 'Send Email',
          customerId: 'JOP012',
          channel: 'EMAIL',
          resultStatus: RESULTSTATUS.DELIVERED,
          opened: 'true',
        },
        {
          id: 'jfue-4928-fj58',
          status: 'failed',
          timestamp: 'Mon Aug 28 2023 13:38:00',
          actionType: 'Send Email',
          customerId: 'REHYK087',
          channel: 'EMAIL',
          resultStatus: RESULTSTATUS.NOT_DELIVERED,
          opened: 'false',
        },
        {
          id: '2345-234234-4235',
          status: 'executed',
          timestamp: 'Mon Aug 29 2023 13:12:44',
          actionType: 'Send Email',
          customerId: 'WDA021',
          channel: 'EMAIL',
          resultStatus: RESULTSTATUS.DELIVERED,
          opened: 'false',
        },
        {
          id: 'jifds8f-3454353-fdsff',
          status: 'executed',
          timestamp: 'Mon Aug 29 2023 13:40:50',
          actionType: 'Send Email',
          customerId: 'JOP012',
          channel: 'EMAIL',
          resultStatus: RESULTSTATUS.DELIVERED,
          opened: 'true',
        },
        {
          id: 'jfue-4928-fj58',
          status: 'failed',
          timestamp: 'Mon Aug 29 2023 13:40:00',
          actionType: 'Send Email',
          customerId: 'REHYK087',
          channel: 'EMAIL',
          resultStatus: RESULTSTATUS.NOT_DELIVERED,
          opened: 'false',
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
