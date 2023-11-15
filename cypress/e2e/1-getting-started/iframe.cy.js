//reference types="Cypress" />
//reference types="Cypress-iframe" />
import 'cypress-iframe'

describe('e-test iframe', () => {
    it('should test iframe into html dom', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="mentorship"]').eq(0).click()
        //cy.iframe().find('div.pricing-container').should('have.length',2)
    });
});