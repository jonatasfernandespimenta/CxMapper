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
          id: '2345-234234-4235',
          status: 'executed',
          timestamp: 'Mon Aug 28 2023 13:12:44',
          actionType: 'Send Email',
          customerId: 'sdfhksdf-4345-sdfsf',
          channel: 'EMAIL',
          resultStatus: RESULTSTATUS.DELIVERED,
        },
        {
          id: 'jifds8f-3454353-fdsff',
          status: 'executed',
          timestamp: 'Mon Aug 28 2023 13:12:44',
          actionType: 'Send Email',
          customerId: 'bjud8-dj39-glao',
          channel: 'EMAIL',
          resultStatus: RESULTSTATUS.DELIVERED,
        },
        {
          id: 'jfue-4928-fj58',
          status: 'failed',
          timestamp: 'Mon Aug 28 2023 13:12:44',
          actionType: 'Send Sms',
          customerId: 'asd9-2349-49fsd',
          channel: 'SMS',
          resultStatus: RESULTSTATUS.NOT_DELIVERED,
        },
        {
          id: 'di39-fia3-4dia',
          status: 'executed',
          timestamp: 'Mon Aug 28 2023 13:12:44',
          actionType: 'Send Email',
          customerId: 'd93k-dampe-riw9',
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
