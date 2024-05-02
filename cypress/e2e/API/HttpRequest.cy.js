describe("HTTP Request", ()=>{

    it.skip('Get request', function(){
        cy.request('GET','https://reqres.in/api/users/2').its('status')
        .should('equal',200)
    })

    it('Get request', function(){
        cy.request(
                 {
       method : "Get",
       url: 'https://reqres.in/api/users/2',
       
                }
)
.its('status').should("equal",200)

    })

    it('Post request', function(){
        cy.request({

        })
    })



})