describe("handlehow to open child tab and window tab", function(){

    it ("Open child tab", ()=>{

        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get("#opentab").invoke("removeAttr",'target').click()
       

        /* handle tab using prop function
        cy.get('#opentab').then(function(data){
            const tabdata = data.prop('href')
            cy.url().should(('include','rahulshetty'))
            cy.go('back')*/
    
    })
})