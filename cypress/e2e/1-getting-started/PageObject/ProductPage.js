class ProductPage{

    gotoProductPage() {
        return cy.get(':nth-child(2) > .nav-link')
    }

    getCheckoutButton() {return cy.get('a[class="nav-link btn btn-primary"]')}

}

export default ProductPage;