describe("Validate navigation", function(){

    it("Verify navigation", ()=>
{
   cy.visit('https://www.opencart.com/index.php?route=cms/demo')
   cy.title().should ('eq','OpenCart - Demo')

   cy.get('body > header:nth-child(3) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)').click()
   cy.go('back')
   cy.url().should('include',"opencart.com")
   cy.reload()
   cy.title().should ('eq','OpenCart - Demo')
   cy.go(+1)
   cy.url().should('contains','https://www.opencart.com/index.php?route=marketplace/extension')
   cy.go('back')
   
   cy.go('forward')
}) 
})