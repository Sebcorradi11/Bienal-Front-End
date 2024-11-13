import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://bienal-front-end-viuu.vercel.app/');
    await page.getByRole('button').click();
const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Continuar con Github' }).click();
const page1 = await page1Promise;
    await page1.getByLabel('Username or email address').click();
    await page1.getByLabel('Username or email address').fill('BienalTesting');
    await page1.getByLabel('Password').click();
    await page1.getByLabel('Password').fill('bienal2024');
    await page1.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.getByRole('heading', { name: 'Gestionar Escultores' }).click();
    await page.getByRole('button', { name: 'Crear Escultor' }).click();
    await page.getByLabel('Nombre *').click();
    await page.getByLabel('Nombre *').fill('Lautaro');
    await page.getByLabel('Apellido *').click();
    await page.getByLabel('Apellido *').fill('Salina');
    await page.getByLabel('Biografía').click();
    await page.getByLabel('Biografía').fill('El mas grande');
    await page.getByLabel('Contacto').click();
    await page.getByLabel('Contacto').fill('3794044985');
    await page.getByLabel('Obras Previas').click();
    await page.getByLabel('Obras Previas').fill('El master tester');
    await page.locator('label').filter({ hasText: 'Arrastra y suelta la imagen' }).click();
    await page.locator('body').setInputFiles('goky20instinto.jpg');
    await page.getByRole('button', { name: 'Crear Escultor' }).click();

});