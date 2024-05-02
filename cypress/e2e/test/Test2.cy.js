describe("My first test case", ()=>{
    it("test Positive ", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("eq","OrangeHRM")    
    
    })

    it.skip("test Negative", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //cy.title().should("eq","Ora")    
    
    })
})