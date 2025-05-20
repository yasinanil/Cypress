class AddRecordPage {

    constructor() {
        this.nameInput = "#nameInput";
        this.ageInput = "#ageInput";
        this.countrySelect = "#countrySelect";
        this.addButton = "[onclick='addRecord()']";
        this.tableBody = "//table/tbody";
    }

    visit() {
        cy.visit("https://yasinanil.github.io/addRecordWebTable.html");
        return this;
    }

    enterName(name) {
        cy.get(this.nameInput).type(name);
        return this;
    }

    enterAge(age) {
        cy.get(this.ageInput).type(age);
        return this;
    }
    selectCountry(country) {
        cy.get(this.countrySelect).select(country);
        return this;
    }

    clickAddButton() {
        cy.get(this.addButton).click();
        return this;
    }

    assertName(name) {
        cy.xpath(this.tableBody).should("contain", name)
        return this;
    }

    assertAge(age) {
        cy.xpath(this.tableBody).should("contain", age)
        return this;
    }

    assertCountry(country) {
        cy.xpath(this.tableBody).should("contain", country)
        return this;
    }

    assertInputs(name, age, country) {
        this.assertName(name).assertAge(age).assertCountry(country);
    }

}

export default AddRecordPage;