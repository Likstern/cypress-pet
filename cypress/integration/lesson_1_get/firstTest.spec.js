// describe("Mobile phone replenisment", () => {

//     context("Replenismnet less than the allowed amount", () => {
//         it("Show error: Minimum amount of the replenisment 1 UAH", () => {});
//     });
// });

const CYPRESS_URL = 'https://docs.cypress.io/api/commands/get.html#Syntax';
const FACEBOOK_URL = 'https://facebook.com/';

it('By ID', () => {
    cy.visit(FACEBOOK_URL);
    cy.get('#email');
})

it('By Class', () => {
    cy.visit(CYPRESS_URL);
    cy.get('.ds-input');
})

it('By Tag', () => {
    cy.visit(CYPRESS_URL);
    cy.get('nav');
})

it('By Tag Value', () => {
    cy.visit(FACEBOOK_URL);
    cy.get('[name="pass"]');
    cy.get('[data-testid="open-registration-form-button"][role="button"]');
})

it.only('By Contains Name', () => {
    cy.visit(Cypress.config().baseUrl);
    cy.get('*[class^="card"]');
})