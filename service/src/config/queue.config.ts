import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(process.env.NODE_ENV === 'dev' ? '.env' : '.env.production'),
});

export const config = {
	redis: {
  	host: process.env.REDIS_HOST,
  	port: parseInt(process.env.REDIS_PORT),
  },
};
