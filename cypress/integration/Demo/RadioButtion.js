/// <reference types="cypress" />

describe('TestSuite', () =>{
    it('TestCase', ()=>{

        //visiting the URL
        cy.visit('http://newtours.demoaut.com/')
        cy.url().should('include','newtours')

        //Logging into the page
         cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury")
         cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury")

         cy.get('input[name=login]').should('be.visible').click()

        //verifying the title of page
        cy.title().should('eq','Find a Flight: Mercury Tours:')

        //Radio Button 
        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked')
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click()

        cy.get('[name=findFlights]') .should('be.visible').click()
        cy.title().should('eq','Select a Flight: Mercury Tours:')

    })
})