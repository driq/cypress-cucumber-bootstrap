/* global given */
const url = 'https://google.com/?hl=en'

given('I open the Google homepage', () => {
  cy.visit(url)
})