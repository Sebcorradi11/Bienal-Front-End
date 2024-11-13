import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navegar a la página de login
  await page.goto('https://bienal-front-end-viuu.vercel.app/login');
  
  // Iniciar autenticación con GitHub
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Continuar con Github' }).click();
  
  const page1 = await page1Promise;
  
  // Ingresar credenciales
  await page1.waitForSelector('input[name="login"]'); // Esperar que el campo de usuario esté disponible
  await page1.getByLabel('Username or email address').fill('GONZ4LINHO');
  await page1.getByLabel('Password').fill('Regatas1010');
  
  // Iniciar sesión
  await page1.getByRole('button', { name: 'Sign in', exact: true }).click();
  
  // Asegurar que la redirección finalice
  await page.waitForNavigation({ url: 'https://bienal-front-end-viuu.vercel.app/adminPanel' });
  
  // Navegar al panel de administración
  await page.getByRole('button').click();
  await page.getByRole('heading', { name: 'Gestionar Esculturas' }).click();
  
  // Realizar acciones en la página de administración
  await page.getByLabel('Ver escultura').first().click();
  await page.getByRole('button', { name: 'Atrás' }).click();
  await page.getByLabel('Modificar escultura').first().click();
  await page.getByRole('button', { name: 'Atrás' }).click();
  await page.getByLabel('Eliminar escultura').first().click();
  
  // Crear una nueva escultura
  await page.getByRole('button', { name: 'Crear Escultura' }).click();
  await page.getByLabel('Nombre *').fill('Messi');
  await page.getByLabel('Descripción de la Temática *').fill('Cristiano');
  await page.getByLabel('Fecha de Creación *').fill('2022-12-18');
  await page.getByRole('button', { name: 'Crear Escultura' }).click();
});
