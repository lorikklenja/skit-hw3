export class AddAndDeleteProductElements{
    static get ElementsProduct(){
        return {
            getBtnBasket: () =>  cy.get('[aria-label="Show the shopping cart"]'),
            getBtnAddToBasket: () => cy.get('[aria-label="Add to Basket"]'),
            getBtnDeleteFromBasket: () => cy.get('.fa-trash-alt'),
            getLblNotification: () => cy.get('.fa-3x.warn-notification'),
        }
    }
}