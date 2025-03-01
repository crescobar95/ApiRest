import sequelize from "./models/index.js"; 
import config from "../config/config.js";

const env = process.env.NODE_ENV || "production";
const dbConfig = config[env];

if (!dbConfig) {
  throw new Error(`No existe configuración para el entorno: ${env}`);
}

const sequelize = dbConfig.use_env_variable
  ? new Sequelize(process.env[dbConfig.use_env_variable], {
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    })
  : new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
      host: dbConfig.host,
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    });

    export default sequelize; // Exporta por defecto
