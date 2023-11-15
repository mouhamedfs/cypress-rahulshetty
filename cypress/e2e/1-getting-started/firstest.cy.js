/// <reference types="cypress" />

describe('My first test',()=>{
    it('should count product', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input[type="search"]').type('ca')
        cy.wait(2000)
        //cy.get('.product:visible').should('have.length', 4);
        //parent CHild
        cy.get('.products').find('.product').should('have.length', 4);

        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();

        //iteration
        cy.get('.products').find('.product').each(($el, index) => {
            cy.wrap($el).contains('ADD TO CART').click();
        })
        //alias to reusing the same locator
        cy.get('.products').as('produtsLocator')
        cy.get('.brand').then((logoelement)=> {
            cy.log(logoelement.text());
        })
        cy.get('.brand').should('have.text', 'GREENKART');
    });
})