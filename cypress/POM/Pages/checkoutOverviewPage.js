import commonPage from '../Pages/commonPage';

class checkoutOverviewPage{
    
    elements ={

        cancelButton: ()  => cy.get('[data-test="cancel"]'),
        finishButton: ()  => cy.get('[data-test="finish"]'),
    }

    verifyPageTitle(){
        commonPage.getPageTitle().should('be.visible').and('have.text', 'Checkout: Overview');
    }

    clickCancel(){
        this.elements.cancelButton().click();
    }

    clickFinish(){
        this.elements.finishButton().click();
    }
}

export default new checkoutOverviewPage();
