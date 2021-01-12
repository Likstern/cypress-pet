/// <reference types="Cypress" />


it('Replenishment of Ukraine mobile phone number', () => {
  cy.visit(Cypress.config().baseUrl + '/mobile?lang=en');
  cy.get('[data-qa-node="phone-number"]')
    .type(686979712)
    .get('[data-qa-node="amount"]')
    .type('1')
    .get('[data-qa-node="numberdebitSource"]')
    .type('4552331448138217')
    .get('[data-qa-node="expiredebitSource"]')
    .type('0524')
    .get('[data-qa-node="cvvdebitSource"]')
    .type('111')
    .get('[data-qa-node="submit"]')
    .wait(1000)
    .click()
    .get('[data-qa-node="card"]')
    .should('have.text', '4552 **** **** 8217')
    .get('[data-qa-node="amount"]')
    .should('have.text', '1')
    .get('small[data-qa-node="currency"]')
    .should('contain.text', 'UAH')
    .get('span[data-qa-node="commission"]')
    .should('have.text', '2')
    .get('span[data-qa-node="commission"] ~ small')
    .should('contain.text', 'UAH')
})

it.only('Money transfer between foreign cards', () => {
  const sum = 300;
  const comment = 'Cypress test';
  cy.visit(Cypress.config().baseUrl + '/money-transfer/card?lang=en');
  cy.get('[data-qa-node="numberdebitSource"]')
    .type('4552331448138217')
    .get('[data-qa-node="expiredebitSource"]')
    .type('0524')
    .get('[data-qa-node="cvvdebitSource"]')
    .type('111')
    .get('[data-qa-node="firstNamedebitSource"]')
    .type('Shayne')
    .get('[data-qa-node="lastNamedebitSource"]')
    .type('McConnel')
    .get('[data-qa-node="numberreceiver"]')
    .type('5309233034765085')
    .get('[data-qa-node="firstNamereceiver"]')
    .type('Ivan')
    .get('[data-qa-node="lastNamereceiver"]')
    .type('Moody')
    .get('[data-qa-node="amount"]')
    .type(sum)
    .get('[data-qa-node="toggle-comment"]')
    .click()
    .get('[data-qa-node="comment"]')
    .type(comment)
    .get('[type="submit"]')
    .click()
    .wait(2_000)
    .get('[data-qa-node="payer-card"]')
    .should('have.text', '* 8217')
    .get('[data-qa-node="receiver-card"]')
    .should('have.text', '* 5085')
    .get('[data-qa-node="payer-amount"]')
    .should('have.text', sum + ' UAH')
    .get('[data-qa-node="payer-currency"]')
    .should('have.text', '89.33 UAH')
    .get('[data-qa-node="total"]')
    .find('span')
    .should('contain.text', '389.33')
    .get('[data-qa-node="total"]')
    .find('small')
    .should('contain.text', 'UAH')
    .get('[data-qa-node="comment"]')
    .should('have.text', comment)
})