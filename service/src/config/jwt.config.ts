import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(
    process.env.NODE_ENV === 'dev' ? '.env' : '.env.production',
  ),
});

export const config = {
  accessSecret: process.env.JWT_ACCESS_SECRET || 'jwt_access_secret',
  refreshSecret: process.env.JWT_REFRESH_SECRET || 'jwt_refresh_secret',
};
