import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(process.env.NODE_ENV === 'dev' ? '.env' : '.env.production'),
});

export const config = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT) || 6379,
  auth_pass: process.env.REDIS_PASSWORD,
};
