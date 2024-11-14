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
    await page.getByRole('heading', { name: 'Gestionar Eventos' }).click();
    await page.getByRole('button', { name: 'Crear Evento' }).click();
    await page.getByLabel('Nombre del Evento *').click();
    await page.getByLabel('Nombre del Evento *').fill('Ameri');
    await page.getByLabel('Fecha de inicio del Evento *').fill('2024-11-13');
    await page.getByLabel('Fecha de fin del Evento *').fill('2024-11-13');
    await page.getByLabel('Lugar del Evento *').click();
    await page.getByLabel('Lugar del Evento *').fill('Buenos Aires');
    await page.getByLabel('Descripción del Evento *').click();
    await page.getByLabel('Descripción del Evento *').fill('El mejor evento del mundo');
    await page.getByLabel('Tema del Evento').click();
    await page.getByLabel('Tema del Evento').fill('Trap');
    await page.locator('label').filter({ hasText: 'Arrastra y suelta la imagen' }).click();
    await page.locator('body').setInputFiles('1000_F_296054899_mL331Z12tb1eHOryBlkhkX8tBFHffs3I.jpg');
    await page.getByRole('button', { name: 'Crear Evento' }).click();
});