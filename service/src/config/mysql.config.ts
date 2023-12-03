import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(process.env.NODE_ENV === 'dev' ? '.env' : '.env.production'),
});

export const config = {
	// uri: process.env.MYSQL_URI,
	database: process.env.MYSQL_database || 'nest',
  host: process.env.MYSQL_HOST || 'localhost',
  port: parseInt(process.env.MYSQL_PORT) || 3306,
  user: process.env.MYSQL_USER || 'nest',
  password: process.env.MYSQL_PASSWORD || 'password',
};
