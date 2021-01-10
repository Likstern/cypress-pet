/// <reference types="Cypress" />

context('Методы сypress', () => {

  beforeEach('', () => {
    cy.visit(Cypress.config().baseUrl + '/mobile?lang=en')
  })

  it('type()', () => {
    cy.get('[data-qa-node="phone-number"]')
    .type(99911);
  })
    

  it('focus()', () => {
    cy.get('[data-qa-node="amount"]')
      .focus();
  })

  // подсвечивает поле с валидационной ошибкой
  it('blur()', () => {
    cy.get('[data-qa-node="amount"]')
      .focus()
      .blur();
  })

  it('clear()', () => {
    cy.get('[data-qa-node="phone-number"]')
    .type(999)
    .wait(2_000)
    .clear();
  })

  it('submit()', () => {
    cy.get('form[method="post"]')
    .submit();
  })

  it('click()', () => {
    cy.get('[data-qa-value="manual"]')
    .click();
  })

  it('scrollIntoView()', () => {
    cy.get('[data-qa-node="lang"]').scrollIntoView();
  })

  it('scrollTo()', () => {
    cy.wait(1_000)
    cy.scrollTo(0, 500);
  })
})

context('Методы сypress', () => {

  beforeEach('', () => {
    cy.visit('https://example.cypress.io/commands/actions');
  })

  it('rightclick()', () => {
    cy.contains('Right click to edit').rightclick();
  })

  it('dblclick()()', () => {
    cy.contains('Double click to edit').dblclick();
  })

})

it('check()', () => {
  cy.visit('https://en-gb.facebook.com/r.php?locale=en_GB');
  cy.get('input[value=2]').check();
})

it('select()', () => {
  cy.visit('https://en-gb.facebook.com/r.php?locale=en_GB');
  cy.get('#month').select('Mar');
  cy.get('#day').select('25');
  cy.get('#year').select('1987');
})

it('uncheck()', () => {
  cy.visit('https://en.privatbank.ua/');
  cy.get('#switch-input').check({force: true})
    .uncheck({force: true}); // т.к элемент перекрыт другим элементом используем {force: true}
})

it.only('triger()', () => {
  cy.visit(Cypress.config().baseUrl + '/deposit/open?lang=en');
    cy.contains('Мої депозити').trigger('mouseover')
      .get('a#archiveDeposits')
      .should('be.visible');;
})