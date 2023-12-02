import * as dotenv from 'dotenv';
import * as path from 'path';
import * as redisStore from 'cache-manager-redis-store'

dotenv.config({
  path: path.resolve(process.env.NODE_ENV === 'dev' ? '.env' : '.env.production'),
});

export const config = {
	store: redisStore,
	ttl: parseInt(process.env.REDIS_TTL) || 10000,
	host: process.env.REDIS_HOST,
	port: process.env.REDIS_PORT,
	auth_pass: process.env.REDIS_PASSWORD,
};
