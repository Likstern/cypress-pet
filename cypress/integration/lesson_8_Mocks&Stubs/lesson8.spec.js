/// <reference types="Cypress" />

import {mobileReplenishment} from "../../support/pages/mobileReplenishment"
import {archive} from "../../support/pages/archivePage";

beforeEach('Setup success response with Stub', () => {
    // перед выполнинем каждого теста мы устанавливаем отслеживание запроса, и подготавливаем и внедряем ответ
    cy.intercept(Cypress.config().baseUrl + '/api/p24/pub/confirm/check?', {fixture: 'confirmResponse/success.json'});
})

it.skip('Replenishment of Ukraine mobile phone number', (amount = 1, currency = 'UAH') => {
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
    mobileReplenishment.confirmPayment();
})

it.skip('Check success state of payment in archive | public session', () => {
    cy.intercept(Cypress.config().baseUrl + '/api/p24/pub/archive?', {fixture: 'archiveResponse/success.json'});
    cy.visit(`${Cypress.config().baseUrl}?lang=en`);
    archive.selectArchive()
})

it('Check error state of payment in archive | public session', () => {
    cy.intercept(Cypress.config().baseUrl + '/api/p24/pub/archive?', {fixture: 'archiveResponse/error.json'});
    cy.visit(`${Cypress.config().baseUrl}?lang=en`);
    archive.selectArchive()
})
