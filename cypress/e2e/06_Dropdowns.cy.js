
describe("Dropdowns", () => {

    it("Traditional Dropdown", () => {

        cy.visit("https://yasinanil.github.io/Dropdowns");

        cy.get("#carSelect")//Locate Dropdown element
            .select("Ford")//Select the option
            .should("have.value", "Ford");//Assert

    })

    it("Multi-Select Dropdown", () => {

        cy.visit("https://yasinanil.github.io/Dropdowns");

        cy.get("#multiCarSelect")//Locate dropdown
            .select(["Toyota", "Tesla", "Ford"])//Select multiple option via array
            .invoke("val")//invoke the value
            .should("deep.equal", ["Toyota", "Tesla", "Ford"]);//assert with 'deep.equal'

    })

    it("Custom Dropdown", () => {

        cy.visit("https://yasinanil.github.io/Dropdowns");
        cy.get("#customDropdown").click()//Locate the dropdown and click.
        cy.get("#customList").contains("BMW").click();
        cy.get("#customDropdown").should("have.text", "BMW");

    })

    it("Auto-Suggest Dropdown", () => {

        cy.visit("https://yasinanil.github.io/Dropdowns");
        cy.get("#staticInput").type("Tes");
        cy.get("#staticSuggestions .suggestion-item").contains("Tesla Model S").click();
        cy.get("#staticInput").should("have.value", "Tesla Model S");

    })

    it("Dynamic Auto-Suggest Dropdown", () => {

        cy.visit("https://yasinanil.github.io/Dropdowns");
        cy.get("#dynamicInput").type("Mer");
        cy.get("#dynamicSuggestions .suggestion-item").contains("Mercedes").click();
        cy.get("#dynamicInput").should("have.value", "Mercedes");

    })







})