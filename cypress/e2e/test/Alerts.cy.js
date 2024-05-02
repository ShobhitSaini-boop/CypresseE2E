describe("Alerts and pop up", function(){

    it("Confirm pop up", ()=>{

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
       cy.get("#alertbtn").click()
        cy.get('#confirmbtn').click()

        //window : alert
        cy.on("window:alert", (string)=>{

            expect(string).to.equal("Hello , share this practice page and share your knowledge") 

        })

        //window : confirm
        cy.on("window:confirm", (string2)=>{

            expect(string2).to.equal("Hello , Are you sure you want to confirm?") 

        })

    })
})