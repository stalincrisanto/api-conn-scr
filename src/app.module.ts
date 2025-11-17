import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountAbtModule } from './modules/AccountAbt/account-abt.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { databaseConfig } from './config/database';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ".env" }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: databaseConfig,
      inject: [ConfigService],
    }),
    AccountAbtModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
