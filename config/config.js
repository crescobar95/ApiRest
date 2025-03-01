import Dotenv from "dotenv";
Dotenv.config();

export default{
  development: {
    username: "postgres",
    password: "cristian",
    database: "guayas",
    host: "db",
    dialect: "postgres"
  },

  test: {
   username: "postgres",
    password: "cristian",
    database: "database_test",
    host: "db",
    dialect: "postgres"
  },
  productio:{
  use_env_variable: "database_url",
  host: process.env.DB_HOST,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // Necesario en Render
      rejectUnauthorized: false
    }
  }
  }
}