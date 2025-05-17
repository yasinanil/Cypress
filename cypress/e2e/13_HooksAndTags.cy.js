describe("Hooks and Tags", () => {

    before("Before", () => {
        cy.log("Before");
    })

    after("After", () => {
        cy.log("After");
    })

    beforeEach("Before Each", () => {
        cy.log("Before Each");
    })

    afterEach("After Each", () => {
        cy.log("After Each");
    })


    it("Test 01", () => {
        cy.log("Test 01");
    })

    it.skip("Test 02", () => {
        cy.log("Test 02");
    })

    it("Test 03", () => {
        cy.log("Test 03");
    })

    it("Test 04", () => {
        cy.log("Test 04");
    })

    it.only("Test 05", () => {
        cy.log("Test 05");
    })





})