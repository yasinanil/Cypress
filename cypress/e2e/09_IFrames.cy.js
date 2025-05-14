import 'cypress-iframe';

describe("iFrames", () => {
    //Approach 1:
    it("Basic iFrame Handling", () => {

        cy.visit('https://yasinanil.github.io/iframe');

        cy.get("#mce_0_ifr")
            .its("0.contentDocument.body")
            .should("be.visible")
            .then(cy.wrap)
            .find("input")
            .should("be.visible")
            .clear()
            .type("Approach 1");

        cy.contains("Bold").click();

    })

    //Approach 2:
    it("Custom Command", () => {

        cy.visit('https://yasinanil.github.io/iframe');

        cy.getIframe("#mce_0_ifr")
            .find("input")
            .should("be.visible")
            .clear()
            .type("Approach 2");

        cy.contains("Bold").click();

    })

        //Approach 3:
    it("iFrame Plugin", () => {

        cy.visit('https://yasinanil.github.io/iframe');

        cy.frameLoaded("#mce_0_ifr");

        cy.iframe("#mce_0_ifr")
            .find("input")
            .should("be.visible")
            .clear()
            .type("Approach 3");

        cy.contains("Bold").click();

    })









})



