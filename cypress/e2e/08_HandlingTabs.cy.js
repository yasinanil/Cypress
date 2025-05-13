describe("Hadling Tabs", () => {

    //1st approach
    it("Removing Attribute", () => {

        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.contains("Click Here").invoke("removeAttr", "target").click();
        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new");
        cy.wait(3000);
        cy.go("back");

    })

    it("Visit Url Manually", () => {

        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.contains("Click Here").then(element => {
            let url = element.prop("href");
            cy.visit(url);
        })

        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new");
        cy.wait(3000);
        cy.go("back");

    })





})