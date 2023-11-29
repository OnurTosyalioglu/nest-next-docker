import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(
    process.env.NODE_DEV === 'dev' ? '.env' : '.env.production',
  ),
});

export const config = {
  transport: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    ignoreTLS: process.env.MAIL_TLS === 'true' ? true : false,
    secure: process.env.MAIL_SECURE === 'true' ? true : false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  },
  defaults: {
    from: `Noreply <${process.env.MAIL_FROM}>`,
  },
  preview: process.env.MAIL_PREVIEW === 'true' ? true : false,
};
