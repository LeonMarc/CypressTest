/// <reference types="cypress" />
import { errorRequiredFields } from '../support/constants';
import { minMaxErrors } from '../support/constants';
import '../support/getCommands';
import '../support/commands';

context("Schema B", () => {
    beforeEach(() => {
        cy.visitHost()
        cy.clickSchemaB()
    })
    describe('Form Happy Path', () => {
        it('should fill the form with random data - Schema B', () => {
            cy.fillFormWithRandomDataB();
            cy.verifyAccountDataB()
            cy.isValidAccount('pre.mt-4.bg-gray-100.p-4.overflow-auto', 'Is validtrue');
        });
      })
    describe('Error warnings and handling - Schema B', () => {
        it.only("Required fields", () => {
            cy.accountSubmit().click();
            cy.assertRequiredErrorsB()
            cy.verifyAccountDataB()
            cy.isValidAccount('pre.mt-4.bg-gray-100.p-4.overflow-auto', 'Is validfalse');
        })  
        it("Min and Max lenght - Schema B", () =>{
            cy.typeMinimumAccountName()
            cy.accountSubmit().click()
            cy.minErrorAppName().should("exist").and('contain.text', minMaxErrors.minUserName)
        })
    })
    
})