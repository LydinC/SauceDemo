import loginPage from '../POM/Pages/loginPage';
import inventoryPage from '../POM/Pages/inventoryPage';
import commonPage from '../POM/Pages/commonPage';

describe('Verify Login Page Functionality', () => {

    let credentials;
    before( () => 
      cy.fixture("credentials").then((data)=> {
        credentials = data;
    }));

    beforeEach(() => {
      cy.visit('');
    })
  
    it('Verify login page header title', () => {
        loginPage.elements.loginLogo().should('be.visible').should('have.text', 'Swag Labs');
    })

    it('Verify user can login successfully with valid credentials', () => {
        loginPage.login(credentials.valid.username, credentials.valid.password);
        commonPage.verifyUserIsLoggedIn();
      })
      
    it('Verify user cannot login with invalid credentials', () => {
      credentials.invalid.forEach(user => {
        loginPage.login(user.username, user.password);
        loginPage.verifyAlertMessage(user.expected);
      })
    })

    /*
    it('Verify user cannot access other pages unauthenticated', () => {
        cy.visit('/inventory.html');
        loginPage.verifyUserIsOnLoginPage();
        loginPage.verifyAlertMessage('Epic sadface: You can only access \'/inventory.html\' when you are logged in.');
    })
    */
    
    /* Replaced by Fixture data loop test 
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
    */
    
    afterEach(() => {
    })

})