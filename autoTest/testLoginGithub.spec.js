import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bienal-front-end-viuu.vercel.app/login');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Continuar con Github' }).click();
  const page1 = await page1Promise;
  await page1.getByLabel('Username or email address').fill('DeuxExDoge');
  await page1.getByLabel('Username or email address').press('Tab');
  await page1.getByLabel('Password').fill('');
  await page1.getByLabel('Password').press('Enter');
  await page1.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page1.goto('https://frontend-bienal.firebaseapp.com/__/auth/handler?code=d362aa1d4369f989c16f&state=AMbdmDn3jvxXgL0PRPklOPIYba4pQZEXC2-29mm4Uo4IYzkmkbXneT936pkxNrF0S90k-DGIyHBu_WLSU7dJLr-VeitIM95wjvgyHjkqloZeOnmi4NFW94a80P3tCaAcdw4Q0M6wQULINABba6_VQWZ1S-6CIAf-rfzcZN-5reP2cnREGOXIHdFkxXPmI-RYNpsPemZWM-NBBeoq_kCQo6OVcObUq1GhOMZT329O34xKxK6VfKvP1wlZhhEkYyaNtfD-YmsbPXM3z0sb9fx9jTmy_eH5n4sdxNXshnP8nH531HS0XxThx59WRUjNDgq6Wh_DY9z104vRFcHe');
  await page.goto('https://bienal-front-end-viuu.vercel.app/adminPanel');

});