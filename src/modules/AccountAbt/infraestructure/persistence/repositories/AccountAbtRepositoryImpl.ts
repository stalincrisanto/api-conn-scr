import { Injectable } from '@nestjs/common';
import { AccountAbtRepository } from 'src/modules/AccountAbt/application/ports/repositories/AccountAbtRepository';
import { AccountAbt } from 'src/modules/AccountAbt/domain/AccountAbt';
import { Repository } from 'typeorm';
import { AccountAbtEntity } from '../entities/AccountAbt.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AccountAbtRepositoryImpl implements AccountAbtRepository {
  constructor(
    @InjectRepository(AccountAbtEntity)
    private readonly repository: Repository<AccountAbtEntity>,
  ) {}

  async findByDocumentId(documentId: string): Promise<AccountAbt | null> {
    const accountAbt = await this.repository.findOneBy({ documentId });
    return accountAbt;
  }
}
