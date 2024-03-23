class commonPage{
    
    elements ={
        burgerMenuIcon: () => cy.get('#react-burger-menu-btn'),
        burgerMenuCloseIcon: () => cy.get('#react-burger-cross-btn'),
        allItemsLink: () => cy.get('#inventory_sidebar_link'),
        aboutLink: () => cy.get('#about_sidebar_link'),
        logoutLink: () => cy.get('#logout_sidebar_link'),
        resetAppLink: () => cy.get('#reset_sidebar_link'),

        pageTitle: () => cy.get('.title'),
        appLogo: () => cy.get('.app_logo'),
        
        cartLink: () => cy.get('.shopping_cart_link'),
        twitterLogo: () => cy.get('.social_twitter'),
        facebookLogo : () => cy.get('.social_facebook'),
        linkedInLogo : () => cy.get('.social_linkedin'),
        footerText : () => cy.get('.footer_copy'),
    }
    
    
    openMenu(){
        this.elements.burgerMenuIcon().click();
    }

    //TODO: implement with ENUMS to ensure options
    selectMenuOption(option){
            switch (option) {
                case 'all_items':
                    this.elements.allItemsLink().click({force: true});
                    break;
                case 'about':
                    this.elements.aboutLink().click({force: true});
                    break;
                case 'logout':
                    this.elements.logoutLink().click({force: true});
                    break;
                case 'reset_app':
                    this.elements.resetAppLink().click({force: true});
                    break;
                default:
                    throw new Error('Menu option provided does not match any of the expected options');
            }
    }

    closeMenu(){
        this.elements.burgerMenuCloseIcon().click();
    }

    clickTwitter(){ 
        this.elements.twitterLogo().click();
    }

    clickFacebook(){ 
        this.elements.facebookLogo().click();
    }

    clickLinkedIn(){ 
        this.elements.linkedInLogo().click();
    }

    clickCart(){
        this.elements.clickCart().click();
    }

    getPageTitle(){
        this.elements.pageTitle();
    }

    verifyUserIsLoggedIn(){
        //Cart icon is visible on all pages following log in
        this.elements.cartLink().should('be.visible');
    }

    navigateTo(option){
        this.openMenu();
        this.selectMenuOption(option)
        this.closeMenu();
    }
    resetAppState(){
        this.openMenu();
        this.selectMenuOption('reset_app');
        this.closeMenu();
    }
}

/*const MENU_OPTIONS = {
     ALL_ITEMS: 'all_items',
     ABOUT: 'about',
     LOGOUT: 'logout',
     RESET_APP: 'reset_app'
 }; */


export default new commonPage();