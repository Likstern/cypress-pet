export class MobilePhoneReplenishment {

    constructor() {
        this.ammontLabel = '[data-qa-node="amount"]';
        this.cardNumberLabel = '[data-qa-node="card"]';
    }

    typePhoneNumber(phoneNumber) {
        cy.get('[data-qa-node="phone-number"]').type(phoneNumber);
    }

    typeAmount(amount) {
        cy.get(this.ammontLabel).type(amount);
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
        cy.get('[data-qa-node="submit"]').click();
    }

    // TODO: добавить перевод в маску в методе.
    checkBankCardNumber(maskedCardNumber) {
        cy.get(this.cardNumberLabel).should('have.text', maskedCardNumber);
    }

    checkBankCardAmount(amount) {
        cy.get(this.cardNumberLabel).get(this.ammontLabel).should('have.text', amount);
    }

    checkBankCardCurrency(currency) {
        cy.get('small[data-qa-node="currency"]')
            .should('contain.text', currency)
    }

    checkCommission(commisionValue) {
        cy.get('span[data-qa-node="commission"]')
            .should('have.text', commisionValue)
    }

    checkCommissionCurrency(commisionCurrency) {
        cy.get('span[data-qa-node="commission"] ~ small')
            .should('contain.text', commisionCurrency)
    }
}

export const mobileReplenishmen = new MobilePhoneReplenishment()