import {BasePage} from "./basePage";

export class MobilePhoneReplenishment extends BasePage{

    constructor() {
        super();
        this.cardNumberLabel = '[data-qa-node="card"]';
    }

    typePhoneNumber(phoneNumber) {
        cy.get('[data-qa-node="phone-number"]').type(phoneNumber);
    }

    // TODO: добавить перевод в маску в методе.
    checkBankCardNumber(maskedCardNumber) {
        cy.get(this.cardNumberLabel).should('have.text', maskedCardNumber);
    }

    checkBankCardAmount(amount) {
        cy.get(this.cardNumberLabel).get(this.amountLabel).should('have.text', amount);
    }

    checkBankCardCurrency(currency) {
        cy.get('small[data-qa-node="currency"]')
            .should('contain.text', currency)
    }

    checkCommission(commissionValue) {
        cy.get('span[data-qa-node="commission"]')
            .should('have.text', commissionValue)
    }

    checkCommissionCurrency(commissionCurrency) {
        cy.get('span[data-qa-node="commission"] ~ small')
            .should('contain.text', commissionCurrency)
    }
}

export const mobileReplenishment = new MobilePhoneReplenishment()