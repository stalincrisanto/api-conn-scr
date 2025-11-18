import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AccountAbt } from '../../domain/account-abt';
import { AccountAbtRepository } from '../ports/repositories/account-abt.repository';
import { AccountAbtUseCases } from '../ports/usecases/account-abt.usecases';

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
    if (!accountAbt) {
      throw new NotFoundException({
        code: 'ACCOUNT_NOT_FOUND',
        message: 'No se encontró la cuenta ABT',
        details: { documentId },
      });
    }
    return accountAbt;
  }
}
