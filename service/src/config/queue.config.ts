import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(process.env.NODE_ENV === 'dev' ? '.env' : '.env.production'),
});

export const config = {
	host: process.env.QUEUE_HOST || 'localhost',
	port: parseInt(process.env.QUEUE_PORT) || 6379,
	name: process.env.QUEUE_NAME || 'api',
	password: process.env.QUEUE_PASSWORD,
};
