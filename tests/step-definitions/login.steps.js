// Feature: Login y Logout

//   Scenario: Usuario inicia sesión y cierra sesión correctamente
//     Given el usuario está en la página de inicio
//     When inicia sesión con usuario "random01" y contraseña válida
//     Then debe ver su nombre de usuario en la barra de navegación
//     When cierra sesión
//     Then no debe ver el nombre de usuario en la barra de navegación

const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const HomePage = require('../../pages/HomePage');






// Paso 1: Ir a la página de inicio
Given('el usuario está en la página de inicio', async function () {
    this.home = new HomePage(this.page);
    await this.home.goTo(); // El metodo ya tiene URL de la aplicación
});


//Paso 2: Iniciar sesión con usuario y contraseña válidos
When ('inicia sesión con usuario {string} y contraseña válida', async function (username) {
    await this.home.clickOnLoginLink();
    this.login = new LoginPage(this.page);
    await this.login.InsertUsername(username); // Usa el método para insertar el nombre de usuario
    await this.login.InsertPassword(process.env.PASSWORD); // Usa la contraseña desde .env
    await this.login.clickOnLoginButton();
    this.loggedUsername = username; // <-- Guarda el username
});

// Paso 3: Verificar que el nombre de usuario se muestra en la barra de navegación
Then('debe ver su nombre de usuario en la barra de navegación', async function () {
    await this.home.elements.topMenu.welcome.waitFor({ state: 'visible' }); // Espera a que el mensaje de bienvenida sea visible
    await expect(this.home.elements.topMenu.welcome).toContainText(this.loggedUsername); // Verifica que el mensaje de bienvenida contenga el nombre de usuario
});

// Paso 4: Cerrar sesión
When('cierra sesión', async function () {
    await this.home.clickOnLogoutLink(); // Llama al método para hacer clic en el enlace de cierre de sesión
    
});

// Paso 5: Verificar que el nombre de usuario ya no se muestra en la barra de navegación
Then('no debe ver el nombre de usuario en la barra de navegación', async function () {
    await expect(this.home.elements.topMenu.welcome).not.toContainText(this.loggedUsername, { timeout: 10000 }); // Verifica que el mensaje de bienvenida NO contenga el nombre de usuario
});






