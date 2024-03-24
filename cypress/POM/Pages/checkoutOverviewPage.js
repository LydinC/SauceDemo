import commonPage from '../Pages/commonPage';

class checkoutOverviewPage{
    
    elements ={

        cancelButton: ()  => cy.get('[data-test="cancel"]'),
        finishButton: ()  => cy.get('[data-test="finish"]'),
        subtotalLabel: ()  => cy.get('.summary_subtotal_label'),
        taxLabel: ()  => cy.get('.summary_tax_label'),
        totalLabel: ()  => cy.get('.summary_total_label')
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

    verifySubTotal(expectedAmount){
        this.elements.subtotalLabel().should('be.visible').and('have.text', expectedAmount);
    }

    verifyTaxAmount(){
        //TODO:getSubTotalAmount and Calculate Tax
    }

    verifySubTotal(){
        //TODO: Add Sub Total and Tax amounts
    }


}

export default new checkoutOverviewPage();
