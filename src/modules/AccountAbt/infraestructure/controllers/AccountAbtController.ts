import { Controller, Get, Param } from '@nestjs/common';
import { AccountAbtService } from '../../application/services/AccountAbtService';
import { AccountAbtResponseDto } from '../persistence/dtos/AccountAbtResponseDto';
import { AccountAbtMapper } from '../persistence/mapper/AccountAbtMapper';

@Controller("account-abt")
export class AccountAbtController {
  constructor(private readonly accountAbtService: AccountAbtService) {}

  @Get(':documentId')
  async getAccountAbt(
    @Param('documentId') documentId: string,
  ): Promise<AccountAbtResponseDto | null> {
    const entityData = await this.accountAbtService.getAccountAbtByDocumentId(documentId);
    const result = AccountAbtMapper.toDto(entityData);
    return result;
  }
}
