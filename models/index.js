import { Sequelize } from "sequelize";
import config from "../config/config.js";

const env = process.env.NODE_ENV || "production"; // Aseguramos que se use "production" en Render
const dbConfig = config[env];

if (!dbConfig) {
  throw new Error(`No existe configuración para el entorno: ${env}`);
}

let sequelize;

if (dbConfig.use_env_variable) {
  if (!process.env[dbConfig.use_env_variable]) {
    throw new Error(`La variable de entorno ${dbConfig.use_env_variable} no está definida.`);
  }
  sequelize = new Sequelize(process.env[dbConfig.use_env_variable], {
    ...dbConfig,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  });
} else {
  sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
      ...dbConfig,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    }
  );
}

export default sequelize;
