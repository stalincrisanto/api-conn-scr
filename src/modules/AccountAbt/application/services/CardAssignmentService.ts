import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AccountAbtRepository } from '../ports/repositories/AccountAbtRepository';
import { CardAssignmentUseCases } from '../ports/usecases/CardAssignmentUseCases';
import { AccountAbtMapper } from '../../infraestructure/persistence/mapper/AccountAbtMapper';
import { AccountAbtResponseDto } from '../../infraestructure/persistence/dtos/AccountAbtResponseDto';

@Injectable()
export class CardAssignmentService implements CardAssignmentUseCases {
  constructor(
    @Inject('AccountAbtRepository')
    private readonly repository: AccountAbtRepository,
  ) {}
  async getCardAssignmentInfo(
    type: 'cardCode' | 'documentId',
    value: string,
  ): Promise<AccountAbtResponseDto | null> {
    const accountInfo = await this.repository.findCardAssignment(type, value);

    if (!accountInfo) {
      throw new NotFoundException({
        code: 'NOT_FOUND',
        message: `La tarjeta ${value} no se encuentra en el sistema`,
        details: { type },
      });
    }

    if (type === 'cardCode') {
      if (accountInfo.documentId === '999999999999') {
        throw new NotFoundException({
          code: 'NOT_ASSIGNED',
          message: `La tarjeta ${value} no ha sido asignada`,
          details: { type },
        });
      }
    }

    if (type === 'documentId' && !accountInfo) {
      throw new NotFoundException({
        code: 'NOT_ASSIGNED',
        message: `La cédula ${value} no se encuentra asociada a una tarjeta`,
        details: { type },
      });
    }
    const cardAssignment = AccountAbtMapper.toDto(accountInfo);
    return cardAssignment;
  }
}
