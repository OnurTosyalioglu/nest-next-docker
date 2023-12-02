import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(process.env.NODE_ENV === 'dev' ? '.env' : '.env.production'),
});

export const config = {
	clientId: process.env.FB_CLIENT_ID,
	clientSecret: process.env.FB_CLIENT_SECRET,
	callbackURL: process.env.FB_CALLBACK_URL,
	scope: process.env.FB_SCOPE,
	profileFields: ['emails', 'name'],
};
