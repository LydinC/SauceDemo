class loginPage{
    
    elements ={
        loginLogo: () => cy.get('.login_logo'),
        username : () => cy.get('[data-test="username"]'),
        password : () => cy.get('[data-test="password"]'),
        loginButton : () => cy.get('[data-test="login-button"]'),
        errorPrompt : () => cy.get('[data-test="error"]')
    }

    login(username, password){    
        if(username){
            //adding click and wait due to a phishing scanning plugin enforced on browser's available on dev machine
            this.elements.username().click().wait(3000).type(username);
        }
        if(password){
            this.elements.password().type(password);
        }
        this.elements.loginButton().click();
    }

    verifyAlertMessage(expectedMessage){
        this.elements.errorPrompt().should('be.visible').and('have.text', expectedMessage);
    }

}

export default new loginPage();