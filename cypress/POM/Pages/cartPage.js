import commonPage from '../Pages/commonPage';

class cartPage{
    
    elements ={
        continueShoppingButton: () => cy.get('#continue-shopping'),
        checkoutButton: () => cy.get('#checkout'),
        itemPrices: () => cy.get('.inventory_item_price'),
        removeFromCartButtons : () => cy.get('.cart_button'),
        cartItems: () => cy.get('.cart_item')
    }
    
    clickContinueShopping(){
        this.elements.continueShoppingButton.click();
    }

    clickCheckout(){
        this.elements.checkoutButton().click();
    }

    removeAllFromCart() {
        cy.get(this.removeFromCartButtons).then(removeButtons => {
            while (removeButtons.length > 0) {
                cy.get(this.removeButtonSelector).click();
                cy.get(this.removeButtonSelector).then(updatedButtons => {
                    removeButtons = updatedButtons;
                });
            }
        });
    }

    verifyPageTitle(){
        commonPag.getPageTitle().should('be.visible').and('have.text', 'Your Cart');
    }

    getSumPrice() {
        let total = 0.0;
        this.elements.itemPrices().each($price => {
            total += parseFloat($price.text().replace('$', ''));
        });
        return total;
    }

    verifyItemIsInCartByName(productName) {
        let found = false;
        this.elements.cartItems().each(($item) => {
            cy.wrap($item).find('.inventory_item_name').invoke('text').then((itemName) => {
                if (itemName.trim() === productName) {
                    found = true;
                }
            });
        }).then(() => {
            expect(found).to.be.true;
        });
    }

    verifyNoItemsInCart(){
        cy.get('.cart_list').should('not.contain', '.cart_item');
    }

}
export default new cartPage();