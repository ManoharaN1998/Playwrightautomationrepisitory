import fs from 'fs';
import path from 'path';

function sanitizeFilename(testName) {
  return testName.replace(/[^a-z0-9-_]/gi, '_').slice(0, 100);
}

export async function takeScreenshot(page, testName) {
  const screenshotDir = path.resolve('screenshots');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  const fileName = `${sanitizeFilename(testName)}-${Date.now()}.png`;
  const filePath = path.join(screenshotDir, fileName);
  await page.screenshot({ path: filePath, fullPage: true, timeout: 60000 });
  return filePath;
}
