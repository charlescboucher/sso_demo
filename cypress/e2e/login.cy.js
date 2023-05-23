describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })

  it('greets with Sign on form', () => {
    cy.contains('h1','Sign in to your account')
  })
  
  it('requires username', () => {
    cy.get('form').contains('Sign In').click()
    cy.get('#input-error').should('contain','Invalid username or password.')
  })

  it('requires password', () => {
    cy.get('[id=username]').type('user1')
    cy.get('form').contains('Sign In').click()
    cy.get('#input-error').should('contain','Invalid username or password.')
  })

  it('requires valid username and password', () => {
    cy.get('[id=username]').type('user1')
    cy.get('[id=password]').type('invalidpassword')
    cy.get('form').contains('Sign In').click()
    cy.get('#input-error').should('contain','Invalid username or password.')

  })

  it('navigates to localhost 300 on sucessful login', () => {
    cy.get('[id=username]').type('user1')
    cy.get('[id=password]').type('Realworld21!')
    cy.get('form').contains('Sign In').click()
    cy.hash().should('eq','')
  })

})