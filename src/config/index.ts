require('dotenv').config();

type Configuration = {
  dev:  boolean;
  dbUser?:  string;
  dbPassword?:  string;
  dbHost?:  string;
  dbName?:  string
};

const config: Configuration = {
  dev: process.env.NODE_ENV !== 'production',
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME
};

export { config };