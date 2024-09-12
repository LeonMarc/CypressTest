/// <reference types="cypress" />

Cypress.Commands.add("visitHost", () => {
    cy.visit("http://localhost:3000");
  });
  
  Cypress.Commands.add("getRoleTabB", () => {
    return cy.get(`[role=tab]`).eq(1);
  });

  Cypress.Commands.add("getRoleTabC", () => {
    return cy.get("[role=tab]").last();
  });
  
  Cypress.Commands.add("clickSchemaB", () => {
    return cy.getRoleTabB().click();
  });
  
  Cypress.Commands.add("clickSchemaC", () => {
    return cy.getRoleTabC().click();
  });

  Cypress.Commands.add("getRoleComboBox", () => {
    return cy.get('[role="combobox"]');
  });
   
  //Errors

  Cypress.Commands.add("appNameRequiredError", () => {
    return cy.get(":nth-child(1) > p.text-red-500");
  });
  
  Cypress.Commands.add("versionRequiredError", () => {
    return cy.get(":nth-child(2) > p.text-red-500");
  });
  
  Cypress.Commands.add("maxUsersRequiredError", () => {
    return cy.get(":nth-child(4) > p.text-red-500");
  });
  
  Cypress.Commands.add("supportEmailRequiredError", () => {
    return cy.get(":nth-child(5) > p.text-red-500");
  });
  
  Cypress.Commands.add("configA1RequiredError", () => {
    return cy.get(":nth-child(7) > .mb-4 > :nth-child(1) > p.text-red-500");
  });
  
  Cypress.Commands.add("configB1RequiredError", () => {
    return cy.get(":nth-child(8) > .mb-4 > :nth-child(1) > p.text-red-500");
  });
  
  Cypress.Commands.add("configC1RequiredError", () => {
    return cy.get(":nth-child(9) > .mb-4 > :nth-child(1) > p.text-red-500");
  });
  
  Cypress.Commands.add("environmentRequiredError", () => {
    return cy.get(":nth-child(10) > p.text-red-500");
  });
  
  Cypress.Commands.add("minErrorAppName", () => {
    return cy.get(":nth-child(1) > p.text-red-500");
  });

  Cypress.Commands.add("userNameRequiredError", () => {
    return cy.get(".flex-col > :nth-child(1) > p.text-red-500");
  });
  Cypress.Commands.add("ageRequiredError", () => {
    return cy.get(".flex-col > :nth-child(2) > p.text-red-500");
  });
  
  Cypress.Commands.add("emailRequiredError", () => {
    return cy.get(".flex-col > :nth-child(3) > p.text-red-500");
  });
  
  Cypress.Commands.add("streetRequiredError", () => {
    return cy.get(".mb-4 > :nth-child(1) > p.text-red-500");
  });
  
  Cypress.Commands.add("cityRequiredError", () => {
    return cy.get(".mb-4 > :nth-child(2) > p.text-red-500");
  });
  
  Cypress.Commands.add("zipRequiredError", () => {
    return cy.get(".mb-4 > :nth-child(3) > p.text-red-500");
  });
  
  Cypress.Commands.add("genderRequiredError", () => {
    return cy.get(":nth-child(7) > p.text-red-500");
  });
  
  Cypress.Commands.add("minErrorUserName", () => {
    return cy.get(".flex-col > :nth-child(1) > p.text-red-500");
  });
  
  Cypress.Commands.add("maxErrorUserName", () => {
    return cy.get(".flex-col > :nth-child(1) > p.text-red-500");
  });

  Cypress.Commands.add("accountNameRequiredError", () => {
    return cy.get(":nth-child(1) > p.text-red-500");
  });
  
  Cypress.Commands.add("storageLimitRequiredError", () => {
    return cy.get(":nth-child(2) > p.text-red-500");
  });
  
  Cypress.Commands.add("contactEmailRequiredError", () => {
    return cy.get(":nth-child(2) > p.text-red-500");
  });
  
  Cypress.Commands.add("accountTypeRequiredError", () => {
    return cy.get(":nth-child(2) > p.text-red-500");
  });

  //getUser

  Cypress.Commands.add("userName", () => {
    return cy.get(".flex-col > :nth-child(1) > .flex");
  });
  
  Cypress.Commands.add("userAge", () => {
    return cy.get(".flex-col > :nth-child(2) > .flex");
  });
  
  Cypress.Commands.add("userEmail", () => {
    return cy.get(".flex-col > :nth-child(3) > .flex");
  });
  
  Cypress.Commands.add("userBio", () => {
    return cy.get(":nth-child(4) > .flex");
  });
  
  Cypress.Commands.add("newsCheckBox", () => {
    return cy.get(":nth-child(5) > input");
  });
  
  Cypress.Commands.add("userStreet", () => {
    return cy.get(".mb-4 > :nth-child(1) > .flex");
  });
  
  Cypress.Commands.add("userCity", () => {
    return cy.get(".mb-4 > :nth-child(2) > .flex");
  });
  
  Cypress.Commands.add("userZip", () => {
    return cy.get(".mb-4 > :nth-child(3) > .flex");
  });
  
  Cypress.Commands.add("profileVisibility", () => {
    return cy.get(":nth-child(8) > input");
  });
  
  Cypress.Commands.add("userSubmit", () => {
    return cy.get(".pt-0 > .inline-flex");
  });

  Cypress.Commands.add("valuesJson", () => {
    return cy.get("form > :nth-child(2)");
  });
  
  Cypress.Commands.add("errorsJson", () => {
    return cy.get("form > :nth-child(3)");
  });
  
  Cypress.Commands.add("isValid", () => {
    return cy.get("form > :nth-child(4)");
  });

  //getAccount

  Cypress.Commands.add("accountName", () => {
    return cy.get(".flex-col > :nth-child(1) > .flex");
  });
  
  Cypress.Commands.add("storageLimit", () => {
    return cy.get(".flex-col > :nth-child(2) > .flex");
  });
  
  Cypress.Commands.add("isActiveCheckbox", () => {
    return cy.get(".flex-col > :nth-child(3) > input");
  });
  
  Cypress.Commands.add("contactEmail", () => {
    return cy.get(":nth-child(4) > .flex");
  });
  
  Cypress.Commands.add("backupEnabledCheckbox", () => {
    return cy.get(":nth-child(5) > input");
  });
  
  Cypress.Commands.add("emailNotificationsCheckbox", () => {
    return cy.get(".mb-4 > :nth-child(1) > input");
  });
  
  Cypress.Commands.add("smsNotificacions", () => {
    return cy.get(".mb-4 > :nth-child(2) > input");
  });
  
  Cypress.Commands.add("pushNotifications", () => {
    return cy.get(".mb-4 > :nth-child(3) > input");
  });

  Cypress.Commands.add("subscriptionStatus", () => {
    return cy.get(":nth-child(8) > input");
  });
  
  Cypress.Commands.add("accountSubmit", () => {
    return cy.get(".pt-0 > .inline-flex");
  });
  
  Cypress.Commands.add("valuesAccount", () => {
    return cy.get("form > :nth-child(2)");
  });
  
  Cypress.Commands.add("errorsAccount", () => {
    returncy.get("form > :nth-child(3)");
  });
  
  Cypress.Commands.add("isValidAccount", () => {
    return cy.get("form > :nth-child(4)");
  });

  //getApp

  Cypress.Commands.add("appName", () => {
    return cy.get(".flex-col > :nth-child(1) > .flex");
  });
  
  Cypress.Commands.add("appVersion", () => {
    return cy.get(".flex-col > :nth-child(2) > .flex");
  });
  
  Cypress.Commands.add("enableLogsCheckbox", () => {
    return cy.get(".flex-col > :nth-child(3) > input");
  });
  
  Cypress.Commands.add("maxUsers", () => {
    return cy.get(":nth-child(4) > .flex");
  });
  
  Cypress.Commands.add("supportEmail", () => {
    return cy.get(":nth-child(5) > .flex");
  });
  
  Cypress.Commands.add("featuresA", () => {
    return cy.get(".mb-4 > :nth-child(1) > input");
  });
  
  Cypress.Commands.add("configA1", () => {
    return cy.get(":nth-child(7) > .mb-4 > :nth-child(1) > .flex");
  });
  
  Cypress.Commands.add("configA2", () => {
    return cy.get(":nth-child(7) > .mb-4 > :nth-child(2) > .flex");
  });
  
  Cypress.Commands.add("featuresB", () => {
    return cy.get(":nth-child(6) > .mb-4 > :nth-child(2) > input");
  });
  
  Cypress.Commands.add("configB1", () => {
    return cy.get(":nth-child(8) > .mb-4 > :nth-child(1) > .flex");
  });
  
  Cypress.Commands.add("configB2", () => {
    return cy.get(":nth-child(8) > .mb-4 > :nth-child(2) > .flex");
  });
  
  Cypress.Commands.add("featuresC", () => {
    return cy.get(".mb-4 > :nth-child(3) > input");
  });
  
  Cypress.Commands.add("configC1", () => {
    return cy.get(":nth-child(9) > .mb-4 > :nth-child(1) > .flex");
  });
  
  Cypress.Commands.add("configC2", () => {
    return cy.get(":nth-child(9) > .mb-4 > :nth-child(2) > .flex");
  });
  
  Cypress.Commands.add("clickAllFeatures", () => {
    cy.featuresA().click();
    cy.featuresB().click();
    cy.featuresC().click();
  });
  
  Cypress.Commands.add("getAllFeatures", () => {
    return cy.wrap([cy.featuresA(), cy.featuresB(), cy.featuresC()]);
  });
  
  Cypress.Commands.add("getAllConfigs", () => {
    return [
      cy.configA1(),
      cy.configA2(),
      cy.configB1(),
      cy.configB2(),
      cy.configC1(),
      cy.configC2(),
    ];
  });
  
  Cypress.Commands.add("autoUpdate", () => {
    return cy.get(":nth-child(11) > input");
  });
  
  Cypress.Commands.add("submitApp", () => {
    return cy.get(".pt-0 > .inline-flex");
  });
  
  Cypress.Commands.add("isValidApp", () => {
    return cy.get("form > :nth-child(4)");
  });