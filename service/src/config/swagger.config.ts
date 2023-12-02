import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(process.env.NODE_ENV === 'dev' ? '.env' : '.env.production'),
});

export const config = {
	title: process.env.SWAGGER_TITLE,
	description: process.env.SWAGGER_DESCRIPTION,
	version: process.env.SWAGGER_VERSION,
	tag: process.env.SWAGGER_TAG,
	route: process.env.SWAGGER_ROUTE || 'swagger',
};
