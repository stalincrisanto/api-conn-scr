//import { TypeOrmModuleOptions } from "@nestjs/typeorm";

//export const dataBaseConfig: TypeOrmModuleOptions = {
//    type: 'mysql',
//    host: process.env.DB_HOST,
//    port: Number(process.env.DB_PORT),
//    username: process.env.DB_USER,
//    password: process.env.DB_PASS,
//    database: process.env.DB_NAME,
//    // autoLoadEntities: true,
//    // sincronización en false sporque no se debe usar con la BD del Sistema Central de Recaudo
//    synchronize: false,
//    logging: true,
//}

// config/database.ts
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";

export const databaseConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASS'),
    database: configService.get('DB_NAME'),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: false,
    logging: true,
});