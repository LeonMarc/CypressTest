/// <reference types="cypress" />
import { errorRequiredFields } from '../support/constants';
import { errorMessages } from '../support/constants';
import { minMaxErrors } from '../support/constants';
import '../support/getCommands';
import '../support/commands';

context("Schema A", () => {
    beforeEach(() => {
        cy.visitHost()
    })
    describe('Form Happy Path', () => {
        it('should fill the form with random data - Schema A', () => {
          cy.fillFormWithRandomData();
          cy.verifyFormData();
          cy.verifyValid('pre.mt-4.bg-gray-100.p-4.overflow-auto', 'Is validtrue');
        });
        it("Verify fields integrity", () => {
            cy.assertCombobox('gender');
          });
      });
    
    describe('Error warnings and handling - Schema A', () => {
        it("Required fields", () => {
            cy.userSubmit().click();
            cy.assertRequiredErrorsA()
            cy.verifyFormData();
            cy.verifyErrorMessages('.highlight', errorMessages);
            cy.verifyValid('pre.mt-4.bg-gray-100.p-4.overflow-auto', 'Is validfalse');
        })
        
        it.only("Min and Max Lenght - Schema A", () => {
            cy.typeMinimumUserName()
            cy.userSubmit().click();
            cy.assertMinErrorsA()
            cy.typeMaximumUserName()
            cy.userSubmit().click();
            cy.assertMaxErrorsA()
        })
    })
})