import { AddAndDeleteProductElements } from "./addAndDeleteProduct.elements";

export class AddAndDeleteProductMethods{
    addItemToBasket(){
        AddAndDeleteProductElements.ElementsProduct.getBtnAddToBasket().eq(10).click();
    }
    verifyItemAddedToBasket(numAdded: string){
        AddAndDeleteProductElements.ElementsProduct.getLblNotification().should('have.text', numAdded)
    }
    openShoppingBasket(){
        AddAndDeleteProductElements.ElementsProduct.getBtnBasket().click();
    }
   deleteItemFromBasket(){
    AddAndDeleteProductElements.ElementsProduct.getBtnDeleteFromBasket().click();
   }
   verifyItemDeletedToBasket(numDeleted: string) {
    AddAndDeleteProductElements.ElementsProduct.getLblNotification().should('have.text', numDeleted);
    }
}