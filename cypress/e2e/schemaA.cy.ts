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
      });
    
    describe('Error warnings and handling - Schema A', () => {
        it("Required fields", () => {
            cy.userSubmit().click();
            cy.userNameRequiredError().should('exist').and('contain.text', errorRequiredFields.requiredField)
            cy.ageRequiredError().should("exist").and('contain.text', errorRequiredFields.requiredField)
            cy.emailRequiredError().should("exist").and('contain.text', errorRequiredFields.requiredField)
            cy.streetRequiredError().should("exist").and('contain.text', errorRequiredFields.requiredField)
            cy.cityRequiredError().should("exist").and('contain.text', errorRequiredFields.requiredField)
            cy.zipRequiredError().should("exist").and('contain.text', errorRequiredFields.requiredField)
            cy.genderRequiredError().should("exist").and('contain.text', errorRequiredFields.requiredField)
            cy.verifyFormData();
            cy.verifyErrorMessages('.highlight', errorMessages);
            cy.verifyValid('pre.mt-4.bg-gray-100.p-4.overflow-auto', 'Is validfalse');
        })
        
        it("Min and Max Lenght - Schema A", () => {
            cy.typeMinimumUserName()
            cy.userSubmit().click();
            cy.minErrorUserName().should("exist").and('contain.text', minMaxErrors.minUserName)
            cy.typeMaximumUserName()
            cy.userSubmit().click();
            cy.maxErrorUserName().should("exist").and('contain.text', minMaxErrors.maxUserName)
        })
    })
})