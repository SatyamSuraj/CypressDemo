/// <reference types="cypress" />

describe('TestSuit', ()=>{
    it("TestCase", ()=>{
        cy.visit("http://demo.automationtesting.in/Register.html")

        //select drop down
        cy.get('#Skills').select('Android').should('have.value','Android')

        //Multi select drop down
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Japanese').click()


        //search drop down
        cy.get('[role=combobox]').click({force:true})
        cy.get('.select2-search__field').type('Ind')
        cy.get('.select2-search__field').type('{enter}')


    })
})