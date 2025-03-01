import Sequelize from "sequelize";
import config from "../config/config.js";

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

if (!dbConfig) {
  throw new Error(`No existe configuración para el entorno: ${env}`);
}

let sequelize;

if (dbConfig.use_env_variable) {
  sequelize = new Sequelize(process.env[dbConfig.use_env_variable], dbConfig);
} else {
  sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    dbConfig
  );
}

