import { config } from "../config.js";
import SQ from "sequelize";
import mariadb from 'mariadb'

const { host, user, database, password } = config.db;

export const sequelize = new SQ.Sequelize(database, user, password, {
    host,
    dialect: 'mariadb',
    logging: false,
    timezone: '+09:00',
    port: '30355'
});
// 시퀄라이저 cloud할때 소켓.io가 계속 나오면 여기 포트안적었을수도....