/// <reference types="cypress" />

describe('testsuit', function(){

    it('test1', function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should("eq","OrangeHRM");
    })

    it('test2', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should("eq","OrangeHRMXYZ");
    })
});