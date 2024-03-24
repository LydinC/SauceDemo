import loginPage from '../POM/Pages/loginPage';
import inventoryPage from '../POM/Pages/inventoryPage';
import commonPage from '../POM/Pages/commonPage';

describe('Verify Login Page Functionality', () => {

    beforeEach(() => {
      cy.visit('');
    })
  
    it('Verify login page header title', () => {
        loginPage.elements.loginLogo().should('be.visible').should('have.text', 'Swag Labs');
    })

    it('Verify user can login successfully with valid credentials', () => {
        loginPage.login('standard_user', 'secret_sauce');
        commonPage.verifyUserIsLoggedIn();
        inventoryPage.verifyUserIsOnInventoryPage();
      })

    it('Verify locked-out user cannot login', () => {
      loginPage.login('locked_out_user', 'secret_sauce');
      loginPage.verifyAlertMessage('Epic sadface: Sorry, this user has been locked out.');
    })

    it('Verify alert for login with missing username', () => {
      loginPage.login('', 'secret-sauce');
      loginPage.verifyAlertMessage('Epic sadface: Username is required');
    })

    it('Verify alert for login with missing password', () => {
      loginPage.login('standard_user', '');
      loginPage.verifyAlertMessage('Epic sadface: Password is required');
    })

    afterEach(() => {
    })

})