import loginPage from '../POM/Pages/loginPage';
import commonPage from '../POM/Pages/commonPage';

describe('Verify Login Page Functionality', () => {

    beforeEach(() => {
       //cy.visit('/');
      })
  
    it('Verify login page header title', () => {
        cy.visit('/');
        loginPage.elements.loginLogo().should('be.visible').should('have.text', 'Swag Labs');
    })

    it('Verify user can login successfully with valid credentials', () => {
        cy.visit('/');
        loginPage.login('standard_user', 'secret_sauce');
        commonPage.elements.title().should('be.visible').and('have.text', 'Products');
      })

      it('Verify locked-out user cannot login', () => {
        cy.visit('/');
        loginPage.login('locked_out_user', 'secret_sauce');
        loginPage.elements.errorPrompt().should('be.visible').and('have.text', 'Epic sadface: Sorry, this user has been locked out.');
      })

      it('Verify alert for login with missing username', () => {
        
        cy.visit('/');
        loginPage.login('', 'secret-sauce');
        loginPage.elements.errorPrompt().should('be.visible').and('have.text', 'Epic sadface: Password is required');
      })

      it('Verify alert for login with missing password', () => {
        cy.visit('/');
        loginPage.login('standard_user', '');
        loginPage.elements.errorPrompt().should('be.visible').and('have.text', 'Epic sadface: Username is required');
      })

})