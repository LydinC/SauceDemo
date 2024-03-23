class loginPage{
    
    elements ={
        loginLogo: () => cy.get('.login_logo'),
        username : () => cy.get('#user-name'),
        password : () => cy.get('#password'),
        loginButton : () => cy.get('#login-button'),
        errorPrompt : () => cy.get('[data-test="error"]')
    }

    login(username, password){    
        if(username){
            this.elements.username().click().wait(3000).type(username);
        }
        if(password){
            this.elements.password().click().wait(3000).type(password);
        }
        this.elements.loginButton().click();
    }


}

export default new loginPage();