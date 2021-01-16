/// <reference types="Cypress" />

import {mobileReplenishmen} from "../../support/pages/mobileReplenishment"
import {transfers} from "../../support/pages/transfers"

it('Replenishment of Ukraine mobile phone number', (amount = 1, currency = 'UAH') => {
    cy.visit(Cypress.config().baseUrl + '/mobile?lang=en');
    mobileReplenishmen.typePhoneNumber(686979712);
    mobileReplenishmen.typeAmount(amount);
    mobileReplenishmen.typeBankCardData('4552331448138217', '0524', '111');
    cy.wait(1_000)
    mobileReplenishmen.submitPayment();
    mobileReplenishmen.checkBankCardNumber('4552 **** **** 8217');
    mobileReplenishmen.checkBankCardAmount(amount);
    mobileReplenishmen.checkBankCardCurrency(currency);
    mobileReplenishmen.checkCommission(2);
    mobileReplenishmen.checkCommissionCurrency(currency);
})

it.only('Money transfer between foreign cards', (amount = 300, comment = 'Cypress test') => {
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
    transfers.checkSendAndTotalAmount(amount, '389.33');
    transfers.checkCommission('89.33 UAH');
    transfers.checkTotalCurrency('UAH');
    transfers.checkComment(comment);
})