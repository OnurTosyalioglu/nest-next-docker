import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(process.env.NODE_ENV === 'dev' ? '.env' : '.env.production'),
});

export const config = {
  uri: `${process.env.MONGODB_URI}`,
  host: `${process.env.MONGODB_HOST}`,
  port: `${process.env.MONGODB_PORT}`,
  database: `${process.env.MONGODB_DATABASE}`,
  user: `${process.env.MONGODB_USER}`,
  pass: `${process.env.MONGODB_PASS}`,
};
