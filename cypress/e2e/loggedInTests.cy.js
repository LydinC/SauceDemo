import loginPage from '../POM/Pages/loginPage';
import commonPage from '../POM/Pages/commonPage';
import inventoryPage from '../POM/Pages/inventoryPage';
import cartPage from '../POM/Pages/cartPage';
import checkoutInfoPage from '../POM/Pages/checkoutInfoPage';
import checkoutOverviewPage from '../POM/Pages/checkoutOverviewPage';
import checkoutCompletePage from '../POM/Pages/checkoutCompletePage';
import expectedProducts from '../fixtures/products.json'

describe('Verify Common Logged In Functionality', () => {

    let credentials;
    before( () => 
      cy.fixture("credentials").then((data)=> {
        credentials = data;
    }));

    beforeEach(() => {
      cy.visit('');
      loginPage.login(credentials.valid.username, credentials.valid.password);
      commonPage.verifyUserIsLoggedIn();
    })
  
    afterEach(() => {
    })

    it('Verify all products are displayed with correct details', () => {

      cy.get('.inventory_item').each(($product) => {
        const name = $product.find('.inventory_item_name').text().trim();
        const description = $product.find('.inventory_item_desc').text().trim();
        const price = $product.find('.inventory_item_price').text().trim();
        const image = $product.find('.inventory_item_img img').attr('src');
  
        const productItem = expectedProducts.find(product => product.name === name);
        
        expect(productItem).to.exist; //asserting name too
        expect(description).to.eq(productItem.description);
        expect(price).to.eq(productItem.price);
        expect(image).to.eq(productItem.image);
      });
    });

    it('Verify all expected menu options are available', () => { 
      commonPage.verifyMenuOptions();
    })
    it('Verify Twitter link is correctly set up', () => {
      commonPage.getTwitterHRef().should('eq',"https://twitter.com/saucelabs");
    })
    it('Verify Facebook link is correctly set up', () => {
      commonPage.getFacebookHRef().should('eq',"https://www.facebook.com/saucelabs");
    })
    it('Verify LinkedIn link is correctly set up', () => {
      commonPage.getLinkedInHRef().should('eq',"https://www.linkedin.com/company/sauce-labs/");
    })

    it('Verify user is able to log out', () => {
      commonPage.logout();
      loginPage.verifyUserIsOnLoginPage();
    });

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

    it('Verify user can successfully checkout multiple products', () => {
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
})


