class loginPage{
    
    elements ={
        loginLogo: () => cy.get('.login_logo'),
        username : () => cy.get('[data-test="username"]'),
        password : () => cy.get('[data-test="password"]'),
        loginButton : () => cy.get('[data-test="login-button"]'),
        errorPrompt : () => cy.get('[data-test="error"]')
    }

    login(username, password){
        this.elements.username().clear();
        this.elements.password().clear();
        
        if(username){
            this.elements.username().type(username);
        }
        if(password){
            this.elements.password().clear().type(password);
        }
        this.elements.loginButton().click();
    }

    verifyAlertMessage(expectedMessage){
        this.elements.errorPrompt().should('be.visible').and('have.text', expectedMessage);
    }

    verifyUserIsOnLoginPage(){
        this.elements.loginButton().should('be.visible');
    }

}

export default new loginPage();