import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(
    process.env.NODE_DEV === 'dev' ? '.env' : '.env.production',
  ),
});

export const config = {
  uri: ``,
  host: `${process.env.MONGODB_HOST}`,
  port: `${process.env.MONGODB_PORT}`,
  name: `${process.env.MONGODB_NAME}`,
  user: `${process.env.MONGODB_USER}`,
  pass: `${process.env.MONGODB_PASS}`,
};
