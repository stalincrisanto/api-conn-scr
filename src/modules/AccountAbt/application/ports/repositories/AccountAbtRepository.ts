import { AccountAbt } from 'src/modules/AccountAbt/domain/AccountAbt';

export interface AccountAbtRepository {
  findByDocumentId(documentId: string): Promise<AccountAbt | null>;
}
