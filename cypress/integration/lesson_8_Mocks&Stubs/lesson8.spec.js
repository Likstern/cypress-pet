/// <reference types="Cypress" />

import {mobileReplenishment} from "../../support/pages/mobileReplenishment"
import {transfers} from "../../support/pages/transfers"

it('Replenishment of Ukraine mobile phone number', (amount = 1, currency = 'UAH') => {
    cy.visit(Cypress.config().baseUrl + '/mobile?lang=en');
    mobileReplenishment.typePhoneNumber(686979712);
    mobileReplenishment.typeAmount(amount);
    mobileReplenishment.typeBankCardData('4552331448138217', '0524', '111');
    cy.wait(1_000)
    mobileReplenishment.submitPayment();
    mobileReplenishment.checkBankCardNumber('4552 **** **** 8217');
    mobileReplenishment.checkBankCardAmount(amount);
    mobileReplenishment.checkBankCardCurrency(currency);
    mobileReplenishment.checkCommission(2);
    mobileReplenishment.checkCommissionCurrency(currency);
})

it.skip('Money transfer between foreign cards', (amount = 300, comment = 'Cypress test') => {
    cy.visit(Cypress.config().baseUrl + '/money-transfer/card?lang=en');
    transfers.typeBankCardData('4552331448138217', '0524', '111');
    transfers.typeSenderCardUserData('Shayne', 'McConnel');
    transfers.typeReceiverCard('5309233034765085');
    transfers.typeReceiverCardUserData('Mike', 'Patton');
    transfers.typeAmount(amount);
    transfers.typeComment(comment);
    transfers.submitPayment();
    cy.wait(2_000);
    transfers.checkCards('* 8217', '* 5085');
    transfers.checkSendAndTotalAmount(amount, '389.57');
    transfers.checkCommission('89.57 UAH');
    transfers.checkTotalCurrency('UAH');
    transfers.checkComment(comment);
})