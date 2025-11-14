import { AccountAbt } from 'src/modules/AccountAbt/domain/AccountAbt';

export interface AccountAbtUseCases {
  getAccountAbtByDocumentId(documentId: string): Promise<AccountAbt | null>;
}
