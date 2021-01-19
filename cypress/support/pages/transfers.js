import {BasePage} from "./basePage";

export class Transfers extends BasePage {

    typeSenderCardUserData(firstName, lastName) {
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(firstName)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(lastName)
    }

    typeReceiverCard(cardNumber) {
        cy.get('[data-qa-node="numberreceiver"]').type(cardNumber);
    }

    typeReceiverCardUserData(firstName, lastName) {
        cy.get('[data-qa-node="firstNamereceiver"]')
            .type(firstName)
            .get('[data-qa-node="lastNamereceiver"]')
            .type(lastName)
    }

    typeComment(comment) {
        cy.get('[data-qa-node="toggle-comment"]')
            .click()
            .get('[data-qa-node="comment"]')
            .type(comment)
    }

    checkCards(senderCardMask, receiverCardMask) {
        cy.get('[data-qa-node="payer-card"]').should('have.text', senderCardMask);
        cy.get('[data-qa-node="receiver-card"]').should('have.text', receiverCardMask)
    }

    checkSendAndTotalAmount(sendAmount, totalAmount) {
        cy.get('[data-qa-node="payer-amount"]')
            .should('have.text', sendAmount + ' UAH')
            .get('[data-qa-node="total"]')
            .find('span')
            .should('contain.text', totalAmount);
    }

    checkCommission(commission) {
        cy.get('[data-qa-node="payer-currency"]').should('have.text', commission);
    }

    checkTotalCurrency(currency) {
        cy.get('[data-qa-node="total"]')
            .find('small')
            .should('contain.text', currency)
    }

    checkComment(comment) {
        cy.get('[data-qa-node="comment"]')
            .should('have.text', comment)
    }
}

export const transfers = new Transfers();