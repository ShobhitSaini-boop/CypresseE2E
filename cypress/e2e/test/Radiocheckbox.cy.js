describe("Test Cse ", function () {

    it("checkboxes", function () {

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get("#checkBoxOption1").check().should("be.checked").and("have.value", "option1")
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
        //cy.get('input[type="checkbox"]').check(['option1','option2','option3'])
    })

    it("static dropdown", function () {

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get("select").select("option2").should('be.visible', 'option2').and('have.value', 'option2')
    })

    it.only("Dyanamic dropdown", function () {

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($el,index,$list) => {

            if($el.text()==='India'){

                $el.click()            }
        })

        cy.get('#autocomplete').should('have.value','India')
    })
})