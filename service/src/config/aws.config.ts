import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(
    process.env.NODE_DEV === 'dev' ? '.env' : '.env.production',
  ),
});

export const config = {
  forcePathStyle: true,
  endpoint: process.env.AWS_ENDPOINT,
  signatureVersion: 'v4',
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
};
