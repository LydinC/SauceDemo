import loginPage from '../POM/Pages/loginPage';
import commonPage from '../POM/Pages/commonPage';
import inventoryPage from '../POM/Pages/inventoryPage';
import cartPage from '../POM/Pages/cartPage';
import checkoutInfoPage from '../POM/Pages/checkoutInfoPage';
import checkoutOverviewPage from '../POM/Pages/checkoutOverviewPage';
import checkoutCompletePage from '../POM/Pages/checkoutCompletePage';


describe('Verify Common Logged In Functionality', () => {

    before(() => {
    })

    beforeEach(() => {
      cy.visit('');
      loginPage.login("standard_user", "secret_sauce");
      commonPage.verifyUserIsLoggedIn();
      //commonPage.navigateTo('all_items');
    })
  
    afterEach(() => {
    })

    // it('Verify all expected menu options are available', () => { 
    //     commonPage.openMenu();
    //     commonPage.elements.allItemsLink().should('be.visible');
    //     commonPage.elements.aboutLink().should('be.visible');
    //     commonPage.elements.logoutLink().should('be.visible');
    //     commonPage.elements.resetAppLink().should('be.visible');
    //     commonPage.closeMenu();
    // })
    // it('Verify Twitter link is correctly set up', () => {
    //   commonPage.getTwitterHRef().should('eq',"https://twitter.com/saucelabs");
    // })
    // it('Verify Facebook link is correctly set up', () => {
    //   commonPage.getFacebookHRef().should('eq',"https://www.facebook.com/saucelabs");
    // })
    // it('Verify LinkedIn link is correctly set up', () => {
    //   commonPage.getLinkedInHRef().should('eq',"https://www.linkedin.com/company/sauce-labs/");
    // })

    it('Verify Add Product to Cart', () => {
      inventoryPage.addSLBackPackToCart();
      commonPage.clickCart();
      commonPage.verifyCardBadgeNumber(1);
      cartPage.verifyItemIsInCartByName('Sauce Labs Backpack');
    });

    it('Verify Remove Product From Cart', () => {
      inventoryPage.addSLBackPackToCart();
      commonPage.clickCart();
      inventoryPage.removeSLBackPackFromCart();
      cartPage.verifyNoItemsInCart();
    });


    
    it('Verify user can successfully order with multiple products', () => {
      inventoryPage.addSLBackPackToCart();
      inventoryPage.addSLBikeLightToCart();
      commonPage.verifyCardBadgeNumber(2);
      commonPage.clickCart();
      cartPage.verifyItemIsInCartByName('Sauce Labs Backpack');
      cartPage.verifyItemIsInCartByName('Sauce Labs Bike Light');
      cartPage.clickCheckout();
      checkoutInfoPage.inputDetails("Name", "Surname", "ZipCode");
      checkoutInfoPage.clickContinue();
      checkoutOverviewPage.clickFinish();
      checkoutCompletePage.verifyOrderSuccessfull();
    });




    it('Verify Product Details', () => {
       
       const productsFixture = require('../fixtures/products.json');
       const productOnWebsite = inventoryPage.captureInventoryItemsDetails();

       // Iterate over each product and compare with fixture data
       productOnWebsite.forEach((product, index) => {
           const productFromFixture = productsFixture[index];

           expect(product.name).to.equal(productFromFixture.name);
           expect(product.description).to.equal(productFromFixture.description);
           expect(product.price).to.equal(productFromFixture.price);
           expect(product.image).to.equal(productFromFixture.image);
       });
   });
})


