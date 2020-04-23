describe('Form Test', ()=>{
    
    it ('can navigate to webpage', ()=>{
        cy.visit('http://localhost:3000/')
    })
    
    it('Can enter a "name"', ()=>{
        cy.get('input[name="name"]')
            .type('Lebowski')
            .should()
    })

})