class Homepage {
    getEditBox() {
        return cy.get('input[minlength=\'2\']')
    }
    getSecondEditBox() {
        return  cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender() {
        return cy.get('#exampleFormControlSelect1')
    }

    getEntrepreneurRadio() {
        return cy.get('#inlineRadio3')
    }

    getShopTab() {return cy.get(':nth-child(2) > .nav-link')}
}
export default Homepage;