/// reference type ="cypress"

describe ("Test Scenario", ()=>{

    it("Test Case ",()=>{

        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
        cy.get('#input-firstname').type("happy")
        cy.get('#input-lastname').type("Singh")
        cy.get('#input-email').type("Happysigh12@gmail.com")
        cy.get('#input-telephone').type("12344")
        cy.get('#input-password').type("Password",{log:false})
        cy.get('#input-confirm').type("Password")
        cy.get('[type="checkbox"]').check().should("be.checked")
        cy.get('.pull-right > .btn').click()
        cy.get('.alert').should("include", "")
    })
})