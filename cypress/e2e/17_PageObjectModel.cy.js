import AddRecordPage from "../page_objects/AddRecordPage";

describe("POM", () => {

    //Traditional Approach
    it("Enter Data", () => {

        cy.visit("https://yasinanil.github.io/addRecordWebTable.html");

        cy.get("#nameInput").type("Tom Klein");
        cy.get("#ageInput").type(25);
        cy.get("#countrySelect").select("Germany");
        cy.contains("Add Record").click();

        cy.xpath("//table/tbody")
            .should("contain", "Tom Klein")
            .and("contain", 25)
            .and("contain", "Germany")

    })

    //POM Approach
    it("Enter Data POM", () => {
        const addRecordPage = new AddRecordPage();

        addRecordPage
            .visit()
            .enterName("Tom Bob")
            .enterAge(30)
            .selectCountry("Canada")
            .clickAddButton()
            .assertInputs("Tom Bob", 30, "Canada");
    })

    //POM Approach with Fixture
    it.only("Enter Data POM", () => {
        const addRecordPage = new AddRecordPage();

        cy.fixture("person.json").then((person) => {
            addRecordPage
                .visit()
                .enterName(person.name)
                .enterAge(person.age)
                .selectCountry(person.country)
                .clickAddButton()
                .assertInputs(person.name, person.age, person.country);
        })

    })




})