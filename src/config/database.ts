import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const dataBaseConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    // autoLoadEntities: true,
    // sincronización en false sporque no se debe usar con la BD del Sistema Central de Recaudo
    synchronize: false,
    logging: true,
}