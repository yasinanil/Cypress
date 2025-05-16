describe("Web Tables", () => {

    beforeEach("Go to link", () => {
        cy.visit("https://yasinanil.github.io/webTable");
    })


    it("Structure", () => {

        // Count number of rows
        cy.get("#t1 tbody tr").should("have.length", 7);

        // Count number of columns
        cy.get("#t1 tbody tr:first-child td").should("have.length", 3);

        //Assert row 3 column 2
        cy.get("#t1 tbody tr:nth-child(3) td:nth-child(2)").should("contain", "History");

    })

    it("Get All Data", () => {

        cy.get("#t1 tbody tr td").each((cell) => {

            cy.wrap(cell).invoke("text").then((text) => {
                cy.log(text.trim());
            })

        })

    })


    it("Total Price", () => {

        cy.visit("https://yasinanil.github.io/pagination");

        let sum = 0;

        cy.get("#pagination button").then((buttons) => {


            for (let i = 0; i < buttons.length; i++) {

                cy.get("#pagination button").eq(i).click();
                cy.xpath("//table//td[4]").each((cell) => {

                    cy.wrap(cell).invoke("text").then((text) => {
                        cy.log(text);
                        sum += parseFloat(text.trim());

                    })

                })

            }

        })

        cy.then(()=>{
            cy.log("Sum: " + sum);
        })

    })

})