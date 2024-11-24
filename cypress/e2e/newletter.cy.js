describe('Funcionalidad Newletter', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
        cy.wait(500)
    });

    it('Permite al usuario suscribirse correctament', () => {
        cy.get('[data-test="email-input"]').type("pedro@yopmail.com")
        cy.get('[data-test="submit-button"]').click()
        cy.get('[data-test="success-message"]').contains("Success")

    });

    it('No Permite al usuario suscribirse con un formato incorrecto de correo', () => {
        cy.get('[data-test="email-input"]').type("pedroyopmail.com")
        cy.get('[data-test="submit-button"]').click()
        cy.get('[data-test="success-message"]').should('not.exist')

    });

    it('Correo ya registrado no permita volver a registrar', () => {
        cy.get('[data-test="email-input"]').type("john@example.com")
        cy.get('[data-test="submit-button"]').click()
        cy.get('[data-test="server-error-message"]').contains("already exists")
    });

    it('Validar seccion Cursos 1', () => {
        cy.get('[data-test="course-0"] > :nth-child(1)').find("a")
        .contains("Get started").click()
        cy.location("pathname").should("equal", "/testing-your-first-application")
    });
    it("Validar seccion Cursos 2", ()=>{
        cy.get('.mt-24').find("a").contains("Get started").click()
        cy.location("pathname").should("equal", "/testing-foundations")
      })    

      it("Validar seccion Cursos 3", ()=>{
        cy.get('[data-test="course-2"] > :nth-child(1)').find("a").contains("Get started").click()
        cy.location("pathname").should("equal", "/cypress-fundamentals")
      })
      

})