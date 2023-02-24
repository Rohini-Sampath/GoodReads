/// <reference types="cypress" />

it('Test 1 Postisive Flow', function () {

    cy.visit('https://www.goodreads.com/')
    cy.title().should('eq', 'Goodreads | Meet your next favorite book')
    cy.wait(7000)
    cy.get('.authSwitchFlow > .gr-hyperlink').click()
    cy.contains('Sign in with email').click()
    cy.get('#ap_email').type('rohinisampath2626@gmail.com')
    cy.get('#ap_password').type('Rohini@2606')
    cy.get('#signInSubmit').click()
    cy.wait(5000)
    cy.get('.siteHeader__contents > .searchBox > .searchBox__form > .searchBox__input').type('Emotional Intelligence')
    cy.get('.siteHeader__contents > .searchBox > .searchBox__form > .searchBox__icon--magnifyingGlass').click()
    cy.wait(5000)
    cy.contains('Want to Read').click()
    cy.wait(3000)
    cy.get('.siteHeader__primaryNavSeparateLine > .siteHeader__menuList > .siteHeader__topLevelItem--home > .siteHeader__topLevelLink').click()
    cy.visit('https://www.goodreads.com/review/list/163115784?ref=nav_mybooks')
    cy.get('.smallText > img').click()
    cy.get('.dropdown__trigger > .headerPersonalNav__icon > .circularIcon').click()
    cy.get('.siteHeader__subNav > ul > [role="menuitem Sign out"] > .siteHeader__subNavLink').click()
})
