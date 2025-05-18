describe("Direct Access", () => {

    it("Enter Data", () => {

        cy.visit("https://yasinanil.github.io/addRecordWebTable.html");

        cy.fixture("person").then((person) => {
            cy.get("#nameInput").type(person.name);
            cy.get("#ageInput").type(person.age);
            cy.get("#countrySelect").select(person.country);
            cy.contains("Add Record").click();

            cy.xpath("//table/tbody")
                .should("contain", person.name)
                .and("contain", person.age)
                .and("contain", person.country)
        })

    })

})

describe("Using Hooks", () => {

    let person;

    before(() => {
        cy.fixture("person").then((data) => {
            person = data;
        })
    })

    it("Enter Data", () => {

        cy.visit("https://yasinanil.github.io/addRecordWebTable.html");
        cy.get("#nameInput").type(person.name);
        cy.get("#ageInput").type(person.age);
        cy.get("#countrySelect").select(person.country);
        cy.contains("Add Record").click();

        cy.xpath("//table/tbody")
            .should("contain", person.name)
            .and("contain", person.age)
            .and("contain", person.country)

    });


    it("Registration", () => {

        cy.visit("https://yasinanil.github.io/Registration");
        cy.get("#firstName").type(person.name);
        cy.get("#ssn").type(person.age);
        cy.get("#lastName").type(person.country);
        cy.get("#username").type(person.Username);

    });


})


describe("Multiple Data Sets", () => {

    let people;

    before(() => {
        cy.fixture("people").then((data) => {
            people = data;
        })
    })


    it("With Index", () => {

        cy.visit("https://yasinanil.github.io/addRecordWebTable.html");
        cy.get("#nameInput").type(people[0].name);
        cy.get("#ageInput").type(people[0].age);
        cy.get("#countrySelect").select(people[0].country);
        cy.contains("Add Record").click();

        cy.xpath("//table/tbody")
            .should("contain", people[0].name)
            .and("contain", people[0].age)
            .and("contain", people[0].country)

    })

    it("Loop Through", () => {

        cy.visit("https://yasinanil.github.io/addRecordWebTable.html");


        people.forEach((person) => {

            cy.get("#nameInput").type(person.name);
            cy.get("#ageInput").type(person.age);
            cy.get("#countrySelect").select(person.country);
            cy.contains("Add Record").click();

            cy.xpath("//table/tbody")
                .should("contain", person.name)
                .and("contain", person.age)
                .and("contain", person.country)

        })
    })
})