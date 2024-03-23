class commonPage{
    
    elements ={
        burgerMenuIcon: () => cy.get('#react-burger-menu-btn'),
        burgerMenuCloseIcon: () => cy.get('#react-burger-cross-btn'),
        allItemsLink: () => cy.get('#inventory_sidebar_link'),
        aboutLink: () => cy.get('#about_sidebar_link'),
        logoutLink: () => cy.get('#logout_sidebar_link'),
        resetAppLink: () => cy.get('#reset_sidebar_link'),


        title: () => cy.get('.title'),
        appLogo: () => cy.get('.app_logo'),
        
        cartLink: () => cy.get('#shopping_cart_link'),
        twitterLogo: () => cy.get('social_twitter'),
        facebookLogo : () => cy.get('social_facebook'),
        linkedInLogo : () => cy.get('social_linkedin'),
        footerText : () => cy.get('footer_copy'),
    }
    
    
    openMenu(){
        this.elements.burgerMenuIcon().click();
    }

    //TODO: implement with ENUMS to ensure options
    selectMenuOption(option){
            switch (option) {
                case 'all_items':
                    this.elements.allItemsLink().click();
                    break;
                case 'about':
                    this.elements.aboutLink().click();
                    break;
                case 'logout':
                    this.elements.logoutLink().click();
                    break;
                case 'reset_app':
                    this.elements.resetAppLink().click();
                    break;
                default:
                    throw new Error('Menu option provided does not match any of the expected options');
            }
    }

    closeMenu(){
        this.elements.burgerMenuIcon().click();
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

}

// const MENU_OPTIONS = {
//     ALL_ITEMS: 'all_items',
//     ABOUT: 'about',
//     LOGOUT: 'logout',
//     RESET_APP: 'reset_app'
// };


export default new commonPage();