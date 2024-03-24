import commonPage from '../Pages/commonPage';

class inventoryPage{
    
    elements ={
        loginLogo: () => cy.get('.login_logo'),
        filter : () => cy.get('[data-test="product_sort_container"]'),


        addToCart: (productName) => cy.get(`[data-test="add-to-cart-${productName}"]`),
        removeFromCart: (productName) => cy.get(`[data-test="remove-${productName}"]`),

        addToCart_backpack : () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        addToCart_bikelight : () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
        removeFromCart_backpack : () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
        addToCart_bikelight : () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),

        inventoryList : () => cy.get('.inventory_list'),
    }


    verifyUserIsOnInventoryPage(){
        commonPage.getPageTitle().should('be.visible').and('have.text', 'Products');
    }


    captureInventoryItemsDetails() {
        const itemsDetails = [];

        cy.get('.inventory_item').each(($item) => {
            cy.wrap($item).find('.inventory_item_img img').then(($img) => {
                const imgSrc = $img.attr('src');
                const description = $item.find('.inventory_item_desc').text().trim();
                const name = $item.find('.inventory_item_name').text().trim();
                const price = $item.find('.inventory_item_price').text().trim();

                itemsDetails.push({ imgSrc, description, name, price });
            });
        }).then(() => {
            // Log or return the itemsDetails array
            //cy.log('Inventory Items Details: ${itemsDetails}');
            // Or return itemsDetails if needed
            return itemsDetails;
        });
    }

    addSLBackPackToCart(){
        this.elements.addToCart_backpack().click();
    }

    addSLBikeLightToCart(){
        this.elements.addToCart_bikelight().click();
    }


    removeSLBackPackFromCart(){
        this.elements.removeFromCart_backpack().click();
    }




}

export default new inventoryPage();