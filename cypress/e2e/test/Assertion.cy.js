describe("Asertion", ()=>{

    it("implicit Assertion", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // Should and assertion

        cy.url().should('include','opensource-demo')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('containe','orangehrm')
    })
})