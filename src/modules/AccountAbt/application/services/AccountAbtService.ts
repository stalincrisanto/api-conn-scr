import { Inject, Injectable } from '@nestjs/common';
import { AccountAbt } from '../../domain/AccountAbt';
import { AccountAbtRepository } from '../ports/repositories/AccountAbtRepository';
import { AccountAbtUseCases } from '../ports/usecases/AccountAbtUseCases';

@Injectable()
export class AccountAbtService implements AccountAbtUseCases {
  constructor(
    @Inject('AccountAbtRepository')
    private readonly repository: AccountAbtRepository,
  ) {}
  async getAccountAbtByDocumentId(
    documentId: string,
  ): Promise<AccountAbt | null> {
    const accountAbt = await this.repository.findByDocumentId(documentId);
    return accountAbt;
  }
}
