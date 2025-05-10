describe("Locators", () => {

    it("Login Test", () => {

        cy.login("talentifylab@gmail.com", "Talentify.123");
        cy.get(".logout").should("be.visible");
        cy.get("[id='add-contact']").should("be.visible");
        
    })

});