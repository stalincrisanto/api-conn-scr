import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataBaseConfig } from './config/database';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataBaseConfig)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
