import 'cypress-file-upload'

describe("File upload", () => {

    beforeEach("Go to app", () => {

        cy.visit("https://yasinanil.github.io/downloadUpload.html");

    })


    it("Single File", () => {

        cy.get("#uploadInput").attachFile("file01.pdf");
        cy.contains("Submit").click();
        cy.get("#successBox").should("be.visible");

    })

    it("Drag and Drop File", () => {

        cy.get("#dropZone").attachFile("file02.pdf", { subjectType: "drag-n-drop" });
        cy.contains("Submit").click();
        cy.get("#successBox").should("contain.text", "Files uploaded successfully");

    })

    it("Multiple File Upload", () => {

        cy.get("#multiUploadInput").attachFile(["file01.pdf", "file02.pdf", "file03.pdf" ]);
        cy.contains("Submit").click();
        cy.get("#successBox").should("contain.text", "Files uploaded successfully");

    })



})