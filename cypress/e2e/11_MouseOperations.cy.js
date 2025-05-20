import "cypress-real-events/support";
import '@4tw/cypress-drag-drop'


describe("Mouse Operations", () => {

    it("Hover", () => {
        cy.visit("https://yasinanil.github.io/actionsClickDrag.html");
        cy.get("#hoverSuccessMessage").should("not.be.visible");
        //cy.contains("Hover over me").trigger("mouseover");
        cy.contains("Hover over me").realHover();
        cy.get("#hoverSuccessMessage").should("be.visible");

    })

    it("Right Click", () => {
        cy.visit("https://yasinanil.github.io/actionsClickDrag.html");
        cy.get("#rightClickSuccessMessage").should("not.be.visible");
        //cy.get("#showSuccessButton").rightclick();
        cy.get("#showSuccessButton").trigger('contextmenu');
        cy.get("#rightClickSuccessMessage").should("be.visible");

    })

    it("Double Click", () => {
        cy.visit("https://yasinanil.github.io/actionsClickDrag.html");
        cy.get("#doubleClickSuccessMessage").should("not.be.visible");
        //cy.contains("Double-click me").dblclick();
        cy.contains("Double-click me").trigger("dblclick");
        cy.get("#doubleClickSuccessMessage").should("be.visible");

    })

    it("Drag and Drop", () => {
        cy.visit("https://yasinanil.github.io/actionsClickDrag.html");
        cy.get("#dragSuccessMessage").should("not.be.visible");
        cy.get("#drag1").drag("#drop1");
        cy.get("#dragSuccessMessage").should("be.visible");

    })

    it("Scroll", () => {
        cy.visit("https://testpages.eviltester.com/styled/index.html");
        cy.wait(3000);
        cy.xpath("(//img)[4]").scrollIntoView().should("be.visible");;
        cy.xpath("(//img)[10]").scrollIntoView({ duration: 1500 }).should("be.visible");
        cy.xpath("(//img)[1]").scrollIntoView({ duration: 2000 }).should("be.visible");
    })









})