import { AccountAbt } from 'src/modules/AccountAbt/domain/account-abt';
import { Primitives } from 'src/shared/domain/Primitives';
import { AccountAbtEntity } from '../entities/account-abt.entity';
import { AccountAbtResponseDto } from '../dtos/account-abt-response.dto';

export class AccountAbtMapper {
  static toDomain(entity: AccountAbtEntity): AccountAbt {
    return new AccountAbt(
      entity.id,
      entity.accountAbtId,
      entity.fullName,
      entity.documentId,
      entity.email,
      entity.profile
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
