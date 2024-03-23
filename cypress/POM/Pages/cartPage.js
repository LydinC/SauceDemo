import commonPage from '../Pages/commonPage';

class cartPage{
    
    elements ={
        continueShoppingButton: () => cy.get('#continue-shopping'),
        checkoutButton: () => cy.get('#checkout'),
        //errorPrompt : () => cy.get()
    }
    
    clickContinueShopping(){
        this.elements.continueShoppingButton.click();
    }

    clickCheckout(){
        this.elements.checkoutButton.click();
    }

    verifyPageTitle(){
        commonPag.getPageTitle().should('be.visible').and('have.text', 'Your Cart');
    }
}

export default new cartPage();