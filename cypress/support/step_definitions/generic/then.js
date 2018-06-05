/* global then */
then(`the page title should contain {string}`, (title) => {
  cy.title().should('include', title)
})