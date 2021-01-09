/// <reference types="Cypress" />

/* Cypress Assertions → библиотеки Chai, Sinon, jQuery.

По дефолту используется Expect Cypress и Chai (BDD подход к assertions)

Неявные проверки (should и and) → когда проверка применяется к объекту предоставленному род.связанной командой (cy.get().should('have.value', 100)). Исп. когда хотим
несколько проверок по одному и тому же элементу, или когда хотим изменить свойства объекта прежде чем хотим проверить их.

К неявным можно отнести скрытые првоерки в cy.visit(),cy.contains(),cy.get() и т.д 

Явные проверки (expect) - мы точно говорим с каким элементом мы сейчас взаимодействуем.
*/

context('Mobile', () => {
  before('Подготовка тестовых предусловий', () => {
    cy.visit(Cypress.config().baseUrl + '/mobile?lang=en');
  })

  it('Пример с should', () => {
    cy.get('[data-qa-node="amount"]').type(100).should('have.value', 100).and('be.visible');
  })

  it('Пример с expect', () => {
    cy.get('[data-qa-node="amount"]').type(100).then(input => {
      expect(input).to.have.value(100);
    })
  })

  afterEach('Очистка поля', () => {
    cy.get('[data-qa-node="amount"]').clear();
  })
})

context('Deposit', () => {
  before('Подготовка тестовых предусловий', () => {
    cy.visit(Cypress.config().baseUrl + '/deposit/open?lang=en');
  })

  it('Пример с should (проверка CSS параметра)', () => {
    const currencyInput = cy.get('[data-qa-value="UAH"]');
    currencyInput.should('be.checked');
  })

  it('Проверка с использованеим тригеров', () => {
    cy.contains('Мої депозити').trigger('mouseover')
      .get('a#archiveDeposits')
      .should('be.visible');;
  })
})

context('Main', () => {
  before('Подготовка тестовых предусловий', () => {
    cy.visit(Cypress.config().baseUrl + '?lang=en');
  })

  it.only('Проверка корректности URL', () => {
    cy.url().should('eq', Cypress.config().baseUrl + '/?lang=en')
  })

  it('Проверка атрибута элемента', () => {
    cy.contains('Show cards')
      .should('have.attr', 'type')
      .and('match', /button/)
  })
})
