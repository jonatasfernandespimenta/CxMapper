import { ApprovalStatusEnum } from '@/@types/ApprovalStatusEnum';

export interface IApprovement {
  id: string
  product: string
  createdAt: string
  createdBy: string
  approvalStatus: ApprovalStatusEnum
}

export const approvements = {
  approvements: [
    {
      id: 'asdf-gfdh-fjais',
      product: 'MAP',
      createdAt: '25 AUG 2023',
      createdBy: 'Jônatas Fernandes Pimenta',
      approvalStatus: ApprovalStatusEnum.APPROVED,
    },
  ],
};
