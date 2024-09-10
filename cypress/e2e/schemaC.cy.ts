/// <reference types="cypress" />
import { errorRequiredFields } from '../support/constants';
import { minMaxErrors } from '../support/constants';
import '../support/getCommands';
import '../support/commands';

context("Schema C", () => {
    beforeEach(() => {
        cy.visitHost()
        cy.clickSchemaC()
    })
    describe('Form Happy Path', () => {
        it('should fill the form with random data - Schema C', () => {
            cy.fillFormWithRandomDataC()
            cy.verifyAppDataC()
            cy.isValidApp('pre.mt-4.bg-gray-100.p-4.overflow-auto', 'Is validtrue');
        });
    })
    describe('Error warnings and handling - Schema C', () => {
        it.only("Required fields", () => {
            cy.activateAllFeatures()
            cy.submitApp().click()
            cy.appNameRequiredError().should('exist').and('contain.text', errorRequiredFields.requiredField)
            cy.versionRequiredError().should('exist').and('contain.text', errorRequiredFields.requiredField)
            cy.maxUsersRequiredError().should('exist').and('contain.text', errorRequiredFields.requiredField)
            cy.supportEmailRequiredError().should('exist').and('contain.text', errorRequiredFields.requiredField)
            cy.configA1RequiredError().should('exist').and('contain.text', errorRequiredFields.requiredField)
            cy.configB1RequiredError().should('exist').and('contain.text', errorRequiredFields.requiredField)
            cy.configC1RequiredError().should('exist').and('contain.text', errorRequiredFields.requiredField)
            cy.environmentRequiredError().should('exist').and('contain.text', errorRequiredFields.requiredField)
            cy.verifyAppDataC()
            cy.isValidApp('pre.mt-4.bg-gray-100.p-4.overflow-auto', 'Is validfalse');
            })

        it("Min and Max lenght - Schema C", () =>{
            cy.typeMinimumAppName()
            cy.submitApp().click()
            cy.minErrorAppName().should("exist").and('contain.text', minMaxErrors.minAppName)
            })
        })
})
