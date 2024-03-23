import commonPage from '../Pages/commonPage';

class inventoryPage{
    
    elements ={
        loginLogo: () => cy.get('.login_logo'),
        filter : () => cy.get('[data-test="product_sort_container"]')
    }


    verifyUserIsOnInventoryPage(){
        commonPage.getPageTitle().should('be.visible').and('have.text', 'Products');
    }

}

export default new inventoryPage();