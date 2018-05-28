/* global when */
when(`I fill field {string} with {string}`, (title, value) => {
    cy.get('input[title="'+title+'"]').type(value);
  });

  when(`I press enter`, () => {
    cy.focused().type('{enter}');
  });

  when(`I press button {string}`, (title) => {
    cy.get('input[value="'+title+'"][type="submit"]').click();
  });