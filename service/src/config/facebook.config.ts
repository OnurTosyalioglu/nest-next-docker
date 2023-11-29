import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(
    process.env.NODE_DEV === 'dev' ? '.env' : '.env.production',
  ),
});

export const config = {
  id: process.env.FB_ID,
};
