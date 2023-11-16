import Homepage from "../PageObject/Homepage";
import ProductPage from "../PageObject/ProductPage";

describe('Test framework hooks', function ()  {
    beforeEach(function () {
        cy.fixture('example').then((data)=> {
            this.data = data;
        })
        //Cypress.env('defaultCommandTimeout', 60000)
        // launch commands with different environments npx cypress run --spec e2e/objects.cy.js --env url:'ahulshettyacademy.com/angularpractice/'
        cy.visit('/')
    })
    it('should create hooks', function () {
        //Cypress.config("defaultCommandTimeout": 60000)
        const homepage = new Homepage();
        const productPage = new ProductPage();
        homepage.getEditBox().type(this.data.names)
        homepage.getSecondEditBox().should('have.value', this.data.names)
        homepage.getGender().select(this.data.gender).should('have.value','Male')
        homepage.getEntrepreneurRadio().should('be.disabled')
        productPage.gotoProductPage().click()
        this.data.products.forEach(function (product){
            cy.selectProducts(product)
        })
        var sum = 0
        var sum2 = 0
        productPage.getCheckoutButton().click()
        cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=> {
            const actualName = $el.text()
            var numbers  = actualName.split(' ')
            numbers=numbers[1].trim()
            sum = Number(sum)+ Number(numbers)

                                }).then(function (){
            cy.log(sum)
        })
        cy.get('h3 strong').then(function (element) {
            const actualName = element.text()
            var numbers = actualName.split(' ')
            var total = numbers[1].trim()
            expect(Number(total)).to.equal(sum)
        })
        cy.contains('Checkout').click()
        cy.get('#country').type("India")
        cy.get(".suggestions > ul > li > a").click()
        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"]').click()
        cy.assertMessage('.alert','Success')
})
})