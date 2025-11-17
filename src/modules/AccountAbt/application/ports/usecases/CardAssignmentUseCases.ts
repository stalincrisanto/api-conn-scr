import { AccountAbtRequestDto } from 'src/modules/AccountAbt/infraestructure/persistence/dtos/AccountAbtRequestDto';

export interface CardAssignmentUseCases {
  getCardAssignmentInfo(
    type: 'cardCode' | 'documentId',
    value: string,
  ): Promise<AccountAbtRequestDto | null>;
}
