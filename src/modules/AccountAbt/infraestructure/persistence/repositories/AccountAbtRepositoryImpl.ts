import { Injectable, InternalServerErrorException } from '@nestjs/common';
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
    try {
      const entity = await this.repository.findOne({
        where: { documentId },
      });

      return entity ? entity : null;
    } catch (error) {
      throw new InternalServerErrorException('Error de base de datos');
    }
  }
}
