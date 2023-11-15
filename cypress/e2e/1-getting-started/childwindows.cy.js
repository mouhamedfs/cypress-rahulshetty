describe('CHild Windows',()=> {
    it('should selection windows', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //jquery function to open child window
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.origin('https://www.qaclickacademy.com/',()=> {

            cy.get('#navbarSupportedContent a[href="about.html"]').click()
            cy.get('.mt-50 h2').should('contain.text', 'Welcome to QAClick Academy')
        })

    })
})