import { test, expect } from '@playwright/test';

test('EPAM Client Work navigation', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  // The live site displays a cookie banner in a fresh browser context.
  const acceptAll = page.getByRole('button', { name: 'Accept All' });
  if (await acceptAll.isVisible().catch(() => false)) {
    await acceptAll.click();
  }

  await page.getByRole('link', { name: 'Services', exact: true }).first().click({ force: true });
  await page.getByRole('link', { name: 'Explore Our Client Work', exact: true }).first().click();
  await expect(page.getByRole('heading', { name: 'Client Work', exact: true })).toBeVisible();
});
