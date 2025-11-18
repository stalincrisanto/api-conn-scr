import { Controller, Get, Param } from '@nestjs/common';
import { AccountAbtService } from '../../application/services/account-abt.service';
import { AccountAbtResponseDto } from '../persistence/dtos/account-abt-response.dto';
import { AccountAbtMapper } from '../persistence/mapper/account-abt.mapper';

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
