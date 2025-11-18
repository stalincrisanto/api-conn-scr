import { AccountAbt } from 'src/modules/AccountAbt/domain/account-abt';

export interface AccountAbtUseCases {
  getAccountAbtByDocumentId(documentId: string): Promise<AccountAbt | null>;
}
