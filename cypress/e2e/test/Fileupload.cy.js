/// <reference types='cypress'/>

import 'cypress-file-upload'

describe('Vlidate the file upload functionality', function(){

    it.skip('verify the file upload', ()=>{

        const path = ''
        const path1 =''
        const path2 = ''

        cy.visit('')
        cy.get().attachFile(path).attachfile(path1).attachFile(path2)
    })

    it.skip('Single file upload', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('sample4.csv')
        cy.get('#file-submit').click()
        cy.wait(5000)
    })

    it.skip('File upload Rename', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'sample4.csv',fileName : 'Myfile.csv'})
        cy.get('#file-submit').click()
    })

    it.skip('File upload drag and drop', ()=>{
        
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('sample4.csv',{subjectType: 'drag-n-drop'})
        cy.wait(5000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
.contains('sample4.csv')        
    })

    it.skip('multiple file upload', ()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['sample4.csv','sample1.pdf'])
        cy.wait(5000)
        cy.get(':nth-child(6) > strong').should('contain.text',"Files You Selected:")

    })

    it('File upload - shadow dom', ()=>{

        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('sample1.pdf')
        cy.get('.smart-item-name',{includeShadowDom:true}).contains('sample1.pdf')
        
    })
})
