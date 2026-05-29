import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve('.env') });

export default {
  baseUrl: process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com',
  browser: process.env.BROWSER || 'chromium',
  headless: process.env.HEADLESS !== 'false',
  timeout: Number(process.env.TIMEOUT || 30000)
};
