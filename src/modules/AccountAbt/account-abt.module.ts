import { Module } from '@nestjs/common';
import { AccountAbtController } from './infraestructure/controllers/AccountAbtController';
import { AccountAbtService } from './application/services/AccountAbtService';

@Module({
  controllers: [AccountAbtController],
  providers: [AccountAbtService],
})
export class AccountAbtModule {}
