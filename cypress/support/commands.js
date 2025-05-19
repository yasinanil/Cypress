// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />
import 'cypress-xpath';

Cypress.Commands.add('login', (username, password) => {

    cy.visit("https://thinking-tester-contact-list.herokuapp.com/");
    cy.get("#email").type(username);
    cy.get("#password").type(password);
    cy.get("#submit").click();

});


Cypress.Commands.add("getIframe", (locator) => {
    return cy.get(locator).its("0.contentDocument.body").should("be.visible").then(cy.wrap)
})

Cypress.Commands.add("clickLink", (visibleText) => {
    cy.get("a").contains(visibleText).click()
})

/*
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {

    Cypress.log({ message: "Test started. You go to " + url })

    return originalFn(url, options)
})
*/

Cypress.Commands.add("signin", () => {
    cy.visit("https://yasinanil.github.io/signIn.html");
    cy.get("#username").type("admin");
    cy.get("[placeholder='Password']").type("123");
    cy.get("input[type='submit']").click();
})