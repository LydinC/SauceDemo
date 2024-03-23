class inventoryPage{
    
    elements ={
        loginLogo: () => cy.get('.login_logo'),
        username : () => cy.get('#user-name'),
        password : () => cy.get('#password'),
        loginButton : () => cy.get('#login-button'),
        errorPrompt : () => cy.get('[data-test="error"]')
    }

}

export default new inventoryPage();