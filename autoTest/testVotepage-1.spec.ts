import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bienal-front-end-viuu.vercel.app/vote');
  await page.getByRole('heading', { name: 'Luis Bernardi' }).click();
  await page.getByRole('heading', { name: 'Argentina' }).click();
  await page.getByText('¡Tu opinión cuenta! Calificá').click();
  await page.locator('.MuiGrid-root > .MuiButtonBase-root').first().click();
  await page.locator('.MuiGrid-root > div:nth-child(2) > .MuiButtonBase-root').click();
  await page.locator('div:nth-child(3) > .MuiButtonBase-root').click();
  await page.locator('div:nth-child(4) > .MuiButtonBase-root').click();
  await page.locator('div:nth-child(5) > .MuiButtonBase-root').click();
  await page.getByRole('button', { name: 'Enviar Voto' }).click();
  await page.getByRole('img', { name: 'Perfil del Escultor' }).click();
});