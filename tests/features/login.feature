Feature: Login y Logout

  Scenario: Usuario inicia sesión y cierra sesión correctamente
    Given el usuario está en la página de inicio
    When inicia sesión con usuario "random01" y contraseña válida
    Then debe ver su nombre de usuario en la barra de navegación
    When cierra sesión
    Then no debe ver el nombre de usuario en la barra de navegación
