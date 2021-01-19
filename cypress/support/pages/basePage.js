export class BasePage {

    constructor() {
        this.amountLabel = '[data-qa-node="amount"]';
    }

    typeAmount(amount) {
        cy.get(this.amountLabel).type(amount);
    }

    typeBankCardData(cardNumber, expDate, cvv) {
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(cardNumber)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv);
    }

    submitPayment() {
        cy.get('[type="submit"]').click();
    }
}