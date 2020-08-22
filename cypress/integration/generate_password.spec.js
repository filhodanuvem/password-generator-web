describe("check if its generating password", () => {
    it("should generate password just with numbers", () => {
        cy.visit("/")
        cy.get('input[type=checkbox]').uncheck();
        cy.get('#numbers').check();
        cy.get('#generateButton').click(); 
        cy.get('#resultSpan').invoke('text').should('match', /^[0-9]{6}$/)
    })

    it("should generate password just with lowercase letters", () => {
        cy.visit("/")
        cy.get('input[type=checkbox]').uncheck();
        cy.get('#lowercase').check();
        cy.get('#generateButton').click(); 
        cy.get('#resultSpan').invoke('text').should('match', /^[a-z]{6}$/)
    })

    it("should generate password just with uppercase letters", () => {
        cy.visit("/")
        cy.get('input[type=checkbox]').uncheck();
        cy.get('#uppercase').check();
        cy.get('#generateButton').click(); 
        cy.get('#resultSpan').invoke('text').should('match', /^[A-Z]{6}$/)
    })

})