/// <reference types="cypress" />

describe ('App page test tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it ('Should display correct text', () => {
    cy.get('p').contains('This will be the login page')
  })
})