describe('Hello, pokeworld!', () => {
  it('should go to a pokemon page and back in mobile view!', () => {

    cy.visit('http://localhost:3000/')

    cy.get('[href="/pokemon/1"]').click()

    cy.location('pathname').should('eq', '/pokemon/1')

    cy.get('[href="/"]').click()

    cy.location('pathname').should('eq', '/')

  })

  it('Should go to a pokemon Page in desktop view and write a comment! ', () => {

    cy.viewport(1920, 1080)

    cy.get('[href="/pokemon/2"]').click()

    cy.get('input[id="Name"]').type("Cypress")

    cy.get('input[id="Email"]').type("Cypress@cypress.com")

    cy.get('textarea[id="Comment"]').type("Cypress is Testing. I love This pokémon!")

    cy.get('button').click()

    cy.on('window:alert', (text) => {
      expect(text).to.contains("Comment sent sucessfully")
    })

  })

  it('Should go to a pokemon Page at the end of the list and write another comment, and go back to the landing-page ', () => {

  cy.get('[href="/"]').click()

  cy.get('[href="/pokemon/805"]').click()

  cy.get('input[id="Name"]').type("Cypress")

  cy.get('input[id="Email"]').type("Cypress@cypress.com")

    cy.get('textarea[id="Comment"]').type("This is almost at the End of the Pokedex! ")

  cy.get('button').click()

  cy.on('window:alert', (text) => {
    expect(text).to.contains("Comment sent sucessfully")
  })

  cy.get('[href="/"]').click()

  })
})