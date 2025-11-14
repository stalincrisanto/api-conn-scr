import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataBaseConfig } from './config/database';
import { AccountAbtModule } from './modules/AccountAbt/account-abt.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataBaseConfig),
    AccountAbtModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
