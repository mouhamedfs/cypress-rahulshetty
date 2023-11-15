describe('CHild Windows',()=> {
    it('should selection windows', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($el, index) => {
            const child = $el.text();
            if(child.includes('Python')){
                cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {
                    price.text()
                    expect(price.text()).to.be.eq('25')
                })
            }
        })
})
    //jquery mouse ouver selection via cypress
    it('should test mouse over', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get('div.mouse-hover-content').invoke('show')
        //cy.contains('Top').click()
        cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')
    });
})