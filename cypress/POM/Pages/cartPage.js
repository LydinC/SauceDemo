class cartPage{
    
    elements ={
        title: () => cy.get('.title'),
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
}

export default new cartPage();