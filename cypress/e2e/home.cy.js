describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.wait(3000)
    cy.getByData("hero-heading").contains("Testing Next.js Applications with Cypress")
  })


  it('Verifica caracteristicas de los cursos', () => {
    cy.visit('http://localhost:3000/')
    cy.wait(300)
    cy.get("dt").eq(0).contains("4 Courses")
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
  })
})