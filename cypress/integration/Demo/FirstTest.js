describe('TestSuite', () => {
    it('VerifyTitle Positive', () => {

        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('eq','nopCommerce demo store')

    })

    it('VerifyTitle Negative', () => {

        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('eq','nopCommerce store')

    })
  })