describe('My second test',()=> {
    it('should selection option1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
        cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked')
    })
    it('should select element static dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2');
        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item div').each(($el,index,$list) => {
            if($el.text() === 'India') {
                cy.wrap($el).click();
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('[value="radio2"]').click().should('be.checked')
    });
})