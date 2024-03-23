import commonPage from '../Pages/commonPage';

class inventoryItemPage{
    
    elements ={
        backToProductsButton: () => cy.get('[data-test="back-to-products"]'),
    }


    verifyUserIsOnInventoryItemPage(){
        commonPage.backToProductsButton().should('be.visible').and('have.text', 'Back to products');
    }

}

export default new inventoryItemPage();

