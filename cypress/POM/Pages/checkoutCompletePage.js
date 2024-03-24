import commonPage from '../Pages/commonPage';

class checkoutCompletePage{
    
    elements ={
        backHomeButton: () => cy.get('[data-test="back-to-products"]'),
        completeHeader: () => cy.get('.complete-header'),
        
    }

    verifyPageTitle(){
        commonPage.getPageTitle().should('be.visible').and('have.text', 'Checkout: Complete!');
    }

    verifyOrderSuccessfull(){
        this.elements.completeHeader().should('be.visible').and('have.text', 'Thank you for your order!');
    }
    
}

export default new checkoutCompletePage();