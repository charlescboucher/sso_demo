describe('template spec', () => {
  beforeEach(()=>{
    cy.login()
    cy.visit('http://localhost:3000/blogs')
  })
  
  it('should have Blog on page', () => {
    cy.contains('h2','Blogs')
  })

})