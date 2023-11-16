describe('Test framework hooks', () => {
    beforeEach(function () {
        cy.fixture('example').then((data)=> {
            this.data = data;
        })
        cy.visit('/')
    })
    it('should create hooks', function () {

            cy.get('input[minlength=\'2\']').type(this.data.names)
            cy.get('input[minlength=\'2\']').should('have.attr',"minlength","2")
            cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.names)
            cy.get('#exampleFormControlSelect1').select(this.data.gender).should('have.value','Male')
            cy.get('#inlineRadio3').should('be.disabled')
    });

    it('should test shop', function ()  {
        cy.get(':nth-child(2) > .nav-link').click()
        this.data.products.forEach(function (product){
            cy.selectProducts(product)
        })
    })
});
