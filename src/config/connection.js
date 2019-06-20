import { config } from 'dotenv';
import Sequelize from 'sequelize';

config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
    port: process.env.DB_PORT,
    logging: false,
    define: {
      timestamps: false,
    }
  }
);

export default sequelize;