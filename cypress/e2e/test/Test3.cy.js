describe("test case Suite",()=>{

    it ("test case deescription", function(){

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.url().should('include', "https://www.rahulshettyacademy.com/Automation")
        cy.url().should('eq',"https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.url().should("contains","rahulshetty")
    })

    it
    ("test case Scroll", function(){

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.scrollTo("bottom")
        cy.scrollTo("top")

    })

    it.only()
    ("test case radio button", function(){

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('[for="radio1"]').check().should("be.visible")
    })
})