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
    describe('Form Happy Path - Schema B', () => {
        it('should fill the form with random data', () => {
            cy.fillFormWithRandomDataB();
            cy.verifyAccountDataB()
            cy.isValidAccount('pre.mt-4.bg-gray-100.p-4.overflow-auto', 'Is validtrue');
        });
        it("Verify fields integrity", () => {
            cy.assertCombobox('account');
          });
      })
    describe('Error warnings and handling - Schema B', () => {
        it("Required fields", () => {
            cy.accountSubmit().click();
            cy.assertRequiredErrorsB()
            cy.verifyAccountDataB()
            cy.isValidAccount('pre.mt-4.bg-gray-100.p-4.overflow-auto', 'Is validfalse');
        })  
        it("Min and Max lenght", () =>{
            cy.typeMinimumAccountName()
            cy.accountSubmit().click()
            cy.assertMinMaxErrorsB()
        })
    })
    
})