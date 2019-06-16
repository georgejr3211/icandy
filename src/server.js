import { config } from 'dotenv';
config();

import express from 'express';
import bodyParser from 'body-parser';
import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
    port: process.env.DB_PORT
  }
);

sequelize.authenticate()
.then(() => console.log('Conectado ao banco de dados'))
.catch((err) => console.log('Falha ao se conectar:', err));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get((req, res) => res.json({ apiName: 'icandy' }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server on at port ${port}`));