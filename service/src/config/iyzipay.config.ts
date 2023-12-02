import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(process.env.NODE_ENV === 'dev' ? '.env' : '.env.production'),
});

export const config = {
	credentials: {
  	apiKey: process.env.IYZIPAY_API_KEY || 'apikey',
  	secretKey: process.env.IYZIPAY_SECRET_KEY || 'secretkey',
 	 	uri: process.env.IYZIPAY_URI || 'https://sandbox-api.iyzipay.com',
	},
	plans: {
		basicMonthly: process.env.IZYIPAY_BASIC_PLAN_MONTHLY_ID,
		basicYearly: process.env.IZYIPAY_BASIC_PLAN_YEARLY_ID,
	},
};
