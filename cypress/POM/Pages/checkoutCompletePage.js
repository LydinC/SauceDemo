import commonPage from '../Pages/commonPage';

class checkoutCompletePage{
    
    elements ={
        backHomeButton: () => cy.get('[data-test="back-to-products"]'),
    }

    verifyPageTitle(){
        commonPage.getPageTitle().should('be.visible').and('have.text', 'Checkout: Complete!');
    }
    
}

export default new checkoutCompletePage();