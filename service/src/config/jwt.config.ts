import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(process.env.NODE_ENV === 'dev' ? '.env' : '.env.production'),
});

export const config = {
	access: {
  	secret: process.env.JWT_ACCESS_SECRET || 'jwt_access_secret',
		expiresIn: '1d',
	},
	refresh: {
  	secret: process.env.JWT_REFRESH_SECRET || 'jwt_refresh_secret',
		expiresIn: '1d',
	},
};
