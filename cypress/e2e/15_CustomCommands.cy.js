describe("Custom Commands", () => {

    it("Custom Command", () => {

        cy.visit("https://testpages.eviltester.com/styled/index.html");
        //cy.get("a").contains("Ajax JavaScript Examples").click();
        cy.clickLink("Ajax JavaScript Examples");

        cy.url().should("contain", "basic-ajax-test");

    })

    it("Custom Workflow", () => {

        cy.signin();
        cy.get("#employeeHeader").should("contain", "Employee Table");

    })




})