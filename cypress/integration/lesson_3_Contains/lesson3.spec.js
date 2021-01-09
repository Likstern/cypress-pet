/// <reference types="Cypress" />

/*
contains - проверят содержет ли внутри себя искомый селектор передаваемый текст. 
Принцип поиска по первому совпадающему элементу (приме в списке <li> ищем пункт apples).

Особенность если contains вызывается у элемента вложенного в <input>,<button>,<a> или <label>, то он непосредственно находит родительский элемент.

Прим. в <button><span>4</span></button> cy.contains(4) найдет <button>
*/

before('', () => {
    cy.visit(Cypress.config().baseUrl + '/mobile?lang=en');
})

it('', () => {
    cy.contains('Sign in')
})

it('С указанием нужного тега', () => {
    cy.contains('div', 'Sign in')
})

it('Case insensetive', () => {
    cy.contains("SIGN IN", { matchCase: false })
})

it('Связка с другими тегами', () => {
    cy.get('footer').contains('Go to old version') // будет найден <button> т.к он выше по приоритету чем <a>
})