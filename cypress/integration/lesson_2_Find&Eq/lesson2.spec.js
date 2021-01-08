/// <reference types="Cypress" />

const CYPRESS_URL = 'https://docs.cypress.io/api/commands/get.html#Syntax';

/* eq - поиск элемента по индексу
/  find - поиск элемента по вложенности дочернего элемета
*/ 
it('Используем Get,Find и Eq', () => {
    cy.visit(Cypress.config().baseUrl + '/deposit/open');
    cy.get('tbody').find('td').find('div').find('button').eq(0);
})

it.only('Используем Get,Find и Eq', () => {
    cy.visit(CYPRESS_URL);
    cy.get('aside').find('div').find('ol').find('li').find('a').eq(0);
})