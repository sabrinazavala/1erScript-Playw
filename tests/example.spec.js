// // @ts-check
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page'; // Importa el módulo exportado desde el archivo home.page.js
import { LoginPage } from '../pages/login.page'; // Importa el módulo exportado desde el archivo login.page.js
import dotenv from 'dotenv';

dotenv.config();

test('Login to Demoblaze', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page); // Create an instance of LoginPage
      
  await homePage.goTo();
  await homePage.clickOnLoginLink();
  
  await loginPage.InsertUsername('random01'); // Use the method to insert username
  await loginPage.InsertPassword(process.env.PASSWORD); // Usa la contraseña desde .env
  await loginPage.clickOnLoginButton(); // Use the method to click on the login button
  
  await page.waitForTimeout(5000); // Wait for 5 second

  await homePage.elements.topMenu.welcome.waitFor({ state: 'visible' }); // Wait for the welcome message to be visible
  await expect(homePage.elements.topMenu.welcome).toContainText('random01'); // Verify that the welcome message contains the username 

});

