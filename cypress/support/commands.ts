/// <reference types="cypress" />
import { formDataOptions } from "./constants";
import { accountDataOptions } from "./constants";
import { featuresDataOptions } from "./constants";
import { appDataOptions } from "./constants";
import { getRandomOption } from "./functions";
import { errorMessages } from "./constants";
import { errorRequiredFields } from "./constants";
import { minMaxErrors } from "./constants";
import { comboboxOptions } from './constants';
import "../support/getCommands";
import "../support/commands";

Cypress.Commands.add("fillFormWithRandomData", () => {
  const formData = {
    name: getRandomOption(formDataOptions.name),
    age: getRandomOption(formDataOptions.age),
    email: getRandomOption(formDataOptions.email),
    bio: getRandomOption(formDataOptions.bio),
    street: getRandomOption(formDataOptions.street),
    city: getRandomOption(formDataOptions.city),
    zipcode: getRandomOption(formDataOptions.zipcode),
  };

  if (Object.values(formData).every((value) => value)) {
    cy.userName('input[name="name"]').type(formData.name);
    cy.userAge('input[name="age"]').type(formData.age);
    cy.userEmail('input[name="email"]').type(formData.email);
    cy.userBio('input[name="bio"]').type(formData.bio);
    cy.userStreet('input[name="street"]').type(formData.street);
    cy.userCity('input[name="city"]').type(formData.city);
    cy.userZip('input[name="zipcode"]').type(formData.zipcode);
  } else {
    throw new Error("One or more form data options are undefined");
  }
  cy.newsCheckBox().click();
  cy.selectFirstOption('[role="combobox"]');
  cy.profileVisibility().click();
  cy.userSubmit().click();
  cy.selectSecondOption('[role="combobox"]');
  cy.userSubmit().click();
  cy.selectThirdOption('[role="combobox"]');
  cy.userSubmit().click();
});

Cypress.Commands.add("verifyFormData", (valuesText, formData) => {
  cy.valuesJson()
    .invoke("text")
    .then((text) => {
      console.log("Displayed text:", text);
      try {
        const newsletterMatch = text.match(/"newsletter":\s*(true|false)/);
        const profileVisibilityMatch = text.match(
          /"profile_visibility":\s*(true|false)/
        );
        const usernameMatch = text.match(/"username":\s*"([^"]+)"/);
        const ageMatch = text.match(/"age":\s*"(\d+)"/);
        const emailMatch = text.match(/"email":\s*"([^"]+)"/);
        const bioMatch = text.match(/"bio":\s*"([^"]+)"/);
        const streetMatch = text.match(/"street":\s*"([^"]+)"/);
        const cityMatch = text.match(/"city":\s*"([^"]+)"/);
        const zipcodeMatch = text.match(/"zipcode":\s*"(\d+)"/);

        if (
          newsletterMatch &&
          profileVisibilityMatch &&
          usernameMatch &&
          ageMatch &&
          emailMatch &&
          bioMatch &&
          streetMatch &&
          cityMatch &&
          zipcodeMatch
        ) {
          expect(newsletterMatch[1] === "true").to.equal(formData.newsletter);
          expect(profileVisibilityMatch[1] === "true").to.equal(
            formData.profile_visibility
          );
          expect(usernameMatch[1]).to.equal(formData.username);
          expect(ageMatch[1]).to.equal(formData.age);
          expect(emailMatch[1]).to.equal(formData.email);
          expect(bioMatch[1]).to.equal(formData.bio);
          expect(streetMatch[1]).to.equal(formData.address.street);
          expect(cityMatch[1]).to.equal(formData.address.city);
          expect(zipcodeMatch[1]).to.equal(formData.address.zipcode);
        } else {
          throw new Error(
            "No se encontraron todas las coincidencias en el texto"
          );
        }
      } catch (error) {
        console.error("Error al comparar los datos:", error);
      }
    });
});

Cypress.Commands.add("verifyErrorMessages", (errorsJson) => {
  cy.errorsJson().each(($el) => {
    const text = $el.text().trim();
    const key = Object.keys(errorMessages).find((k) => text.includes(k));
    if (key) {
      expect(text).to.include(errorMessages[key]);
    } else {
      throw new Error(`No matching error message found for text: ${text}`);
    }
  });
});

Cypress.Commands.add("verifyValid", (isValid, expectedText) => {
  cy.isValid()
    .should("have.length.gte", 1)
    .eq(0)
    .should("have.text", expectedText);
});

Cypress.Commands.add("typeMinimumUserName", () => {
  cy.userName().type("1");
});

Cypress.Commands.add("typeMaximumUserName", () => {
  cy.userName().type("123456789012345678901234");
});

Cypress.Commands.add("fillFormWithRandomDataB", () => {
  const accountData = {
    accountName: getRandomOption(accountDataOptions.accountName),
    storageLimit: getRandomOption(accountDataOptions.storageLimit),
    contactEmail: getRandomOption(accountDataOptions.contactEmail),
  };

  if (Object.values(accountData).every((value) => value)) {
    cy.accountName('input[name="account_name"]').type(accountData.accountName);
    cy.storageLimit('input[name="storage_limit"]').type(
      accountData.storageLimit
    );
    cy.contactEmail('input[name="contact_email"]').type(
      accountData.contactEmail
    );
  } else {
    throw new Error("One or more form data options are undefined");
  }
  cy.isActiveCheckbox().click();
  cy.backupEnabledCheckbox().click();
  cy.emailNotificationsCheckbox().click();
  cy.smsNotificacions().click();
  cy.pushNotifications().click();
  cy.selectFirstOption('[role="combobox"]');
  cy.subscriptionStatus().click();
  cy.accountSubmit().click();
  cy.selectSecondOption('[role="combobox"]');
  cy.accountSubmit().click();
  cy.selectThirdOption('[role="combobox"]');
  cy.accountSubmit().click();
});

Cypress.Commands.add("verifyAccountDataB", (valuesText, accountData) => {
  cy.valuesJson()
    .invoke("text")
    .then((text) => {
      console.log("Displayed text:", text);
      try {
        const is_activeMatch = text.match(/"is_active":\s*(true|false)/);
        const backup_enabledMatch = text.match(
          /"backup_enabled":\s*(true|false)/
        );
        const email_notificationsMatch = text.match(
          /"email_notifications":\s*(true|false)/
        );
        const sms_notificationsMatch = text.match(
          /"sms_notifications":\s*(true|false)/
        );
        const push_notificationsMatch = text.match(
          /"push_notifications":\s*(true|false)/
        );
        const subscription_statusMatch = text.match(
          /"subscription_status":\s*(true|false)/
        );
        const accountNameMatch = text.match(/"account_name":\s*"([^"]+)"/);
        const storageLimitMatch = text.match(/"storage_limit":\s*"(\d+)"/);
        const contactEmailMatch = text.match(/"contact_email":\s*"([^"]+)"/);

        if (
          is_activeMatch &&
          backup_enabledMatch &&
          email_notificationsMatch &&
          sms_notificationsMatch &&
          push_notificationsMatch &&
          sms_notificationsMatch &&
          push_notificationsMatch &&
          subscription_statusMatch &&
          accountNameMatch &&
          storageLimitMatch &&
          contactEmailMatch
        ) {
          expect(is_activeMatch[1] === "true").to.equal(accountData.is_active);
          expect(backup_enabledMatch[1] === "true").to.equal(
            accountData.backup_enabled
          );
          expect(email_notificationsMatch[1] === "true").to.equal(
            accountData.email_notifications
          );
          expect(sms_notificationsMatch[1] === "true").to.equal(
            accountData.sms_notifications
          );
          expect(push_notificationsMatch[1] === "true").to.equal(
            accountData.push_notifications
          );
          expect(subscription_statusMatch[1] === "true").to.equal(
            accountData.subscrption_status
          );
          expect(accountNameMatch[1]).to.equal(accountData.account_name);
          expect(storageLimitMatch[1]).to.equal(accountData.storage_limit);
          expect(contactEmailMatch[1]).to.equal(accountData.contact_emailemail);
        } else {
          throw new Error(
            "No se encontraron todas las coincidencias en el texto"
          );
        }
      } catch (error) {
        console.error("Error al comparar los datos:", error);
      }
    });

  Cypress.Commands.add("verifyValidAccount", (isValid, expectedText) => {
    cy.isValidAccount()
      .should("have.length.gte", 1)
      .eq(0)
      .should("have.text", expectedText);
  });
});

Cypress.Commands.add("typeMinimumAccountName", () => {
  cy.accountName().type("1");
});

Cypress.Commands.add("fillFormWithRandomDataC", () => {
  const appData = {
    appName: getRandomOption(appDataOptions.appName),
    appVersion: getRandomOption(appDataOptions.appVersion),
    maxUsers: getRandomOption(appDataOptions.maxUsers),
    supportEmail: getRandomOption(appDataOptions.supportEmail),
  };

  if (Object.values(appData).every((value) => value)) {
    cy.appName('input[name="account_name"]').type(appData.appName);
    cy.appVersion('input[name="storage_limit"]').type(appData.appVersion);
    cy.maxUsers('input[name="contact_email"]').type(appData.maxUsers);
    cy.supportEmail('input[name="contact_email"]').type(appData.supportEmail);
  } else {
    throw new Error("One or more form data options are undefined");
  }
  cy.enableLogsCheckbox().click();
  cy.clickAllFeatures();
  const featuresData = {
    configA1: getRandomOption(featuresDataOptions.configA1),
    configA2: getRandomOption(featuresDataOptions.configA2),
    configB1: getRandomOption(featuresDataOptions.configB1),
    configB2: getRandomOption(featuresDataOptions.configB2),
    configC1: getRandomOption(featuresDataOptions.configC1),
    configC2: getRandomOption(featuresDataOptions.configC2),
  };

  if (Object.values(featuresData).every((value) => value)) {
    cy.configA1('input[name="config_a"]').type(featuresData.configA1);
    cy.configA2('input[name="config_b"]').type(featuresData.configA2);
    cy.configB1('input[name="config_c"]').type(featuresData.configB1);
    cy.configB2('input[name="config_d"]').type(featuresData.configB2);
    cy.configC1('input[name="config_c"]').type(featuresData.configC1);
    cy.configC2('input[name="config_d"]').type(featuresData.configC2);
  } else {
    throw new Error("One or more form data options are undefined");
  }
  cy.selectFirstOption('[role="combobox"]');
  cy.submitApp().click();
  cy.selectSecondOption('[role="combobox"]');
  cy.submitApp().click();
  cy.selectThirdOption('[role="combobox"]');
  cy.submitApp().click();
});

Cypress.Commands.add("verifyAppDataC", (valuesText, appData) => {
  cy.valuesJson()
    .invoke("text")
    .then((text) => {
      console.log("Displayed text:", text);
      try {
        const enableLogsMatch = text.match(/"enable_logs":\s*(true|false)/);
        const featureAMatch = text.match(/"feature_a":\s*(true|false)/);
        const featureBMatch = text.match(/"feature_b":\s*(true|false)/);
        const featureCMatch = text.match(/"feature_c":\s*(true|false)/);
        const appNameMatch = text.match(/"app_name":\s*"([^"]+)"/);
        const appVersionMatch = text.match(/"verion":\s*"(\d+)"/);
        const maxUsersMatch = text.match(/"max_users":\s*"([^"]+)"/);
        const configAMatch = text.match(/"config_a":\s*"([^"]+)"/);
        const configBMatch = text.match(/"config_b":\s*"([^"]+)"/);
        const configCMatch = text.match(/"config_c":\s*"([^"]+)"/);
        const configDMatch = text.match(/"config_d":\s*"([^"]+)"/);
        const configCCMatch = text.match(/"configc_c":\s*"([^"]+)"/);
        const configCDMatch = text.match(/"configc_d":\s*"([^"]+)"/);

        if (
          appNameMatch &&
          appVersionMatch &&
          maxUsersMatch &&
          enableLogsMatch &&
          featureAMatch &&
          featureBMatch &&
          featureCMatch &&
          configAMatch &&
          configBMatch &&
          configCMatch &&
          configDMatch &&
          configCCMatch &&
          configCDMatch
        ) {
          expect(enableLogsMatch[1] === "true").to.equal(appData.enable_logs);
          expect(featureAMatch[1] === "true").to.equal(appData.feature_a);
          expect(featureBMatch[1] === "true").to.equal(appData.feature_b);
          expect(featureCMatch[1] === "true").to.equal(appData.feature_c);
          expect(configAMatch[1]).to.equal(appData.config_a);
          expect(configBMatch[1]).to.equal(appData.config_b);
          expect(configCMatch[1]).to.equal(appData.config_c);
          expect(configDMatch[1]).to.equal(appData.config_d);
          expect(configCCMatch[1]).to.equal(appData.configc_c);
          expect(configCDMatch[1]).to.equal(appData.configc_d);
          expect(appNameMatch[1]).to.equal(appData.app_name);
          expect(appVersionMatch[1]).to.equal(appData.version);
          expect(maxUsersMatch[1]).to.equal(appData.contact_max_users);
        } else {
          throw new Error(
            "No se encontraron todas las coincidencias en el texto"
          );
        }
      } catch (error) {
        console.error("Error al comparar los datos:", error);
      }
    });
});

Cypress.Commands.add("verifyValidApp", (isValid, expectedText) => {
  cy.isValidApp()
    .should("have.length.gte", 1)
    .eq(0)
    .should("have.text", expectedText);
});

Cypress.Commands.add("typeMinimumAppName", () => {
  cy.appName().type("1");
});

Cypress.Commands.add("verifyAllFeaturesUnchecked", () => {
  const features = [cy.featuresA(), cy.featuresB(), cy.featuresC()];
  features.forEach((feature) => {
    feature.should("not.be.checked");
  });
});

Cypress.Commands.add("verifyNoTextFieldsExistOrNotVisible", () => {
  const textFields = [
    "#configA1",
    "#configA2",
    "#configB1",
    "#configB2",
    "#configC1",
    "#configC2",
  ];

  textFields.forEach((selector) => {
    cy.get("body").then(($body) => {
      if ($body.find(selector).length > 0) {
        cy.get(selector).should("not.be.visible");
      } else {
        cy.get(selector).should("not.exist");
      }
    });
  });
});

Cypress.Commands.add("verifyAllConfigsExist", () => {
  const configs = [
    cy.configA1(),
    cy.configA2(),
    cy.configB1(),
    cy.configB2(),
    cy.configC1(),
    cy.configC2(),
  ];

  configs.forEach((config) => {
    config.should("exist");
  });
});

Cypress.Commands.add("activateAndVerifyAllFeatures", () => {
  cy.clickAllFeatures();
  cy.verifyAllConfigsExist();
});

Cypress.Commands.add("getRequiredErrorsC", () => {
  return [
    cy.appNameRequiredError(),
    cy.versionRequiredError(),
    cy.maxUsersRequiredError(),
    cy.supportEmailRequiredError(),
    cy.configA1RequiredError(),
    cy.configB1RequiredError(),
    cy.configC1RequiredError(),
    cy.environmentRequiredError(),
  ];
});

Cypress.Commands.add("assertRequiredErrorsC", () => {
  const errors = [
    cy.appNameRequiredError(),
    cy.versionRequiredError(),
    cy.maxUsersRequiredError(),
    cy.supportEmailRequiredError(),
    cy.configA1RequiredError(),
    cy.configB1RequiredError(),
    cy.configC1RequiredError(),
    cy.environmentRequiredError(),
  ];

  errors.forEach((error) => {
    error
      .should("exist")
      .and("contain.text", errorRequiredFields.requiredField);
  });
});


Cypress.Commands.add("getRequiredErrorsB", () => {
  return [
cy.accountNameRequiredError(),
cy.storageLimitRequiredError(),
cy.contactEmailRequiredError(),
cy.accountTypeRequiredError(),
];
});

Cypress.Commands.add("assertRequiredErrorsB", () => {
  const errors = [
    cy.accountNameRequiredError(),
    cy.storageLimitRequiredError(),
    cy.contactEmailRequiredError(),
    cy.accountTypeRequiredError(),
  ];

  errors.forEach((error) => {
    error
      .should("exist")
      .and("contain.text", errorRequiredFields.requiredField);
  });
});

Cypress.Commands.add("assertMinMaxErrors", () => {
  const errors = [
    cy.minErrorAppName(),
  ];

  errors.forEach((error) => {
    error
      .should("exist")
      .and("contain.text", minMaxErrors.minAppName);
  });
});
  

Cypress.Commands.add("clickComboBox", () => {
  return cy.getRoleComboBox().click();
});

Cypress.Commands.add('verifyComboboxOptions', (comboboxId) => {
  const expectedOptions = comboboxOptions[comboboxId];
  
  expectedOptions.forEach(option => {
    cy.get("[role=option]").contains(option).should('be.visible');
  });
});

Cypress.Commands.add('assertCombobox', (comboboxId) => {
  cy.clickComboBox();
  cy.verifyComboboxOptions(comboboxId);
});

Cypress.Commands.add("selectFirstOption", (comboboxSelector) => {
  cy.get(comboboxSelector)
    .click({ force: true })
    .then(() => {
      cy.get('[role="option"]').first().click({ force: true });
    });
});

Cypress.Commands.add("selectSecondOption", (comboboxSelector) => {
  cy.get(comboboxSelector)
    .click({ force: true })
    .then(() => {
      cy.get('[role="option"]').eq(1).click({ force: true });
    });
});

Cypress.Commands.add("selectThirdOption", (comboboxSelector) => {
  cy.get(comboboxSelector)
    .click({ force: true })
    .then(() => {
      cy.get('[role="option"]').last().click({ force: true });
    });
});