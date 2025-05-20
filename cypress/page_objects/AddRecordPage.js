class AddRecordPage {

    constructor() {
        this.nameInput = "#nameInput";
        this.ageInput = "#ageInput";
        this.countryInput = "#countrySelect";
        this.addButton = "[onclick='addRecord()']";
        this.tableBody = "//table/tbody"
    }

    visit() {
        cy.visit("https://yasinanil.github.io/addRecordWebTable");
    }

    enterName(name) {
        cy.get(this.nameInput).type(name);
    }

    enterAge(age) {
        cy.get(this.ageInput).type(age);
    }

    selectCountry(country) {
        cy.get(this.countryInput).select(country);
    }

    clickAdd() {
        cy.get(this.addButton).click();
    }

    assertName(name) {
        cy.xpath(this.tableBody).should("contain.text", name)
    }

    assertAge(age) {
        cy.xpath(this.tableBody).should("contain.text", age)
    }

    assetCountry(country) {
        cy.xpath(this.tableBody).should("contain.text", country)
    }

    assertInputs(name, age, country) {
        this.assertName(name);
        this.assertAge(age);
        this.assetCountry(country);
    }

}

export default AddRecordPage;