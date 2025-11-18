import { Module } from '@nestjs/common';
import { AccountAbtController } from './infraestructure/controllers/account-abt.controller';
import { AccountAbtService } from './application/services/account-abt.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountAbtEntity } from './infraestructure/persistence/entities/account-abt.entity';
import { AccountAbtRepositoryImpl } from './infraestructure/persistence/repositories/account-abt.repositoryimpl';
import { CardAssignmentController } from './infraestructure/controllers/card-assignment.controller';
import { CardAssignmentService } from './application/services/card-assignment.service';

@Module({
  imports: [TypeOrmModule.forFeature([AccountAbtEntity])],
  controllers: [AccountAbtController, CardAssignmentController],
  providers: [
    AccountAbtService,
    CardAssignmentService,
    {
      provide: 'AccountAbtRepository',
      useClass: AccountAbtRepositoryImpl,
    },
  ],
})
export class AccountAbtModule {}
