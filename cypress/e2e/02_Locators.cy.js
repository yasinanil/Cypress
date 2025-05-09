//CSS Selector
describe("Locators", () => {

    it("CSS Selector", () => {

        cy.visit("https://thinking-tester-contact-list.herokuapp.com/");
        cy.get("#email").type("talentifylab@gmail.com");
        cy.get("#password").type("Talentify.123");
        cy.get("#submit").click();
        cy.get(".logout").should("be.visible");
        cy.get("[id='add-contact']").should("be.visible");
    })

    it("XPath", () => {

        cy.visit("https://thinking-tester-contact-list.herokuapp.com/");
        cy.xpath("//input[@placeholder='Email']").type("talentifylab@gmail.com");
        cy.xpath("//*[@id='password']").type("Talentify.123");
        cy.xpath("//*[.='Submit']").click();
        cy.xpath("//*[@class='logout']").should("be.visible");
    })


});