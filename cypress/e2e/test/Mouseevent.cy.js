/// <reference types= 'cypress'/>

describe('Validat the mouse event', function(){

    it(' Verify that mouse event with juery', ()=>{
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')

        cy.contains('Top').click({force: true})
        cy.url().should('include','top')

    })

    it(' Verify that mouse event with trigger', ()=>{
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').trigger('mouseover').click()
    })
})