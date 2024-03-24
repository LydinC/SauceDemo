import commonPage from '../Pages/commonPage';

class checkoutInfoPage{
    
    elements ={
        firstName: () => cy.get('[data-test="firstName"]'),
        lastName: () => cy.get('[data-test="lastName"]'),
        postalCode: () => cy.get('[data-test="postalCode"]'),
        cancelButton: ()  => cy.get('[data-test="cancel"]'),
        continueButton: ()  => cy.get('[data-test="continue"]'),
        errorMessage:()  => cy.get('[data-test="error"]'),
    }

    inputDetails(firstName, lastName, postalCode){    
        if(firstName){
            this.elements.firstName().type(firstName);
        }
        if(lastName){
            this.elements.lastName().type(lastName);
        }
        if(postalCode){
            this.elements.postalCode().type(postalCode);
        }
    }

    clickCancel(){
        this.elements.cancelButton().click();
    }

    clickContinue(){
        this.elements.continueButton().click();
    }

    verifyPageTitle(){
        commonPage.getPageTitle().should('be.visible').and('have.text', 'Checkout: Your Information');
    }

    verifyErrorMessage(expectedMessage){
        this.elements.errorMessage().should('be.visible').and('have.text', expectedMessage);
    }
}

export default new checkoutInfoPage();