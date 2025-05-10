

describe("Implicit Assertions", () => {

    it("URL", () => {

        cy.visit("https://thinking-tester-contact-list.herokuapp.com/");
        cy
            .url()
            .should("include", "thinking")
            .and("eq", "https://thinking-tester-contact-list.herokuapp.com/")
            .and("contain", "herokuapp")
            .and("not.contain", "herokuappXYZ");

    })
    it("Title", () => {
        cy.visit("https://thinking-tester-contact-list.herokuapp.com/");
        cy
            .title()
            .should("include", "Contact")
            .and("eq", "Contact List App")
            .and("contain", "Contact List")
            .and("not.contain", "Contact List XYZ");
    })

    it("Button Existence", () => {

        cy.visit("https://thinking-tester-contact-list.herokuapp.com/");

        cy
            .get("#signup")
            .should("be.visible")
            .and("exist")
            ;
    })

    it("Number of elements", () => {
        cy.visit("https://testpages.eviltester.com/styled/index.html");
        cy.xpath("//a").should("have.length", 66);
    })

    it("Value", () => {
        cy.visit("https://thinking-tester-contact-list.herokuapp.com");
        cy.get("#email").type("talentifylab");
        cy.get("#email").should("have.value", "talentifylab");

    })


    describe("Implicit Assertions", () => {

        it("Header", () => {

            cy.visit("https://thinking-tester-contact-list.herokuapp.com/");
            cy.get("#email").type("talentifylab@gmail.com");
            cy.get("#password").type("Talentify.123");
            cy.get("#submit").click();

            cy.get("h1").then((x) => {

                let actualText = x.text();
                let expectedText = "Contact List App";

                expect(actualText).to.equal(expectedText);
                expect(actualText).to.not.equal(expectedText + "XYZ");

                assert.equal(actualText, expectedText, "Text did not match");
                assert.notEqual(actualText, expectedText + "XYZ", "Text matched");

            })

        })


    })






})