describe("Navigations", () => {

    it("Navigations", () => {

        cy.visit("https://yasinanil.github.io/");
        cy.title().should("eq", "QA Testing Portal");
        //cy.screenshot("Homepage");
        //cy.get(".card:nth-child(10)").screenshot("Drag and Drop");

        cy.clickLink("Actions");
        cy.title().should("eq", "Actions Class Example");

        //Go back
        cy.go("back");
        cy.title().should("eq", "QA Testing Portal");

        //Go forward
        cy.go("forward");
        cy.title().should("eq", "Actions Class Example");

        //Reload
        cy.reload();
        cy.title().should("eq", "Actions Class Example");

        //Alternative

        //Go back
        cy.go(-1);
        cy.title().should("eq", "QA Testing Portal");

        //Go forward
        cy.go(1);
        cy.title().should("eq", "Actions Class Example");

    })

})