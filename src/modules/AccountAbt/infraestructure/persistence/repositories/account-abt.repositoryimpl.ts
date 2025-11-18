import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { AccountAbtRepository } from 'src/modules/AccountAbt/application/ports/repositories/account-abt.repository';
import { AccountAbt } from 'src/modules/AccountAbt/domain/account-abt';
import { Repository } from 'typeorm';
import { AccountAbtEntity } from '../entities/account-abt.entity';
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

  async findCardAssignment(
    type: 'cardCode' | 'documentId',
    value: string,
  ): Promise<AccountAbt | null> {
    const query = await this.repository
      .createQueryBuilder('abt')
      .where('abt.profile = :profile', { profile: '10' });

    if (type === 'documentId') {
      query.andWhere('abt.documentId = :documentId', { documentId: `O${value}` });
    }

    if (type === 'cardCode') {
      query.andWhere('abt.accountAbtId LIKE :accountAbtId', {
        accountAbtId: `%${value}%`,
      });
    }

    return await query.getOne();
  }
}
