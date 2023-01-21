import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...await page.goto('about:blank');
  await page.goto('https://demoqa.com/');
  await page.locator('path').first().click();
  await page.getByRole('list').locator('#item-5').getByText('Links').click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#simpleLink').click();
  const page1 = await page1Promise;
  await page1.close();
  await page.getByText('Broken Links - Images').click();

  const mainUrl = await page.url();

  await page.getByRole('link', { name: 'Click Here for Valid Link' }).click();

  await page.goto(mainUrl);
  await page.getByRole('link', { name: 'Click Here for Broken Link' }).click();
  await page.close();
});