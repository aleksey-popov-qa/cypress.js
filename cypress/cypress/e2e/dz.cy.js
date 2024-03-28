describe('Автотесты на форму логина', function() 
{
  it('Верный логин и верный пароль', function()
  {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
  })
  it('Восстановление пароля', function()
  {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('german@dolnikov.ru');
    cy.get('#restoreEmailButton').click();
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
  })
  it('Верный логин и неверный пароль', function()
  {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('322111');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
  })
  it('Неверный логин и верный пароль', function()
  {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german22@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
  })
  it('Логин без @ и верный пароль', function()
  {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
  })
  it('Приведение к строчным буквам', function()
  {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
  })
  it('Покупка нового аватара покемона', function()
  {
    cy.visit('https://pokemonbattle.me/');
    cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
    cy.get('#password').type('BUSER_PASSWORD');
    cy.get('.auth__button').click();
    cy.get('.header__btns > [href="/shop"]').click();
    cy.get('.available > button').first().click();
    cy.get('.credit').type('4620869113632996');
    cy.get('.k_input_ccv').type('125');
    cy.get('.k_input_date').type('1225');
    cy.get('.k_input_name').type('NAME');
    cy.get('.pay-btn').click();
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__submit-button').click();
    cy.contains('Покупка прошла успешно').should('be.visible');
  })
})