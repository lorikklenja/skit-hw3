import { LoginMethods } from "cypress/pageObjects/login/login.methods";
import { AddAndDeleteProductMethods } from "cypress/pageObjects/addAndDeleteProduct/addAndDeleteProduct.methods";

describe('template spec', () => {
  var login = new LoginMethods();
  var products = new AddAndDeleteProductMethods();

  beforeEach(function () {
    login.navigateToLoginAndCloseDialog('http://localhost:3000/login#/login');
    login.login('test1@test.com', 'test1');
    login.verifySuccessfullLogin();
  })

  it('User should be able to add item into basket and delete item from basket', () => {
    products.addItemToBasket();
    products.verifyItemAddedToBasket("1");
    products.openShoppingBasket();
    products.deleteItemFromBasket();
    products.verifyItemDeletedToBasket("0");
  })
})