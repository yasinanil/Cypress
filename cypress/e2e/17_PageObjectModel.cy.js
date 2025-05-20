import AddRecordPage from "../page_objects/AddRecordPage";

describe("POM", () => {


    //Traditional Approach
    it("Enter Data", () => {

        cy.visit("https://yasinanil.github.io/addRecordWebTable.html");

        cy.get("#nameInput").type("Tom Klein");
        cy.get("#ageInput").type(55);
        cy.get("#countrySelect").select("Canada");
        cy.contains("Add Record").click();

        cy.xpath("//table/tbody")
            .should("contain", "Tom Klein")
            .and("contain", 55)
            .and("contain", "Canada");

    })


    //POM Approach
    it("Enter Data POM", () => {
        const addRecordPage = new AddRecordPage();
        addRecordPage.visit();
        addRecordPage.enterName("Tom Bob");
        addRecordPage.enterAge(25);
        addRecordPage.selectCountry("USA");
        addRecordPage.clickAdd();
        addRecordPage.assertInputs("Tom Bob", 25, "USA");
    })

    //POM Approach with Fixture
    it.only("Enter Data POM", () => {
        
        const addRecordPage = new AddRecordPage();
        addRecordPage.visit();

        cy.fixture("person.json").then((person) => {
            addRecordPage.enterName(person.name);
            addRecordPage.enterAge(person.age);
            addRecordPage.selectCountry(person.country);
            addRecordPage.clickAdd();
            addRecordPage.assertInputs(person.name, person.age, person.country);
        })

    })








})