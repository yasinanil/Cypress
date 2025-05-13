describe("Alerts", () => {

    it("JS Alert", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("[onclick='jsAlert()']").click();

        cy.on("window:alert", (text) => {
            expect(text).to.contains("I am a JS Alert");
        })

        cy.get("#result").should("have.text", "You successfully clicked an alert");

    })

    it("JavaScript Confirm - OK", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("[onclick='jsConfirm()']").click();

        cy.on("window:confirm", (text) => {
            expect(text).to.equal("I am a JS Confirm");
        });

        cy.get("#result").should("have.text", "You clicked: Ok");

    })

    it("JavaScript Confirm - Cancel", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("[onclick='jsConfirm()']").click();

        cy.on("window:confirm", (text) => {
            expect(text).to.equal("I am a JS Confirm");
        });

        cy.on("window:confirm", () => false);//Accept By Cancel

        cy.get("#result").should("have.text", "You clicked: Cancel");

    })

    it("JavaScript Prompt", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.window().then((win) => {
            cy.stub(win, "prompt").returns("Hello World");
            cy.get("[onclick='jsPrompt()']").click();
        });

        cy.get("#result").should("have.text", "You entered: Hello World");

    })

    it("Basic Authentication First", () => {

        cy.visit("https://the-internet.herokuapp.com/basic_auth",
            {
                auth: { username: "admin", password: "admin" }
            });

        cy.xpath("//p").should("contain.text", "Congratulations");
    })

    it("Basic Authentication Second", () => {

        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth",
            {
                auth: { username: "admin", password: "admin" }
            });

        cy.xpath("//p").should("contain.text", "Congratulations");
    })









})