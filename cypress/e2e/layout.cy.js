describe('template spec', () => {
  beforeEach(()=>{
    cy.login()
    cy.visit('http://localhost:3000')
  })
  
  it('greets with Your Settings', () => {
    cy.hash().should('eq','')
  })
  
  it('should have SSO Demo as heading', () => {
    
    cy.contains('h1','SSO Demo')
  })

})