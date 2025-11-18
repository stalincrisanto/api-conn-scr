import { AccountAbt } from 'src/modules/AccountAbt/domain/account-abt';

export interface AccountAbtRepository {
  findByDocumentId(documentId: string): Promise<AccountAbt | null>;
  findCardAssignment(
    type: 'cardCode' | 'documentId',
    value: string,
  ): Promise<AccountAbt | null>;
}
