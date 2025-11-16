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
export class AppModule {
  constructor() {
    console.log('🔥 ENV en AppModule:');
    console.log('DB_HOST:', process.env.DB_HOST);
    console.log('DB_PORT:', process.env.DB_PORT);
    console.log('DB_USER:', process.env.DB_USER);
    console.log('DB_PASS:', process.env.DB_PASS);
    console.log('DB_NAME:', process.env.DB_NAME);
  }
}
