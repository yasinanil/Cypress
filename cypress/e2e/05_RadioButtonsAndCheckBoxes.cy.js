
describe("Radio Buttons and Checkboxes", ()=>{

    it("Radio Buttons", ()=>{

        cy.visit("https://yasinanil.github.io/checkbox-radioButton.html");
        cy.get("#bloodAB").check().should("be.checked");

        cy.get("#genderMale").should("not.be.checked");

    })

        it("Checkbox", ()=>{

        cy.visit("https://yasinanil.github.io/checkbox-radioButton.html");
        cy.get("#basketball").check().should("be.checked");
        cy.get("#tennis").should("not.be.checked");

        cy.get("input[type='checkbox']").check();
        cy.get("input[type='checkbox']").uncheck();

        cy.get("input[type='checkbox']").first().check().should("be.checked");
        cy.get("input[type='checkbox']").last().check().should("be.checked");




    })



})