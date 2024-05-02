describe("Visibilty", function(){


    it ("Visibilty of text box", ()=>
{cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')
})

it.only ("Visibilty of text box", ()=>
{
    cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
    cy.get("[value='radio2']").check()
    .should('have.value',"radio2")
})

})