import "dotenv/config";

const config = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "cristian",
    database: process.env.DB_NAME || "guayas",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres"
  },

  test: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "cristian",
    database: process.env.DB_NAME || "database_test",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres"
  },

  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};

export default config;
