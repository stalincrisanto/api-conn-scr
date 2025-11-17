import { Module } from '@nestjs/common';
import { AccountAbtController } from './infraestructure/controllers/AccountAbtController';
import { AccountAbtService } from './application/services/AccountAbtService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountAbtEntity } from './infraestructure/persistence/entities/AccountAbt.entity';
import { AccountAbtRepositoryImpl } from './infraestructure/persistence/repositories/AccountAbtRepositoryImpl';
import { CardAssignmentController } from './infraestructure/controllers/CardAssignmentController';
import { CardAssignmentService } from './application/services/CardAssignmentService';

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
