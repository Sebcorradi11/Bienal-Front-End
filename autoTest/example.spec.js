// @ts-check
import { test, expect }  from '@playwright/test';

// @ts-ignore
test('has title', async ({ page }) => {
  await page.goto('https://bienal-front-end-viuu.vercel.app/');
}, { headless: true });

