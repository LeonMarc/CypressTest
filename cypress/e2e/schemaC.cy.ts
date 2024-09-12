/// <reference types="cypress" />
import "../support/getCommands";
import "../support/commands";

context("Schema C", () => {
  beforeEach(() => {
    cy.visitHost();
    cy.clickSchemaC();
  });
  describe("Form Happy Path - Schema C ", () => {
    it("Should fill the form with valid data - Schema C", () => {
      cy.fillFormWithRandomDataC();
      cy.verifyAppDataC();
      cy.isValidApp("pre.mt-4.bg-gray-100.p-4.overflow-auto", "Is validtrue");
    });
    it("Verify fields integrity", () => {
      cy.verifyAllFeaturesUnchecked();
      cy.verifyNoTextFieldsExistOrNotVisible();
      cy.activateAndVerifyAllFeatures();
      cy.assertCombobox('environment');
    });
  });
  describe("Error warnings and handling - Schema C", () => {
    it("Required fields", () => {
      cy.clickAllFeatures();
      cy.submitApp().click();
      cy.assertRequiredErrorsC();
      cy.verifyAppDataC();
      cy.isValidApp("pre.mt-4.bg-gray-100.p-4.overflow-auto", "Is validfalse");
    });

    it("Min and Max lenght", () => {
      cy.typeMinimumAppName();
      cy.submitApp().click();
      cy.assertMinMaxErrorsC()
    });
  });
});
