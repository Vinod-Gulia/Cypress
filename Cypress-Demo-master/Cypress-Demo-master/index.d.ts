/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        /**
        * Get the body of a frame
        * @example
        * cy.get('frameSelector').iframe()
        * cy.get('frameSelector').iframe().find('selector')
        */
        iframe(): Chainable<Subject>
    }
}