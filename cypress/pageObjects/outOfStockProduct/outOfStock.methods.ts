import { outOfStockElements } from "./outOfStock.elements";

export class outOfStockMethods{
    addItemToBasket(item: string){
        outOfStockElements.ElementsProduct.getBtnSearch().click();
        outOfStockElements.ElementsProduct.getTxtSearch().type(item);
        outOfStockElements.ElementsProduct.getTxtSearch().type('{enter}');
        outOfStockElements.ElementsProduct.getBtnAddToBasket().click();
    }
    verifyItemOutOfStock(numAdded: string){
        outOfStockElements.ElementsProduct.getLblNotification().should('have.text', numAdded)
    }
}