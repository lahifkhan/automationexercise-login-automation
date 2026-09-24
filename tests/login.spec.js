require("dotenv").config({ path: "../.env" });
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.automationexercise.com/");

  await page.click('a[href="/login"]');
  console.log("Email:", process.env.EMAIL);
  console.log("Password:", process.env.PASSWORD);

  await page.fill('[data-qa="login-email"]', process.env.EMAIL);
  await page.fill('[data-qa="login-password"]', process.env.PASSWORD);
  await page.waitForTimeout(3000);

  await page.click('[data-qa="login-button"]');

  await page.locator("text=Logged in as").waitFor();
  await page.waitForTimeout(3000);

  console.log("Login successful!");

  await browser.close();
})();
