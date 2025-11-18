import { AccountAbtRequestDto } from 'src/modules/AccountAbt/infraestructure/persistence/dtos/account-abt-request.dto';

export interface CardAssignmentUseCases {
  getCardAssignmentInfo(
    type: 'cardCode' | 'documentId',
    value: string,
  ): Promise<AccountAbtRequestDto | null>;
}
