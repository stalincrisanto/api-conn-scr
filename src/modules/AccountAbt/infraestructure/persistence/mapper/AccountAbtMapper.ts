import { AccountAbt } from 'src/modules/AccountAbt/domain/AccountAbt';
import { Primitives } from 'src/shared/domain/Primitives';
import { AccountAbtEntity } from '../entities/AccountAbt.entity';
import { AccountAbtResponseDto } from '../dtos/AccountAbtResponseDto';

export class AccountAbtMapper {
  static toDomain(entity: AccountAbtEntity): AccountAbt {
    return new AccountAbt(
      entity.id,
      entity.accountAbtId,
      entity.fullName,
      entity.documentId,
      entity.email,
    );
  }

  static toEntity (domain: AccountAbt): AccountAbtEntity {
    const entity = new AccountAbtEntity();
    entity.accountAbtId = domain.accountAbtId;
    entity.fullName = domain.fullName;
    entity.documentId = domain.documentId;
    entity.email = domain.email;
    return entity;
  };

  static toDto(entity: AccountAbtEntity): AccountAbtResponseDto {
    const dto: AccountAbtResponseDto = {
      fullName: entity.fullName,
      documentId: entity.documentId,
      email: entity.email,
    };
    return dto;
  }
}
