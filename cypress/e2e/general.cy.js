import loginPage from '../POM/Pages/loginPage';
import commonPage from '../POM/Pages/commonPage';

describe('Verify Common Logged In Functionality', () => {

    before(() => {

    })

    beforeEach(() => {
      cy.visit('');
      loginPage.login("standard_user", "secret_sauce");
      commonPage.verifyUserIsLoggedIn();
      //commonPage.navigateTo('all_items');
    })
  
    it('Verify all expected menu options are available', () => { 
        commonPage.openMenu();
        commonPage.elements.allItemsLink().should('be.visible');
        commonPage.elements.aboutLink().should('be.visible');
        commonPage.elements.logoutLink().should('be.visible');
        commonPage.elements.resetAppLink().should('be.visible');
    })

    it('Verify Twitter link correctly redirects user', () => {
         commonPage.clickTwitter();
        cy.url().should("be.equals", "https://twitter.com/saucelabs")
        //cy.title().should("include", "Sauce Labs");
      })

      it('Verify Facebook link correctly redirects user', () => {
         commonPage.clickFacebook();
        cy.url().should("be.equals", "https://facebook.com/saucelabs")
        //cy.title().should("include", "Sauce Labs");
      })

      it('Verify LinkedIn link correctly redirects user', () => {
         commonPage.clickLinkedIn();
        cy.url().should("be.equals", "https://www.linkedin.com/company/sauce-labs/")
        cy.title().should("include", "Sauce Labs");
      })



})