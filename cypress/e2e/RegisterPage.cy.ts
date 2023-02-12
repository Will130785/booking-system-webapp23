/// <reference types="cypress" />

describe('Register Page tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register')
  })

  it('Checks the page renders with correct elements', () => {
    cy.get('h2').contains('Register User')
    cy.get('#username')
    cy.get('#password')
    cy.get('#confirmPassword')
    cy.get('button').contains('Register')
  })
})