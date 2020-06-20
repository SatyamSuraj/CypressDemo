/// <reference types="cypress" />

describe('TestSuite', function(){
    it('TestCase', function(){
        cy.visit("https://demo.nopcommerce.com/")
        cy.get("#small-searchterms").type("Apple Macbook Pro 13-inch")
        cy.get("[type='submit']").click()

        cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()
        cy.get("#addtocart_4_EnteredQuantity").clear().type(2)
        cy.get("#add-to-cart-button-4").click()

        cy.wait(3000)
        cy.get("#topcartlink > a > span.cart-label").click()
        cy.wait(5000)

        cy.get(".product-unit-price").contains('$1,800.00')



    })
})