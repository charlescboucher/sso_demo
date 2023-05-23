describe('template spec', () => {
  beforeEach(()=>{
    cy.login()
    cy.visit('http://localhost:3000/contact')
  })
  
  it('should have Contact on page', () => {
    cy.contains('h2','Contact')
  })

})