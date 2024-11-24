describe('', () => {

    it('Debe poder encontrar un curso en la pagina inicial, y completar las lecciones', () => {
        // Visita la página principal de la aplicación
        cy.visit("http://localhost:3000/");
    
        // Busca el primer curso en la página inicial usando el selector [data-test="course-0"] 
        // y encuentra el enlace que contiene el texto "Get started", luego haz clic en él.
        cy.get('[data-test="course-0"] > :nth-child(1)').find("a")
            .contains("Get started").click();
    
        // Verifica que la URL cambió al inicio del curso esperado
        cy.location("pathname").should("equal", "/testing-your-first-application");
    
        // Haz clic en el botón "Siguiente lección"
        cy.get('[data-test="next-lesson-button"]').click();
    
        // Verifica que la URL cambió a la página de la siguiente lección
        cy.location("pathname").should("equal", "/testing-your-first-application/app-install-and-overview");
    
        // Marca la respuesta del desafío de la lección como completada
        cy.get('[data-test="challenge-answer-0"]').check().should("exist");
    
        // Haz clic en el botón "Siguiente lección"
        cy.get('[data-test="next-lesson-button"] > .mx-auto').click();
    
        // Verifica que la URL cambió a la página de la siguiente lección
        cy.location("pathname").should("equal", "/testing-your-first-application/installing-cypress-and-writing-our-first-test");
    
        // Marca la respuesta del desafío de la lección como completada
        cy.get('[data-test="challenge-answer-0"]').check().should("exist");
    
        // Haz clic en el botón "Siguiente lección"
        cy.get('[data-test="next-lesson-button"] > .mx-auto').click();
    
        // Verifica que la URL cambió a la página de la siguiente lección
        cy.location("pathname").should("equal", "/testing-your-first-application/setting-up-data-before-each-test");
    
        // Marca la respuesta del desafío de la lección como completada
        cy.get('[data-test="challenge-answer-0"]').check().should("exist");
    
        // Haz clic en el botón "Siguiente lección"
        cy.get('[data-test="next-lesson-button"] > .mx-auto').click();
    
        // Verifica que al final del curso aparece el elemento que indica que se completaron las lecciones
        cy.get('[data-test^="lesson-complete"]') // Busca elementos cuyo data-test comienza con "lesson-complete"
            .should('exist') // Verifica que el elemento exista
            .and('have.attr', 'data-test') // Asegúrate de que tiene el atributo data-test
            .and('include', 'lesson-complete'); // Verifica que el atributo incluye "lesson-complete"
    
        // Confirma que la URL redirige de vuelta a la página principal del curso
        cy.url().should('eq', 'http://localhost:3000/');
    });
        

})