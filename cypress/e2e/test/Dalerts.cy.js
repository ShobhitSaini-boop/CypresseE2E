describe('Alerts', function(){

    //Javascript Alerts : It will have some text and an Ok button
    it("Js Alerts 1", ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert',(msg)=>{
            expect(msg).to.contains("I am a JS Alert")
        })

        cy.get('#result').should('have.text','You successfully clicked an alert')

        
    })

    // Javascript confirmAlert: It will have some text with "Ok" and "confirm" buttons

     it('Ok and Cancel Button', function(){
         cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
         cy.get("button[onclick='jsConfirm()']").click()

         cy.on("window:confirm",(msg)=>{
            cy.expect(msg).to.equal("I am a JS Confirm")

         })

        // cy.get('#result').should ("have.text",'You clicked: Ok')

         cy.on('window:confirm',()=> false ) ; // cypress closes alert window using cancel button
         
         cy.get('#result').should('have.text','You clicked: Cancel')

     })

      // Javascript Prompt alert: It will have some text box for user

       it('Prompt alert', function(){

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('happy')
        })
          cy.get("button[onclick='jsPrompt()']").click()
          cy.get('#result').should("have.text","You entered: happy")

          //cy.on("windo:prmpt",()=> false)

        // Authentication Alert

 
       })

       it.only('Authentication Alert pop up', function(){
        // Approach 1

        /*cy.visit('https://the-internet.herokuapp.com/basic_auth',
            {auth:
              {
                username : "admin",
                password : "admin"
            }
        })

            cy.get("div[class='example'] ").should("have.contain",'Congratulations! You must have the proper credentials.')
         */
            cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
            cy.get("div[class='example'] ").should("have.contain",'Congratulations! You must have the proper credentials.')
    })


})