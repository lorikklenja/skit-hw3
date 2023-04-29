import { LoginMethods } from "cypress/pageObjects/login/login.methods";
import { outOfStockMethods } from "cypress/pageObjects/outOfStockProduct/outOfStock.methods";

describe('template spec', () => {
  var login = new LoginMethods();
  var products = new outOfStockMethods();

  beforeEach(function () {
    login.navigateToLoginAndCloseDialog('http://localhost:3000/login#/login');
    login.login('test1@test.com', 'test1');
    login.verifySuccessfullLogin();
  })

  it('User should be able to add product who is out of stock into basket', () => {
    products.addItemToBasket('King of the hill');
    products.verifyItemOutOfStock('0');
  })
})